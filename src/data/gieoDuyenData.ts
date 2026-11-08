import { Character } from '../types';

export interface FateMessage {
  id: string;
  title: string;
  category: string;
  message: string;
  advice: string;
  luckySymbol: string;
  luckyNumber: number;
}

/**
 * Character-specific fortune messages tailored specifically to each character's identity,
 * backstory, tags, slogan, and romantic trope.
 */
export const CHARACTER_SPECIFIC_FATES: Record<string, FateMessage[]> = {
  // 1. Chung Ngạn Thanh
  'char-chung-ngan-thanh': [
    {
      id: 'fate-cnt-1',
      title: 'Quẻ Học Thần x Bà Hoàng Hạng Bét',
      category: 'Thượng Thượng Duyên',
      message: 'Hôn nhau mới truyền được trí thông minh Toán học? Đừng để vẻ ngoài văn nhã, thuần khiết của Chung Ngạn Thanh đánh lừa. Thực ra Học thần đã lên kế hoạch "kèm cặp độc quyền" em từ rất lâu rồi!',
      advice: 'Đừng ngại hỏi bài Toán tiếp theo, bởi vì đó chính là cớ để cậu ấy xích lại gần em hơn đấy.',
      luckySymbol: '📐 Thước Kẻ Học Thần',
      luckyNumber: 10,
    },
    {
      id: 'fate-cnt-2',
      title: 'Quẻ Biến Thái Ngầm x Tâm Cơ Chiều Chuộng',
      category: 'Bất Ngờ',
      message: 'Mất gốc Toán không đáng sợ, đáng sợ là rơi vào bẫy tâm cơ ngọt ngào của Chung Ngạn Thanh. Đằng sau lớp vỏ bọc đóa hoa tuyết liên thanh tao ấy là một kẻ sẵn sàng chiều em tới mức ngấu nghiến.',
      advice: 'Cứ tiếp tục "mặt dày" lon ton lẽo đẽo theo sau, vì cậu ấy đã nghiện sự xuất hiện của em mất rồi.',
      luckySymbol: '✏️ Bút Chì Giải Đề Toán',
      luckyNumber: 100,
    },
    {
      id: 'fate-cnt-3',
      title: 'Quẻ Lội Ngược Dòng Phục Thù',
      category: 'Ngọt Ngào',
      message: 'Bà hoàng Hạng Bét à, hôm nay Chung Ngạn Thanh vừa giải xong bài Toán khó nhất đời mình: Làm sao để "xác lập chủ quyền" và dán lên trán em ba chữ vàng "Người-Của-Chung-Ngạn-Thanh".',
      advice: 'Hãy tự tin ngẩng cao đầu đi lại trong trường, phía sau em luôn có Học thần chống lưng.',
      luckySymbol: '💯 Bảng Điểm Hạng Nhất',
      luckyNumber: 99,
    },
  ],

  // 2. Mạnh Thời Nhượng
  'char-manh-thoi-nhuang': [
    {
      id: 'fate-mtn-1',
      title: 'Quẻ Chú Heo Nhỏ Hệ Thống Phản Diện',
      category: 'Thượng Thượng Duyên',
      message: '‧₊ Hứ! Nhìn đi đâu đấy hả? Bổn đại gia ở ngay trước mũi ký chủ đây này! ⋅ ˚ Chú "heo nhỏ" biết bay ấy xuất hiện giữa lúc em tuyệt vọng nhất, mang theo không chỉ hệ thống phản diện mà là cả sự cứu rỗi duy nhất.',
      advice: 'Hãy thuận miệng gọi cậu ấy là "Heo nhỏ", dẫu kiêu ngạo đến đâu cậu ấy cũng sẽ ngoan ngoãn ở bên em.',
      luckySymbol: '🐷 Heo Nhỏ Mũm Mĩm',
      luckyNumber: 7,
    },
    {
      id: 'fate-mtn-2',
      title: 'Quẻ Nam Chính Số Khổ x Đảo Nguồn Số Phận',
      category: 'Định Mệnh',
      message: 'Hệ thống Phản diện đến đây! Một đại ma đầu uy phong lẫm liệt lại chấp nhận hóa thành chú heo con tròn ủng, đôi cánh nhỏ vỗ phạch phạch chỉ để sưởi ấm trái tim đang lạnh giá của em.',
      advice: 'Dù bốn bề có là bóng tối bủa vây, hãy nhớ em không còn cô độc một mình nơi hành lang lạnh lẽo.',
      luckySymbol: '🪽 Đôi Cánh Nhỏ Nguyện Ước',
      luckyNumber: 6,
    },
    {
      id: 'fate-mtn-3',
      title: 'Quẻ Xuyên Sách Đổi Vận Tình Duyên',
      category: 'Ngọt Ngào',
      message: 'Tỷ lệ rung động của Nam chính số khổ Mạnh Thời Nhượng dành cho bạn đã vượt ngưỡng 100%! Cậu ấy sẵn sàng lật tung cả cuốn sách định mệnh để viết lại kết thúc có em.',
      advice: 'Dành cho "Heo nhỏ" một cái ôm thật chặt, cậu ấy sẽ vỗ chiếc đuôi xoắn tít vì vui sướng.',
      luckySymbol: '📜 Thiệp Tuyết Định Mệnh',
      luckyNumber: 88,
    },
  ],

  // 3. Kỷ Thời Tự
  'char-ktt-1': [
    {
      id: 'fate-ktt-1',
      title: 'Quẻ Hôn Nhân Hợp Đồng Hào Môn',
      category: 'Thượng Thượng Duyên',
      message: '"Có vẻ rời xa tôi em sống lắm vui nhỉ?" – Câu trách móc thốt ra giữa đêm đông giấu giếm nỗi nhớ nhung đã dồn nén đến tận cùng. Cuộc liên hôn cứu hai gia tộc năm ấy chưa từng là hợp đồng đơn thuần.',
      advice: 'Đừng cố chạy trốn nữa, dù em có cùng cô bạn thân bám chặt lấy nhau, Kỷ Thời Tự vẫn sẽ tìm ra em.',
      luckySymbol: '💍 Nhẫn Hợp Đồng Đêm Tuyết',
      luckyNumber: 18,
    },
    {
      id: 'fate-ktt-2',
      title: 'Quẻ Truy Thê Cuồng Nhiệt Đêm Đông',
      category: 'Bất Ngờ',
      message: 'Ngay từ khi gả vào hào môn thế gia, Kỷ Thời Tự đã tự tay gỡ bỏ từng rào cản để em không phải chịu bất kỳ tủi thân nào. Trái tim truy thê ngầm ấy sẵn sàng trao em cả giang sơn.',
      advice: 'Hãy cho đối phương một cơ hội giãi bày, cái ôm sau những tháng ngày bỏ trốn sẽ vô cùng ấm áp.',
      luckySymbol: '🚘 Chuyến Xe Đêm Bỏ Trốn',
      luckyNumber: 22,
    },
    {
      id: 'fate-ktt-3',
      title: 'Quẻ Kết Nghĩa Bạn Thân Nối Duyên',
      category: 'Định Mệnh',
      message: 'Có phúc cùng hưởng, có họa cùng chia! Cuộc hôn nhân trớ trêu bắt hai bạn thân gả vào hai anh em lại vô tình kéo em và Kỷ Thời Tự về chung một mái nhà vĩnh cửu.',
      advice: 'Hãy mỉm cười đón nhận vận may, vì phía sau em là một gia tộc chống lưng tuyệt đối.',
      luckySymbol: '🎀 Nơ Hồng Tình Bạn',
      luckyNumber: 9,
    },
  ],

  // 4. Giang Thời Việt
  'char-gtv-1': [
    {
      id: 'fate-gtv-1',
      title: 'Quẻ Thiếu Gia Giả Nghèo x Ái Kỷ Redflag',
      category: 'Thượng Thượng Duyên',
      message: '"Ừm, khó khăn lắm." – Vị Hội trưởng luôn miệng than nghèo thực ra lại là đại thiếu gia ngầm nắm giữ gia sản kế xù. Cậu ấy Redflag với cả thế giới, nhưng riêng với em, cậu ấy dịu dàng tuyệt đối.',
      advice: 'Đừng tin vào lời than nghèo kể khổ của Hội trưởng, cậu ấy sẵn sàng bao trọn cả mùa đông vì em.',
      luckySymbol: '🎧 Tai Nghe Âm Nhạc',
      luckyNumber: 3,
    },
    {
      id: 'fate-gtv-2',
      title: 'Quẻ Thế Giới Lặng Im Âm Thầm Chiếm Hữu',
      category: 'Ngọt Ngào',
      message: 'Thế giới của em dẫu không nghe thấy âm thanh, nhưng từng cử chỉ âm thầm chiếm hữu và chở che của Giang Thời Việt đều cất lời yêu thương rõ ràng nhất. Tình yêu không cần tiếng nói.',
      advice: 'Hãy nhìn thẳng vào mắt cậu ấy, ánh mắt ghen tuông ngầm ấy không bao giờ biết dối lừa.',
      luckySymbol: '🌸 Cúc Tuyết Trắng Lặng Lẽ',
      luckyNumber: 11,
    },
    {
      id: 'fate-gtv-3',
      title: 'Quẻ Tương Phùng Đáy Vực Cứu Rỗi',
      category: 'Định Mệnh',
      message: 'Những lời rủa xả tàn nhẫn năm xưa đều tan biến khi Giang Thời Việt bước vào cuộc đời em. Cậu ấy đến để định danh lại em – không phải sao chổi, mà là "báu vật duy nhất".',
      advice: 'Hãy dũng cảm nắm lấy tay cậu ấy, em xứng đáng được yêu thương ngọt ngào nhất.',
      luckySymbol: '✨ Ngôi Sao Sưởi Ấm',
      luckyNumber: 77,
    },
  ],

  // 5. Kỷ Doãn Thần
  'char-kdt-1': [
    {
      id: 'fate-kdt-1',
      title: 'Quẻ Bao Dung Thâm Tình Kỷ Doãn Thần',
      category: 'Thượng Thượng Duyên',
      message: 'Khoảnh khắc Kỷ Doãn Thần ánh mắt nhìn em, mọi giông bão bên ngoài đều lập tức hóa thành tuyết êm đềm. Cậu ấy sẵn sàng chở che và dành trọn sự ưu ái cho riêng mình em.',
      advice: 'Hãy thả lỏng và dựa vào vai cậu ấy, em không cần phải gồng mình mạnh mẽ nữa.',
      luckySymbol: '☕ Tách Trà Nóng Mùa Đông',
      luckyNumber: 12,
    },
    {
      id: 'fate-kdt-2',
      title: 'Quẻ Ánh Trăng Sáng Trong Đêm Tuyết',
      category: 'Ngọt Ngào',
      message: 'Trong lòng Kỷ Doãn Thần, em chính là "Bạch nguyệt quang" duy nhất không thể thay thế. Mọi ngọt ngào và dịu dàng của cậu ấy đều hướng về em.',
      advice: 'Trân trọng từng khoảnh khắc bình yên bên cậu ấy, mùa đông này sẽ thật ngập tràn nụ cười.',
      luckySymbol: '🌙 Vầng Trăng Tuyết',
      luckyNumber: 8,
    },
  ],

  // 6. Yến Thính Trì
  'char-ytt-1': [
    {
      id: 'fate-ytt-1',
      title: 'Quẻ Thâm Tình Lẳng Lặng Yến Thính Trì',
      category: 'Thượng Thượng Duyên',
      message: 'Yến Thính Trì lẳng lặng dõi theo em qua bao mùa tuyết rơi. Sự điềm tĩnh và kiên định của cậu ấy chính là bến đỗ an toàn nhất cho tâm hồn em.',
      advice: 'Hãy tin tưởng vào sự chân thành không cất thành lời của Yến Thính Trì.',
      luckySymbol: '🌲 Cành Thông Đêm Tuyết',
      luckyNumber: 5,
    },
    {
      id: 'fate-ytt-2',
      title: 'Quẻ Bến Đỗ Bình Yên Mùa Đông',
      category: 'Định Mệnh',
      message: 'Sóng gió bên ngoài dẫu có lớn đến đâu, bước vào thế giới của Yến Thính Trì em đều sẽ tìm thấy sự che chở tuyệt đối.',
      advice: 'Mở lòng đón nhận sự săn sóc tỉ mỉ từng chi tiết nhỏ của cậu ấy.',
      luckySymbol: '🔥 Ngọn Nến Sưởi Ấm',
      luckyNumber: 15,
    },
  ],

  // 7. Mộ Thanh Việt
  'char-mtv-1': [
    {
      id: 'fate-mtv-1',
      title: 'Quẻ Độc Quyền Chiếm Hữu Mộ Thanh Việt',
      category: 'Thượng Thượng Duyên',
      message: 'Mộ Thanh Việt vẻ ngoài xa cách như mây trên đỉnh núi, nhưng chỉ cần em cất lời, cậu ấy lập tức hạ mình chạm đến thế gian vì em.',
      advice: 'Cứ thoải mái làm nũng, vì sự kiêu ngạo của cậu ấy chỉ đổ gục trước riêng em.',
      luckySymbol: '👑 Vương Miện Băng Tuyết',
      luckyNumber: 1,
    },
    {
      id: 'fate-mtv-2',
      title: 'Quẻ Ngoại Lệ Duy Nhất Đời Cậu Ấy',
      category: 'Bất Ngờ',
      message: 'Cả đời Mộ Thanh Việt chưa từng nhượng bộ hay thỏa hiệp với bất kỳ ai, cho đến khi gặp được em. Tình yêu của cậu ấy chính là sự độc quyền vĩnh cửu.',
      advice: 'Tự tin với vị trí duy nhất trong lòng Mộ Thanh Việt.',
      luckySymbol: '🗝️ Chìa Khóa Khóa Trái Tim',
      luckyNumber: 99,
    },
  ],

  // 8. Giang Thính Hạ
  'char-gth-1': [
    {
      id: 'fate-gth-1',
      title: 'Quẻ Giai Điệu Dịu Dàng Giang Thính Hạ',
      category: 'Thượng Thượng Duyên',
      message: 'Giang Thính Hạ mang đến giai điệu dịu dàng như tuyết đầu mùa. Mỗi lời nói của cậu ấy đều tựa lá thư tình cất giấu bao tâm sự ngọt ngào.',
      advice: 'Hãy bật một bản nhạc nhẹ và tận hưởng không gian ấm áp bên Giang Thính Hạ.',
      luckySymbol: '🎵 Đĩa Nhạc Băng Xanh',
      luckyNumber: 14,
    },
    {
      id: 'fate-gth-2',
      title: 'Quẻ Bảo Vật Quý Giá Nhất',
      category: 'Ngọt Ngào',
      message: 'Duyên phận với Giang Thính Hạ chính là quẻ "Thượng Thượng Duyên". Em sẽ được nâng niu và yêu thương như bảo vật quý giá nhất thế gian.',
      advice: 'Hãy mỉm cười đáp lại sự si tình ngọt ngào của cậu ấy.',
      luckySymbol: '🕊️ Chim Bồ Câu Tuyết',
      luckyNumber: 21,
    },
  ],

  // 9. Hoắc Nghiên Trì
  'char-hnt-1': [
    {
      id: 'fate-hnt-1',
      title: 'Quẻ Đế Vương Hào Môn Hoắc Nghiên Trì',
      category: 'Thượng Thượng Duyên',
      message: 'Hoắc Nghiên Trì mang dáng vẻ chiếm hữu mạnh mẽ của một đế vương hào môn. Cậu ấy sẵn sàng san bằng mọi trở ngại để bảo vệ em trong vòng tay mình.',
      advice: 'Đừng nghi ngờ khả năng bảo vệ em của cậu ấy, Hoắc Nghiên Trì chưa bao giờ thất hứa.',
      luckySymbol: '💎 Viên Kim Cương Đêm Băng',
      luckyNumber: 8,
    },
    {
      id: 'fate-hnt-2',
      title: 'Quẻ Nuông Chiều Không Bờ Bến',
      category: 'Định Mệnh',
      message: 'Đối mặt với Hoắc Nghiên Trì, em sẽ hiểu thế nào là sự nuông chiều vô điều kiện. Một khi đã trao trái tim, cậu ấy quyết không buông tay em.',
      advice: 'An tâm trao gửi niềm tin, em chính là ưu tiên hàng đầu của cậu ấy.',
      luckySymbol: '🏛️ Lâu Đài Mùa Đông',
      luckyNumber: 88,
    },
  ],

  // 10. Giang Nghiên Lễ
  'char-[#gnl]': [
    {
      id: 'fate-gnl-1',
      title: 'Quẻ Thâm Trầm Si Tình Giang Nghiên Lễ',
      category: 'Thượng Thượng Duyên',
      message: 'Giang Nghiên Lễ giấu đằng sau sự thâm trầm là một ngọn lửa tình yêu âm ỉ cháy. Cậu ấy đã âm thầm vẽ nên viễn cảnh tương lai có em từ rất lâu rồi.',
      advice: 'Hãy bước thêm một bước, cậu ấy sẽ đi nấc thang còn lại để đến bên em.',
      luckySymbol: '📖 Cuốn Sách Ký Ức',
      luckyNumber: 16,
    },
  ],

  // 11. Sở Thính Nghiêu
  'char-stn-1': [
    {
      id: 'fate-stn-1',
      title: 'Quẻ Lạnh Lùng Ngoại Lệ Sở Thính Nghiêu',
      category: 'Thượng Thượng Duyên',
      message: 'Sở Thính Nghiêu có thể lạnh lùng với cả thế giới, nhưng chỉ cần là chuyện liên quan đến em, cậu ấy lập tức đánh mất sự bình tĩnh vốn có.',
      advice: 'Hãy mỉm cười khi thấy dáng vẻ cuống quýt đáng yêu của cậu ấy vì em.',
      luckySymbol: '❄️ Bông Tuyết Lấp Lánh',
      luckyNumber: 2,
    },
  ],

  // 12. Ngụy Tẫn Thần
  'char-ntt-1': [
    {
      id: 'fate-ntt-1',
      title: 'Quẻ Cuồng Nhiệt Đáng Nhớ Ngụy Tẫn Thần',
      category: 'Thượng Thượng Duyên',
      message: 'Ngụy Tẫn Thần chính là hình mẫu vừa nguy hiểm vừa cuốn hút. Cậu ấy sẽ đưa em vào một hành trình tình yêu đầy cuồng nhiệt và đáng nhớ nhất.',
      advice: 'Tận hưởng từng khoảnh khắc tim đập liên hồi bên cậu ấy.',
      luckySymbol: '🔥 Ngọn Lửa Đêm Đông',
      luckyNumber: 9,
    },
  ],
};

/**
 * Universal fallback fortune messages if a custom character added dynamically
 * does not match existing static IDs.
 */
export const FALLBACK_CHAR_FATE_TEMPLATES = [
  {
    title: 'Quẻ Thượng Thượng Duyên: Tuyết Tan Nắng Ấm',
    category: 'Thượng Thượng Duyên',
    message: (name: string) =>
      `Tuyết rơi ngoài cửa sổ dẫu có lạnh giá đến đâu cũng không thắng nổi độ ấm trong ánh mắt ${name}. Định mệnh sắp xếp cho bạn một cuộc trùng phùng đầy ngọt ngào trong những ngày đông tới.`,
    advice: 'Hãy giữ trái tim luôn rộng mở, một cuộc trò chuyện bất ngờ có thể thay đổi cả mùa đông của bạn.',
    luckySymbol: '❄️ Hoa Tuyết Nguyện Ước',
    luckyNumber: 7,
  },
  {
    title: 'Quẻ Định Mệnh Ngọt Ngào',
    category: 'Ngọt Ngào',
    message: (name: string) =>
      `Khoảnh khắc ${name} nhìn em, mọi khoảng cách và hiểu lầm đều tự động tan biến. Người ấy đã dành trọn sự dịu dàng và che chở ngọt ngào nhất cho riêng mình bạn.`,
    advice: 'Đừng ngại ngần chấp nhận sự quan tâm tỉ mỉ từ người ấy.',
    luckySymbol: '✨ Ngôi Sao May Mắn',
    luckyNumber: 99,
  },
  {
    title: 'Quẻ Bất Ngờ Đêm Đông',
    category: 'Bất Ngờ',
    message: (name: string) =>
      `Một hành động bất ngờ từ ${name} sẽ khiến trái tim bạn rung động mạnh mẽ trong những ngày tới. Những điều ngọt ngào nhất thường đến một cách tự nhiên nhất.`,
    advice: 'Hãy mỉm cười và sẵn sàng đón nhận tình cảm chân thành.',
    luckySymbol: '💌 Thiệp Tuyết Tình Yêu',
    luckyNumber: 18,
  },
];

/**
 * Helper function to retrieve character-tailored fortune messages.
 * Matches by character ID, character name, or generates custom personalized messages!
 */
export function getFateMessagesForCharacter(character: Character): FateMessage[] {
  if (!character) return [];

  // 1. Direct ID match
  if (CHARACTER_SPECIFIC_FATES[character.id] && CHARACTER_SPECIFIC_FATES[character.id].length > 0) {
    return CHARACTER_SPECIFIC_FATES[character.id];
  }

  // 2. Name fuzzy match in predefined database
  const normName = character.name.toLowerCase().trim();
  for (const [id, fates] of Object.entries(CHARACTER_SPECIFIC_FATES)) {
    if (
      (normName.includes('chung ngạn thanh') && id.includes('chung-ngan-thanh')) ||
      (normName.includes('mạnh thời nhượng') && id.includes('manh-thoi-nhuang')) ||
      (normName.includes('kỷ thời tự') && id.includes('ktt')) ||
      (normName.includes('giang thời việt') && id.includes('gtv')) ||
      (normName.includes('kỷ doãn thần') && id.includes('kdt')) ||
      (normName.includes('yến thính trì') && id.includes('ytt')) ||
      (normName.includes('mộ thanh việt') && id.includes('mtv')) ||
      (normName.includes('giang thính hạ') && id.includes('gth')) ||
      (normName.includes('hoắc nghiên trì') && id.includes('hnt')) ||
      (normName.includes('sở thính nghiêu') && id.includes('stn')) ||
      (normName.includes('ngụy tẫn thần') && id.includes('ntt'))
    ) {
      return fates;
    }
  }

  // 3. Personalized fallback tailored to this specific character's name & slogan
  return FALLBACK_CHAR_FATE_TEMPLATES.map((tmpl, idx) => ({
    id: `fate-fallback-${character.id}-${idx}`,
    title: tmpl.title,
    category: tmpl.category,
    message: tmpl.message(character.name),
    advice: tmpl.advice,
    luckySymbol: tmpl.luckySymbol,
    luckyNumber: tmpl.luckyNumber,
  }));
}
