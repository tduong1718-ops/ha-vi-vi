import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  X,
  Sparkles,
  RotateCw,
  Copy,
  Check,
  User,
  Send,
  Heart,
  Snowflake,
} from 'lucide-react';
import { Character } from '../types';
import { FATE_MESSAGES, FateMessage } from '../data/gieoDuyenData';

interface GieoDuyenModalProps {
  isOpen: boolean;
  onClose: () => void;
  characters: Character[];
  onOpenCharacter?: (character: Character) => void;
  onOpenConfessionModal?: () => void;
}

export default function GieoDuyenModal({
  isOpen,
  onClose,
  characters,
  onOpenCharacter,
  onOpenConfessionModal,
}: GieoDuyenModalProps) {
  const [stage, setStage] = useState<'intro' | 'shuffling' | 'result'>('intro');
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [selectedFate, setSelectedFate] = useState<FateMessage | null>(null);
  const [copied, setCopied] = useState(false);
  const [shuffleTextIdx, setShuffleTextIdx] = useState(0);

  const shuffleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const shuffleTexts = [
    'Đang lật mở thiệp tuyết...',
    'Hệ thống đang quét nhân duyên trùng phùng...',
    'Giai điệu mùa đông đang ngân vang...',
    'Định mệnh đang gọi tên bạn...',
  ];

  // Clear timers safely
  const clearActiveTimers = useCallback(() => {
    if (shuffleTimerRef.current) {
      clearTimeout(shuffleTimerRef.current);
      shuffleTimerRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Draw destiny logic with proper timer cleanup
  const handleDrawDestiny = useCallback(() => {
    if (!characters || characters.length === 0) return;
    clearActiveTimers();

    setStage('shuffling');
    setCopied(false);

    // Pick random character and random fate message
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    const randomFate = FATE_MESSAGES[Math.floor(Math.random() * FATE_MESSAGES.length)];

    intervalRef.current = setInterval(() => {
      setShuffleTextIdx((prev) => (prev + 1) % shuffleTexts.length);
    }, 320);

    // Reveal after 1.2s smooth animation
    shuffleTimerRef.current = setTimeout(() => {
      clearActiveTimers();
      setSelectedChar(randomChar);
      setSelectedFate(randomFate);
      setStage('result');
    }, 1200);
  }, [characters, clearActiveTimers]);

  // Handle opening and closing lifecycle
  useEffect(() => {
    if (isOpen) {
      handleDrawDestiny();
    } else {
      clearActiveTimers();
      setStage('intro');
      setCopied(false);
    }
    return () => {
      clearActiveTimers();
    };
  }, [isOpen]);

  // Keyboard shortcut: ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyFortune = async () => {
    if (!selectedChar || !selectedFate) return;
    const textToCopy = `❄️ QUẺ GIEO DUYÊN MÙA TUYẾT ❄️\n✨ Nhân duyên trùng phùng: ${selectedChar.name}\n💬 Thông điệp: "${selectedFate.message}"\n💡 Lời nhắn: ${selectedFate.advice}\n🔮 Biểu tượng may mắn: ${selectedFate.luckySymbol} (Số may mắn: ${selectedFate.luckyNumber})\n---\nThư Gửi Mùa Tuyết · Hạ Vi Vi`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback copy failed silently
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/50 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-lg bg-gradient-to-b from-[#F3F8FE] via-[#FFFFFF] to-[#EEF5FC] border border-[#C5DCF2] rounded-3xl shadow-[0_20px_60px_rgba(25,55,90,0.3)] overflow-hidden transition-all my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar with close button */}
        <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-[#DCEAF7]/80 bg-white/70 backdrop-blur-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-[#E3F1FD] text-[#366393] flex items-center justify-center text-base shadow-2xs">
              🔮
            </span>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#234A74]">
                Gieo Duyên Mùa Tuyết
              </h3>
              <p className="text-[11px] text-[#6387AC]">Quẻ duyên &amp; Thông điệp ngẫu nhiên</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-[#E5F1FC] text-[#4A729A] flex items-center justify-center transition-colors cursor-pointer border border-[#D5E5F5]"
            aria-label="Đóng"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6">
          {/* STAGE 1: SHUFFLING / ANIMATION */}
          {stage === 'shuffling' && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-5">
              {/* Spinning Snowy Crystal Fortune Slip */}
              <div className="relative w-28 h-36 flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#547DAA] via-[#83B0DD] to-[#C1E0FF] animate-pulse shadow-lg opacity-80" />
                <div className="absolute inset-1 rounded-xl bg-white flex flex-col items-center justify-center p-3 border border-[#BBD7F3]">
                  <Sparkles className="w-10 h-10 text-[#4372A3] animate-spin" style={{ animationDuration: '2.5s' }} />
                  <span className="text-xs font-serif text-[#2F5682] mt-2 font-bold">❄️ Quẻ Duyên</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="font-serif text-base font-semibold text-[#234A74] animate-pulse">
                  {shuffleTexts[shuffleTextIdx]}
                </p>
                <p className="text-xs text-[#6A8FB7]">Giai điệu duyên phận đang xoay tròn...</p>
              </div>
            </div>
          )}

          {/* STAGE 2: REVEALED RESULT */}
          {stage === 'result' && selectedChar && selectedFate && (
            <div className="space-y-5 animate-fade-in">
              {/* Category Tag Header */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F1FC] border border-[#BBD7F3] text-xs font-semibold text-[#2C527D]">
                  <span>{selectedFate.luckySymbol.split(' ')[0]}</span>
                  <span>{selectedFate.title}</span>
                </span>
                <span className="text-xs text-[#6B8EB5] font-mono">
                  May mắn: #{selectedFate.luckyNumber}
                </span>
              </div>

              {/* Character Match Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#EBF4FD] via-[#F5F9FE] to-[#EFF6FD] border border-[#C5DCF2] shadow-2xs flex items-center gap-3.5 relative overflow-hidden">
                {/* Character Avatar Initial Circle Badge */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0 p-1 bg-gradient-to-br from-white via-[#E8F2FC] to-[#D5E7F9] shadow-md ring-2 ring-[#B3D4F5] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#4D76A2] to-[#2B527E] flex flex-col items-center justify-center text-white shadow-inner relative overflow-hidden">
                    <Snowflake className="w-8 h-8 text-white/15 absolute -right-1 -bottom-1 pointer-events-none" />
                    <span className="font-serif text-2xl sm:text-3xl font-bold drop-shadow-sm select-none">
                      {selectedChar.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#527CA7]">
                    <Heart className="w-3.5 h-3.5 fill-[#7DA6D1] text-[#527CA7]" />
                    <span className="font-medium">Nhân duyên trùng phùng</span>
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1E436D] truncate">
                    {selectedChar.name}
                  </h4>
                  {selectedChar.slogan && (
                    <p className="text-xs font-medium text-[#3A628C] italic truncate">
                      "{selectedChar.slogan}"
                    </p>
                  )}
                </div>
              </div>

              {/* Fate Message Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E5F5] shadow-2xs space-y-3">
                <div className="flex items-start gap-2.5">
                  <span className="text-xl shrink-0 mt-0.5 select-none">💌</span>
                  <div className="space-y-1">
                    <h5 className="font-serif font-bold text-sm text-[#274E79]">
                      Thông Điệp Duyên Phận
                    </h5>
                    <p className="text-sm text-[#385E88] leading-relaxed italic">
                      "{selectedFate.message}"
                    </p>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-[#E5F0FB] flex items-start gap-2 text-xs text-[#48719C]">
                  <span className="font-bold text-[#2A5380] shrink-0">💡 Lời nhắn:</span>
                  <span className="leading-5">{selectedFate.advice}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {/* Re-draw */}
                <button
                  type="button"
                  onClick={handleDrawDestiny}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white hover:bg-[#EDF5FD] border border-[#CBDCEE] text-xs font-semibold text-[#29507B] transition-colors cursor-pointer shadow-2xs"
                  title="Gieo lại quẻ mới"
                >
                  <RotateCw className="w-3.5 h-3.5 text-[#5984B2]" />
                  <span>Gieo lại</span>
                </button>

                {/* View character details */}
                {onOpenCharacter && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenCharacter(selectedChar);
                    }}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#567CA6] hover:bg-[#436790] text-white text-xs font-semibold transition-colors cursor-pointer shadow-2xs"
                    title="Xem chi tiết nhân vật"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Xem Thiệp</span>
                  </button>
                )}

                {/* Copy fortune */}
                <button
                  type="button"
                  onClick={handleCopyFortune}
                  className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer shadow-2xs ${
                    copied
                      ? 'bg-[#E3F6EC] text-[#1E7E4E] border-[#A8E2C2]'
                      : 'bg-white hover:bg-[#EDF5FD] border-[#CBDCEE] text-[#29507B]'
                  }`}
                  title="Sao chép thông điệp quẻ duyên"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1E7E4E]" />
                      <span>Đã chép!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#5984B2]" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>

                {/* Send confession letter */}
                {onOpenConfessionModal && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenConfessionModal();
                    }}
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#E8F2FC] hover:bg-[#D9EBFA] border border-[#B5D5F5] text-xs font-semibold text-[#204975] transition-colors cursor-pointer shadow-2xs"
                    title="Gửi thư tâm sự"
                  >
                    <Send className="w-3.5 h-3.5 text-[#4C78A5]" />
                    <span>Gửi thư</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
