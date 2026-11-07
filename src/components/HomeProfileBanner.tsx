import React, { useState, useEffect, useMemo } from 'react';
import {
  Compass,
  Feather,
  ExternalLink,
  ArrowRight,
  Play,
  Pause,
  SkipBack,
  SkipForward,
} from 'lucide-react';
import { Character, CreatorProfile } from '../types';
import { CharacterCard } from './CharacterDetailModal';

interface HomeProfileBannerProps {
  profile: CreatorProfile;
  characters: Character[];
  onExploreCharacters: () => void;
  onOpenConfessionModal: () => void;
  onOpenCharacter: (character: Character) => void;
  onSelectCharacterTag: (tag: string) => void;
  isMusicPlaying?: boolean;
  onToggleMusic?: () => void;
}

/** Monochrome ice-blue Facebook icon */
function FacebookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/** Monochrome ice-blue Discord icon */
function DiscordIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
    </svg>
  );
}

/** Minimalist Vinyl Record Disc in soft pastel ice blue matching winter snow theme */
function VinylDisc() {
  return (
    <div className="w-full h-full rounded-full relative overflow-hidden shadow-[0_12px_36px_-6px_rgba(70,120,170,0.22)] select-none">
      {/* Base gradient: delicate pastel ice blue & soft powder blue */}
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, #ffffff 0%, #e8f3fc 20%, #cce4f9 45%, #a8d1f5 72%, #82baf0 100%)',
        }}
      />

      {/* Detailed realistic concentric sound grooves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 320 320"
        fill="none"
      >
        <circle cx="160" cy="160" r="158" stroke="rgba(255,255,255,0.95)" strokeWidth="1.8" />
        <circle cx="160" cy="160" r="154" stroke="rgba(70,125,180,0.2)" strokeWidth="0.8" />
        <circle cx="160" cy="160" r="150" stroke="rgba(255,255,255,0.85)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="146" stroke="rgba(70,125,180,0.18)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="142" stroke="rgba(255,255,255,0.8)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="138" stroke="rgba(70,125,180,0.2)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="134" stroke="rgba(255,255,255,0.85)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="130" stroke="rgba(70,125,180,0.18)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="126" stroke="rgba(255,255,255,0.75)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="122" stroke="rgba(70,125,180,0.2)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="118" stroke="rgba(255,255,255,0.85)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="114" stroke="rgba(70,125,180,0.18)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="110" stroke="rgba(255,255,255,0.75)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="106" stroke="rgba(70,125,180,0.2)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="102" stroke="rgba(255,255,255,0.8)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="98" stroke="rgba(70,125,180,0.18)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="94" stroke="rgba(255,255,255,0.75)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="90" stroke="rgba(70,125,180,0.2)" strokeWidth="0.75" />
        <circle cx="160" cy="160" r="86" stroke="rgba(255,255,255,0.8)" strokeWidth="0.75" />

        {/* Distinct radial specular markers & gleam accents that make rotation instantly visible */}
        <line x1="160" y1="4" x2="160" y2="30" stroke="rgba(255,255,255,0.98)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="160" y1="290" x2="160" y2="316" stroke="rgba(255,255,255,0.98)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="4" y1="160" x2="30" y2="160" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
        <line x1="290" y1="160" x2="316" y2="160" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="160" cy="15" r="3.5" fill="#ffffff" filter="drop-shadow(0 0 5px rgba(255,255,255,0.95))" />
        <circle cx="160" cy="305" r="3.5" fill="#ffffff" filter="drop-shadow(0 0 5px rgba(255,255,255,0.95))" />
      </svg>

      {/* Prominent High-Contrast Conic Specular Reflections (dual rotating light beams) */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'conic-gradient(from 45deg, transparent 0deg, rgba(255,255,255,0.9) 30deg, rgba(255,255,255,0.98) 45deg, rgba(255,255,255,0.4) 60deg, transparent 90deg, rgba(70,120,170,0.16) 135deg, transparent 180deg, rgba(255,255,255,0.9) 210deg, rgba(255,255,255,0.98) 225deg, rgba(255,255,255,0.4) 240deg, transparent 270deg, rgba(70,120,170,0.16) 315deg, transparent 360deg)',
        }}
      />

      {/* Polished outer edge ring */}
      <div className="absolute inset-0 rounded-full border border-white/95 pointer-events-none shadow-inner" />
    </div>
  );
}

export default function HomeProfileBanner({
  profile,
  characters,
  onExploreCharacters,
  onOpenConfessionModal,
  onOpenCharacter,
  onSelectCharacterTag,
  isMusicPlaying = false,
  onToggleMusic,
}: HomeProfileBannerProps) {
  const [coverError, setCoverError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    setAvatarError(false);
  }, [profile.avatarUrl]);

  useEffect(() => {
    setCoverError(false);
  }, [profile.coverUrl]);

  const bioLines = profile.bio
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  // Top 3 Characters sorted strictly by highest view count
  const topViewedCharacters = useMemo(() => {
    return [...characters]
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 3);
  }, [characters]);

  // Primary cover candidate: user's coverUrl, with fallback to reference landscape
  const effectiveCover = coverError
    ? '/public/assets/aistudio/image_6d59684b.png'
    : profile.coverUrl || '/public/assets/aistudio/image_6d59684b.png';

  return (
    <section id="home" className="pt-2 sm:pt-4 pb-12 sm:pb-16 relative">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 space-y-9 sm:space-y-12">
        {/* ============================================================ */}
        {/* BANNER GIAO DIỆN CHUẨN THEO ẢNH MẪU (image_99a75591.png):
            - ĐĨA VINYL XANH DƯƠNG PASTEL NẰM MỘT NỬA TRÊN BANNER, MỘT NỬA BÊN NGOÀI
            - VIỀN ĐĨA LỘ RA BÊN NGOÀI CÓ ĐỘ DÀY CHUẨN ~40% BÁN KÍNH AVATAR
            - VIỀN NỬA TRONG BỊ ẢNH BÌA CHE KHUẤT HOÀN TOÀN
            - HIỆU ỨNG XOAY 360 ĐỘ LIÊN TỤC VỚI VỆT SÁNG PHẢN QUANG RÕ RÀNG
            - AVATAR HÌNH TRÒN ĐỨNG YÊN VỚI VIỀN TRẮNG SẮC NÉT NẰM ĐÈ LÊN GÓC TRÁI BANNER
            - TƯƠNG THÍCH MƯỢT MÀ VỚI TẤT CẢ MÀN HÌNH ĐIỆN THOẠI DI ĐỘNG (RESPONSIVE)
        */}
        {/* ============================================================ */}
        <div className="relative pt-1 sm:pt-3">
          {/* Container tạo khoảng đệm lùi sang phải tương thích responsive cho cả mobile & desktop:
              - Mobile (<640px): pl-[68px] đủ rộng cho đĩa w-[124px] (bán kính 62px) nằm hoàn toàn trong màn hình, không bị che/cắt góc (+6px lề trong container + 12px lề trang = 18px cách mép màn hình điện thoại).
              - sm/md/lg: Tăng tương xứng đảm bảo viền ngoài của đĩa luôn lộ nửa vòng tròn hoàn mỹ, nửa trong giấu êm ái sau banner.
          */}
          <div className="relative pl-[68px] sm:pl-[96px] md:pl-[120px] lg:pl-[144px]">
            {/* 1. VÒNG ĐĨA VINYL (Z-0: Nằm một nửa trên banner, một nửa bên ngoài. Nửa trong bị banner che!) */}
            <div
              className="absolute left-[68px] sm:left-[96px] md:left-[120px] lg:left-[144px] top-1/2 -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none w-[124px] h-[124px] sm:w-[176px] sm:h-[176px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] select-none"
              aria-hidden="true"
            >
              {/* Vòng đĩa vinyl xoay 360 độ liên tục, vệt sáng phản quang quay tròn rõ nét */}
              <div
                className="w-full h-full animate-vinyl-spin"
                style={{ animation: 'vinylSlowSpin 9s linear infinite', willChange: 'transform' }}
              >
                <VinylDisc />
              </div>
            </div>

            {/* 2. ẢNH BÌA (COVER CARD: Z-10, HÌNH CHỮ NHẬT NGANG, BO GÓC LỚN, CHE HOÀN TOÀN NỬA TRONG CỦA ĐĨA) */}
            <div className="relative z-10 w-full min-h-[176px] sm:min-h-[230px] md:min-h-[270px] lg:min-h-[310px] rounded-[22px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border-2 border-white/90 ring-1 ring-[#CFE3F6] shadow-[0_20px_50px_-15px_rgba(65,100,140,0.22)] bg-gradient-to-br from-[#EAF4FD] via-[#F3F8FE] to-[#F9FCFF] flex flex-col justify-between">
              {/* Lớp ảnh nền cover */}
              <div className="absolute inset-0 z-0">
                <img
                  key={effectiveCover}
                  src={effectiveCover}
                  alt={`Ảnh bìa của ${profile.name}`}
                  referrerPolicy="no-referrer"
                  onError={() => setCoverError(true)}
                  className="w-full h-full object-cover"
                />

                {/* Soft gradient glassmorphism overlay for contrast & readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-black/35 pointer-events-none" />
                <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Hàng trên: 3 dấu chấm trang trí góc phải trên cùng */}
              <div className="relative z-10 pt-3 sm:pt-5 pr-3.5 sm:pr-7 flex items-center justify-end">
                <div
                  aria-hidden="true"
                  className="flex items-center gap-1.5 text-white/80 text-xs sm:text-sm tracking-widest select-none drop-shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/85" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/85" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/85" />
                </div>
              </div>

              {/* Hàng giữa & dưới: Tên phong cách thư pháp (Script) + Cụm phát nhạc mini mùa tuyết */}
              <div className="relative z-10 p-3 sm:p-7 md:p-8 flex flex-col items-end text-right space-y-1.5 sm:space-y-4">
                {/* Tên Calligraphy Script uốn lượn lãng mạn */}
                <div className="space-y-0.5 sm:space-y-1">
                  <h1 className="font-script text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white drop-shadow-[0_4px_16px_rgba(20,40,65,0.6)] leading-tight tracking-normal">
                    {profile.name}
                  </h1>

                  {/* Đường lượn swash tinh tế dưới tên */}
                  <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-white/90" aria-hidden="true">
                    <span className="text-[9px] sm:text-xs">❄︎</span>
                    <span className="h-[1.5px] w-8 sm:w-24 rounded-full bg-gradient-to-l from-white via-white/80 to-transparent" />
                    <span className="text-[9px] sm:text-xs font-serif italic text-white/90 drop-shadow-sm tracking-wider">
                      Thư Gửi Mùa Tuyết
                    </span>
                  </div>
                </div>

                {/* Cụm thanh phát nhạc mini mộng mơ (Aesthetic Player Bar) */}
                <div className="pt-0.5 sm:pt-1 flex flex-col items-end gap-1.5 sm:gap-2 w-full max-w-[160px] xs:max-w-[190px] sm:max-w-[260px] md:max-w-[300px]">
                  {/* Hàng nút điều khiển Playback */}
                  <div className="flex items-center gap-2 sm:gap-3 text-white/90 drop-shadow-md">
                    <button
                      type="button"
                      onClick={onToggleMusic}
                      aria-label="Bài trước"
                      className="p-1 rounded-full text-white/85 hover:text-white hover:scale-110 transition-all cursor-pointer"
                    >
                      <SkipBack className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    </button>

                    <button
                      type="button"
                      onClick={onToggleMusic}
                      aria-label={isMusicPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc mùa tuyết'}
                      className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-[#2B547F] shadow-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      {isMusicPlaying ? (
                        <Pause className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-[#2B547F]" />
                      ) : (
                        <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-[#2B547F] ml-0.5" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={onToggleMusic}
                      aria-label="Bài tiếp theo"
                      className="p-1 rounded-full text-white/85 hover:text-white hover:scale-110 transition-all cursor-pointer"
                    >
                      <SkipForward className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    </button>

                    {/* Điểm nhấn hoa tuyết thanh nhã */}
                    <div
                      aria-hidden="true"
                      className="text-white/85 hover:text-white transition-colors ml-0.5 text-xs sm:text-sm select-none"
                    >
                      ❄︎
                    </div>
                  </div>

                  {/* Thanh tiến trình nhạc mỏng với nốt chấm sáng (Scrubber Line) */}
                  <div className="w-full flex items-center gap-1.5 sm:gap-2">
                    <div className="flex-1 h-1 rounded-full bg-white/40 overflow-hidden relative">
                      <div
                        className={`h-full rounded-full bg-white transition-all duration-300 ${
                          isMusicPlaying ? 'w-2/3' : 'w-1/3'
                        }`}
                      />
                    </div>
                    <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] shrink-0" />
                    <span
                      aria-hidden="true"
                      className="text-[9px] sm:text-xs text-white/85 drop-shadow-sm select-none"
                    >
                      ✧
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. AVATAR (Z-20: HÌNH TRÒN ĐỨNG YÊN HOÀN TOÀN, VIỀN TRẮNG SẮC NÉT NẰM ĐÈ LÊN GÓC TRÁI ẢNH BÌA) */}
            <div className="absolute left-[68px] sm:left-[96px] md:left-[120px] lg:left-[144px] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-auto w-[82px] h-[82px] sm:w-[114px] sm:h-[114px] md:w-[144px] md:h-[144px] lg:w-[170px] lg:h-[170px] flex items-center justify-center">
              <div className="w-full h-full rounded-full p-[3px] sm:p-1 bg-white shadow-[0_8px_24px_rgba(20,40,70,0.28)] ring-1 ring-black/5 relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {!avatarError && profile.avatarUrl ? (
                    <img
                      key={profile.avatarUrl}
                      src={profile.avatarUrl}
                      alt={`Avatar của ${profile.name}`}
                      referrerPolicy="no-referrer"
                      onError={() => setAvatarError(true)}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-serif text-2xl sm:text-3xl text-[#587DA5] select-none">
                      {profile.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* HÀNG NÚT ĐIỀU HƯỚNG NHANH */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-between gap-3 px-1 sm:px-2">
            <div className="flex items-center gap-2 text-xs font-medium text-[#648BAF]">
              <span className="text-[#598CBF]">❄︎</span>
              <span className="font-serif italic text-xs sm:text-sm text-[#244A72]">
                “{profile.tagline}”
              </span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onExploreCharacters}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[40px] text-xs sm:text-sm font-semibold text-white bg-[#587DA5] hover:bg-[#476A91] rounded-xl transition-all shadow-2xs cursor-pointer whitespace-nowrap"
              >
                <Compass className="w-4 h-4 shrink-0" />
                <span>Thiệp Nhân Vật</span>
              </button>

              <button
                onClick={onOpenConfessionModal}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 min-h-[40px] text-xs sm:text-sm font-semibold text-[#345880] bg-white hover:bg-[#F2F7FC] border border-[#CBDCEE] rounded-xl transition-all shadow-2xs cursor-pointer whitespace-nowrap"
              >
                <Feather className="w-4 h-4 text-[#7192B6] shrink-0" />
                <span>Gửi một bức thư</span>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TIỂU SỬ & CÁC KÊNH LIÊN HỆ CỦA HẠ VI VI */}
        {/* ============================================================ */}
        <div className="p-5 sm:p-6 md:p-7 rounded-2xl bg-white/85 backdrop-blur-xs border border-[#D8E8F7] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#4A729A]">
            <span className="text-[#6497CB]">❄︎</span>
            <span>Lời Nhắn Gửi Từ Mùa Tuyết</span>
            <span aria-hidden="true">·</span>
            <span>Hạ Vi Vi</span>
          </div>

          <div className="space-y-2.5 text-sm sm:text-[14.5px] text-[#395D84] max-w-3xl leading-7">
            {bioLines.map((line, idx) => {
              const isFeedbackHeading = line.includes('Cách để feedback và góp ý');
              const isBulletItem = line.includes('1.') || line.includes('2.');
              const isClosingLine = idx === bioLines.length - 1;

              if (isFeedbackHeading) {
                return (
                  <p
                    key={idx}
                    className="pt-3 mt-3 border-t border-dashed border-[#CFE2F4] font-semibold text-[#234A74] leading-7"
                  >
                    {line}
                  </p>
                );
              }

              return (
                <p
                  key={idx}
                  className={`leading-7 ${
                    isBulletItem
                      ? 'pl-1 sm:pl-2 text-[#33587F]'
                      : isClosingLine
                        ? 'pt-1 font-medium text-[#294F79]'
                        : ''
                  }`}
                >
                  {line}
                </p>
              );
            })}
          </div>

          {/* 2 Kênh liên lạc chính thức (Page Facebook & Sivi Discord) */}
          <div className="pt-4 mt-4 border-t border-[#DCEAF7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#476D95]">
              <span aria-hidden="true" className="text-[#6BA0D6]">
                ❄︎
              </span>
              <span>Liên lạc &amp; Góp ý cho Hạ Vi Vi</span>
            </div>

            <div className="grid grid-cols-1 sm:flex items-center gap-2.5 w-full sm:w-auto">
              {profile.facebookUrl && (
                <a
                  href={profile.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[40px] rounded-lg bg-white hover:bg-[#EAF4FE] border border-[#C2DBF3] text-xs sm:text-sm font-semibold text-[#234A74] transition-colors shadow-2xs whitespace-nowrap"
                >
                  <FacebookIcon className="w-4 h-4 text-[#4E7FAD] shrink-0" />
                  <span>Page Hạ Vi Vi (Facebook)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#7CA7D3] shrink-0" />
                </a>
              )}

              {profile.discordUrl && (
                <a
                  href={profile.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[40px] rounded-lg bg-[#E9F3FE] hover:bg-[#DAEBFB] border border-[#BBD7F2] text-xs sm:text-sm font-semibold text-[#1F4670] transition-colors shadow-2xs whitespace-nowrap"
                >
                  <DiscordIcon className="w-4 h-4 text-[#4A7AA8] shrink-0" />
                  <span>Sivi Discord</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#75A2CF] shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PHẦN 2: TOP 3 CHARACTER ĐƯỢC XEM NHIỀU NHẤT */}
        {/* ============================================================ */}
        {topViewedCharacters.length > 0 && (
          <div className="pt-8 sm:pt-10 border-t border-[#D7E2EE]/75 px-0 sm:px-2">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-7">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-[#6B8FB4]">
                  <span>❄︎ Được yêu thích</span>
                  <span aria-hidden="true">·</span>
                  <span>Xếp theo lượt xem cao nhất</span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2B507A] leading-snug">
                  Top 3 Character Được Xem Nhiều Nhất
                </h2>
              </div>

              <button
                type="button"
                onClick={onExploreCharacters}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[40px] rounded-lg bg-white/85 hover:bg-[#EBF4FD] border border-[#C6DDF4] text-xs sm:text-sm font-semibold text-[#264D77] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Xem tất cả Thiệp Nhân Vật</span>
                <ArrowRight className="w-4 h-4 text-[#5D8AB8] shrink-0" />
              </button>
            </div>

            <div
              className={
                topViewedCharacters.length === 1
                  ? 'max-w-lg mx-auto'
                  : topViewedCharacters.length === 2
                    ? 'grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch'
                    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch'
              }
            >
              {topViewedCharacters.map((char, idx) => (
                <CharacterCard
                  key={char.id}
                  character={char}
                  indexLabel={`Top 0${idx + 1} · Xem nhiều nhất`}
                  compact={topViewedCharacters.length >= 3}
                  onOpen={onOpenCharacter}
                  onTagClick={onSelectCharacterTag}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
