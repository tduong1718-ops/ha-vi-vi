export interface FateMessage {
  id: string;
  title: string;
  category: 'Thượng Thượng Duyên' | 'Ngọt Ngào' | 'Bất Ngờ' | 'Định Mệnh' | 'Hài Hước';
  message: string;
  advice: string;
  luckySymbol: string;
  luckyNumber: number;
}

export const FATE_MESSAGES: FateMessage[] = [
  {
    id: 'fate-1',
    title: 'Quẻ Thượng Thượng Duyên: Tuyết Tan Nắng Ấm',
    category: 'Thượng Thượng Duyên',
    message: 'Tuyết rơi ngoài cửa sổ dẫu có lạnh giá đến đâu cũng không thắng nổi độ ấm trong ánh mắt người ấy. Định mệnh sắp xếp cho bạn một cuộc trùng phùng đầy ngọt ngào trong những ngày đông tới.',
    advice: 'Hãy giữ trái tim luôn rộng mở, một cuộc trò chuyện bất ngờ có thể thay đổi cả mùa đông của bạn.',
    luckySymbol: '❄️ Hoa Tuyết Nguyện Ước',
    luckyNumber: 7,
  },
  {
    id: 'fate-2',
    title: 'Quẻ Phản Diện Si Tình: Chú Heo Nhỏ May Mắn',
    category: 'Ngọt Ngào',
    message: 'Có một chú "heo nhỏ" lơ lửng bước vào cuộc đời bạn giữa lúc bạn cảm thấy kiệt quệ nhất. Kẻ tự xưng đại ma đầu ấy thực chất lại dành trọn sự dịu dàng nhất cho riêng mình bạn.',
    advice: 'Đừng ngại ngần chấp nhận sự giúp đỡ từ những điều nhỏ bé và ấm áp xung quanh.',
    luckySymbol: '🐷 Heo Nhỏ Mũm Mĩm',
    luckyNumber: 9,
  },
  {
    id: 'fate-3',
    title: 'Quẻ Hào Môn Thế Gia: Hợp Đồng Định Mệnh',
    category: 'Định Mệnh',
    message: 'Một cuộc hôn nhân hợp đồng ngỡ như trớ trêu lại chính là nhịp cầu đưa bạn đến bên chân tình. Dù người ấy có tỏ ra lạnh lùng đến đâu, hậu phương phía sau vẫn luôn dõi theo bạn.',
    advice: 'Đôi khi sự bướng bỉnh đáng yêu của bạn lại chính là chìa khóa mở cửa trái tim người ấy.',
    luckySymbol: '💍 Nhẫn Kim Cương Đêm Tuyết',
    luckyNumber: 18,
  },
  {
    id: 'fate-4',
    title: 'Quẻ Ái Kỷ Giả Nghèo: Bí Mật Dưới Mưa Tuyết',
    category: 'Bất Ngờ',
    message: 'Hội trưởng luôn miệng kêu "khó khăn lắm" thực ra lại sẵn sàng dời cả núi sông vì bạn. Những cử chỉ tưởng chừng vô tình lại chứa đựng sự chiếm hữu và chở che tuyệt đối.',
    advice: 'Lắng nghe những điều người ấy không nói thay vì chỉ tin vào câu từ bề ngoài.',
    luckySymbol: '🎧 Tai Nghe Khôi Phục Âm Thanh',
    luckyNumber: 3,
  },
  {
    id: 'fate-5',
    title: 'Quẻ Truy Thê Ngược Ngọt: Câu Hỏi Đêm Đông',
    category: 'Ngọt Ngào',
    message: '"Có vẻ rời xa tôi em sống lắm vui nhỉ?" – Câu nói nghe như trách móc nhưng thực chất là nỗi nhớ nhung đã dồn nén đến tận cùng. Người ấy đang tìm mọi cách để quay về bên bạn.',
    advice: 'Dành cho đối phương một cơ hội giãi bày, mùa đông này sẽ không còn đơn độc.',
    luckySymbol: '✉️ Lá Thư Tuyết Chưa Gửi',
    luckyNumber: 12,
  },
  {
    id: 'fate-6',
    title: 'Quẻ Tuyết Đêm Trùng Phùng: Bạn Thân Nối Duyên',
    category: 'Định Mệnh',
    message: 'Tình bạn thân thiết từ thuở nhỏ chính là điểm tựa vững chắc nhất. Khi hai đường thẳng song song bất ngờ rẽ lối, duyên phận sẽ gắn kết cả hai gia tộc thành một.',
    advice: 'Hãy trân trọng người luôn nắm chặt tay bạn trong những khoảnh khắc hoang mang nhất.',
    luckySymbol: '🎀 Nơ Hồng Tình Bạn',
    luckyNumber: 22,
  },
  {
    id: 'fate-7',
    title: 'Quẻ Nữ Phụ Phản Diện: Đảo Nguồn Số Phận',
    category: 'Hài Hước',
    message: 'Bạn không cần phải đóng vai nữ chính ngây thơ. Sự kiên cường, cá tính và đôi chút phản逆 của bạn lại chính là điểm thu hút khó cưỡng khiến nam chính số khổ không thể rời mắt.',
    advice: 'Cứ là chính mình, phiên bản rực rỡ nhất của bạn chính là định mệnh của ai đó.',
    luckySymbol: '👑 Vương Miện Băng Tuyết',
    luckyNumber: 5,
  },
  {
    id: 'fate-8',
    title: 'Quẻ Khiếm Thính Rực Rỡ: Âm Thanh Của Trái Tim',
    category: 'Thượng Thượng Duyên',
    message: 'Dù thế giới xung quanh có lặng im đến đâu, nhịp đập trái tim người ấy khi ở cạnh bạn vẫn vang vọng rõ ràng nhất. Tình yêu thật sự không cần cất lời.',
    advice: 'Hãy tin vào cảm giác của chính mình khi ánh mắt hai người chạm nhau.',
    luckySymbol: '🌸 Hoa Cúc Tuyết Trắng',
    luckyNumber: 11,
  },
  {
    id: 'fate-9',
    title: 'Quẻ Bỏ Trốn Đêm Trăng: Hành Trình Tự Do',
    category: 'Bất Ngờ',
    message: 'Một kế hoạch bỏ trốn ngẫu hứng cùng người thương sẽ mang đến những trải nghiệm không bao giờ quên. Thế giới rộng lớn đang chờ đón hai bạn khám phá.',
    advice: 'Đôi khi liều lĩnh một chút trong tình yêu sẽ đem lại quả ngọt ngoài mong đợi.',
    luckySymbol: '🌙 Trăng Khuyết Đêm Tuyết',
    luckyNumber: 27,
  },
  {
    id: 'fate-10',
    title: 'Quẻ Hộp Nhạc Ký Ức: Giai Điệu Mùa Đông',
    category: 'Ngọt Ngào',
    message: 'Một bản nhạc xưa cũ ngân vang mang theo ký ức ngọt ngào. Người ấy đã lưu giữ từng chi tiết nhỏ nhất về bạn trong suốt những năm tháng đã qua.',
    advice: 'Hãy bật bản nhạc yêu thích và sẵn sàng mở lòng đón nhận ngọn lửa ấm áp.',
    luckySymbol: '🎵 Đĩa Vinyl Băng Xanh',
    luckyNumber: 8,
  },
  {
    id: 'fate-11',
    title: 'Quẻ Bạch Nguyệt Quang: Chân Tình Duy Nhất',
    category: 'Định Mệnh',
    message: 'Trong lòng người ấy chỉ có duy nhất một ánh trăng sáng – và ánh trăng ấy chính là bạn. Mọi sự thế tha hay hiểu lầm trước đây đều sẽ tan biến như tuyết đầu mùa.',
    advice: 'Đừng nghi ngờ vị trí đặc biệt của mình trong lòng đối phương.',
    luckySymbol: '🕯️ Ngọn Nến Sưởi Ấm',
    luckyNumber: 14,
  },
  {
    id: 'fate-12',
    title: 'Quẻ Ma Đầu Sắp Xếp: Hệ Thống Chi Chi',
    category: 'Hài Hước',
    message: 'Hệ thống định mệnh vừa quét qua và xác nhận: Tỷ lệ tương thích của bạn và nhân vật này đạt tới 99.9%! 0.1% còn lại là phụ thuộc vào nụ cười của bạn hôm nay.',
    advice: 'Hãy mỉm cười thật tươi, vận may tình duyên đang mỉm cười lại với bạn.',
    luckySymbol: '✨ Ngôi Sao May Mắn',
    luckyNumber: 88,
  },
];
