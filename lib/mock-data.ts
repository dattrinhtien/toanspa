import { BlogPost } from '@/types/wordpress';

export const MOCK_CATEGORIES = [
  { id: 1, name: 'Tất cả', slug: 'all', count: 8 },
  { id: 6, name: 'Hoạt động & Sự kiện Heshi', slug: 'hoat-dong-su-kien', count: 3 },
  { id: 2, name: 'Da liễu Chuẩn Y khoa', slug: 'da-lieu-y-khoa', count: 2 },
  { id: 5, name: 'Chuyển giao Mô hình Spa', slug: 'chuyen-giao-spa', count: 1 },
  { id: 3, name: 'Trị liệu Cơ mạc & Cổ vai gáy', slug: 'tri-lieu-co-mac', count: 1 },
  { id: 4, name: 'Dinh dưỡng Chuyển hóa', slug: 'dinh-duong-chuyen-hoa', count: 1 },
];

export const MOCK_POSTS: BlogPost[] = [
  {
    id: 106,
    slug: 'hoi-thao-chuyen-giao-mo-hinh-spa-chuan-y-khoa-heshi-toan-quoc',
    title: 'Hội Thảo Chuyển Giao Mô Hình Spa Chuẩn Y Khoa Cùng Hệ Thống Heshi Toàn Quốc',
    excerpt: 'Sự kiện quy tụ hơn 100+ chủ cơ sở làm đẹp và bác sĩ da liễu chia sẻ phác đồ phục hồi da treatment hỏng và giải pháp tối ưu doanh thu bền vững.',
    content: `
      <p class="lead">Vừa qua, Chuyên gia Trần Thị Toàn (Toàn Heshi) cùng Ban lãnh đạo Hệ thống Dược mỹ phẩm Heshi đã tổ chức thành công Hội thảo Chuyển giao Mô hình Spa Chuẩn Y Khoa, thu hút sự tham gia của hơn 100 chủ spa, clinic và chuyên viên thẩm mỹ trên khắp cả nước.</p>
      
      <img src="/images/event-seminar.jpg" alt="Toàn cảnh Hội thảo Chuyển giao Mô hình Spa Chuẩn Y Khoa Heshi" />

      <h2 id="noi-dung-trong-tam-hoi-thao">1. Nội dung trọng tâm tại hội thảo</h2>
      <p>Tại sự kiện, Chuyên gia Toàn Heshi đã trực tiếp thuyết trình và phân tích sâu về thực trạng thị trường làm đẹp hiện nay:</p>
      <ul>
        <li><strong>Nguyên nhân tỷ lệ khách hàng hỏng màng ẩm gia tăng:</strong> Do lạm dụng acid nồng độ cao và mỹ phẩm kém chất lượng tràn lan.</li>
        <li><strong>Quy trình chuẩn hóa chẩn đoán lâm sàng:</strong> Soi da vi điểm 5 lớp, phân loại thương tổn và lên phác đồ phục hồi đa tầng không xâm lấn thô bạo.</li>
        <li><strong>Chiến lược vận hành cơ sở không phụ thuộc phá giá:</strong> Giúp chủ cơ sở giữ chân khách hàng bằng chất lượng phục hồi thực chất và sự hài lòng dài lâu.</li>
      </ul>

      <h2 id="khoanh-khac-ky-ket-hop-tac">2. Ký kết chuyển giao công nghệ cùng đối tác chiến lược</h2>
      <p>Điểm nhấn của chương trình là lễ ký kết biên bản ghi nhớ hợp tác chuyển giao công nghệ và phác đồ điều trị Heshi độc quyền cho các chủ spa tiêu biểu từ Hà Giang, Tuyên Quang, Thái Nguyên, Phú Thọ và Hà Nội.</p>
      
      <img src="/images/heshi-team.jpg" alt="Ban cố vấn và các chủ cơ sở đối tác chụp ảnh lưu niệm tại sự kiện" />

      <blockquote>"Một cơ sở spa thành công không phải là nơi có máy móc đắt tiền nhất, mà là nơi trao gửi niềm tin bằng sự an toàn và chuyên môn y khoa vững vàng nhất." – Chuyên gia Trần Thị Toàn chia sẻ tại sự kiện.</blockquote>
    `,
    date: '2026-10-30T09:00:00.000Z',
    formattedDate: '30/10/2026',
    readTime: '5 phút đọc',
    coverImage: '/images/event-seminar.jpg',
    category: {
      id: 6,
      name: 'Hoạt động & Sự kiện Heshi',
      slug: 'hoat-dong-su-kien',
    },
    author: {
      name: 'Trần Thị Toàn (Toàn Heshi)',
      avatar: '/images/avatar.jpg',
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  },
  {
    id: 107,
    slug: 'le-ky-niem-va-gala-vinh-danh-10-nam-heshi-viet-nam',
    title: 'Đêm Gala Vinh Danh & Kỷ Niệm Dấu Ấn Cống Hiến Vì Làn Da Phụ Nữ Việt',
    excerpt: 'Đêm tiệc trang trọng tri ân những nỗ lực bền bỉ của Chuyên gia Trần Thị Toàn và đội ngũ đồng nghiệp trong sứ mệnh chăm sóc sức khỏe chủ động từ gốc.',
    content: `
      <p class="lead">Trong không khí trang trọng và ấm áp, Đêm Gala Vinh Danh Heshi đã diễn ra với sự hiện diện của đông đảo quý đối tác, học viên và khách hàng thân thiết, cùng nhìn lại hành trình cống hiến đầy tự hào.</p>
      
      <img src="/images/event-gala.jpg" alt="Đêm Gala Vinh Danh & Tri Ân Hệ Thống Heshi" />

      <h2 id="ton-vinh-gia-tri-thuc-chien">1. Tôn vinh các thủ lĩnh spa xuất sắc</h2>
      <p>Tại đêm Gala, Chuyên gia Toàn Heshi đã vinh dự trao cúp và bằng khen cho các chủ spa đã áp dụng xuất sắc mô hình Kiềng 3 Chân: Mát-xa – Vận động – Dinh dưỡng, giúp hàng ngàn khách hàng tại các tỉnh miền núi phía Bắc lấy lại sự tự tin và sức khỏe toàn diện.</p>

      <img src="/images/event-award.jpg" alt="Khoảnh khắc vinh danh và trao chứng nhận tại đêm Gala" />

      <h2 id="tam-nhin-giai-doan-moi">2. Tầm nhìn lan tỏa sức khỏe từ gốc 2026 - 2030</h2>
      <p>Toàn Heshi khẳng định sẽ tiếp tục mở rộng các lớp huấn luyện kỹ thuật viên miễn phí, đẩy mạnh các chiến dịch thăm khám da liễu học đường và người lao động địa phương, đưa việc chăm sóc sức khỏe chủ động trở thành nếp sống văn minh của mỗi gia đình.</p>
    `,
    date: '2026-10-22T19:30:00.000Z',
    formattedDate: '22/10/2026',
    readTime: '4 phút đọc',
    coverImage: '/images/event-gala.jpg',
    category: {
      id: 6,
      name: 'Hoạt động & Sự kiện Heshi',
      slug: 'hoat-dong-su-kien',
    },
    author: {
      name: 'Trần Thị Toàn (Toàn Heshi)',
      avatar: '/images/avatar.jpg',
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  },
  {
    id: 108,
    slug: 'khoa-huan-luyen-thuc-chien-ky-thuat-vien-phuc-hoi-da-chuyen-sau',
    title: 'Khóa Huấn Luyện Thực Chiến: "Cầm Tay Chỉ Việc" Phục Hồi Da Hư Tổn Đa Tầng',
    excerpt: 'Học viên được trực tiếp chuyên gia hướng dẫn kỹ thuật soi da vi điểm, kỹ thuật giải phóng cơ mạc không đau và phác đồ phối hợp dược mỹ phẩm an toàn.',
    content: `
      <p class="lead">Lớp đào tạo thực chiến kỹ thuật viên nâng cao do Chuyên gia Trần Thị Toàn đứng lớp vừa hoàn thành khóa học kéo dài 5 ngày với 100% học viên vượt qua kỳ thi đánh giá tay nghề lâm sàng.</p>
      
      <img src="/images/training-event.jpg" alt="Chuyên gia Toàn Heshi trực tiếp hướng dẫn học viên thực hành trên mẫu thật" />

      <h2 id="phuong-phap-dao-tao-1-kem-1">1. Phương pháp đào tạo 1 kèm 1</h2>
      <p>Không dạy lý thuyết suông, khóa học tập trung 80% thời lượng vào thực hành lâm sàng:</p>
      <ul>
        <li>Cách cầm đầu máy soi da và phân tích cấu trúc collagen tầng trung bì.</li>
        <li>Kỹ thuật giải tỏa điểm kích hoạt (Trigger Points) vùng gáy và vai để máu lưu thông nuôi da mặt.</li>
        <li>Kỹ năng điện di dưỡng chất phục hồi không làm rách màng hydrolipid đang suy kiệt.</li>
      </ul>

      <img src="/images/consultation.jpg" alt="Thực hành thăm khám và lên phác đồ cá nhân hóa cho từng khách hàng" />

      <h2 id="cam-ket-sau-khoa-hoc">2. Cam kết bảo trợ tay nghề trọn đời</h2>
      <p>Tất cả học viên sau khi hoàn thành khóa huấn luyện đều được cấp chứng nhận, được bảo lãnh chuyên môn và được chuyên gia hỗ trợ hội chẩn trực tiếp từ xa bất kỳ ca bệnh nào gặp khó khăn trong quá trình làm nghề.</p>
    `,
    date: '2026-10-15T08:00:00.000Z',
    formattedDate: '15/10/2026',
    readTime: '6 phút đọc',
    coverImage: '/images/training-event.jpg',
    category: {
      id: 6,
      name: 'Hoạt động & Sự kiện Heshi',
      slug: 'hoat-dong-su-kien',
    },
    author: {
      name: 'Trần Thị Toàn (Toàn Heshi)',
      avatar: '/images/avatar.jpg',
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  },
  {
    id: 101,
    slug: 'phuc-hoi-hang-rao-bao-ve-da-ton-thuong-chuan-y-khoa',
    title: 'Phục Hồi Hàng Rào Bảo Vệ Da (Skin Barrier) Bị Tổn Thương Chuẩn Y Khoa',
    excerpt: 'Lạm dụng treatment nồng độ cao và sản phẩm bào mòn khiến màng lipid tự nhiên bị phá vỡ. Đây là phác đồ phục hồi cấu trúc đa tầng an toàn, bền vững.',
    content: `
      <p class="lead">Hàng rào bảo vệ da (Skin Barrier) là bức tường thành đầu tiên che chở cơ thể khỏi vi khuẩn, độc tố môi trường và sự mất nước xuyên biểu bì (TEWL). Tuy nhiên, thói quen lạm dụng acid nồng độ cao, peel da không kiểm soát hay corticoid trá hình đang khiến hàng triệu làn da rơi vào tình trạng suy kiệt màng sinh học.</p>
      
      <img src="/images/treatment-skin.jpg" alt="Phác đồ phục hồi màng ẩm sinh học da liễu Heshi" />

      <h2 id="dau-hieu-nhan-biet-hang-rao-da-bi-ton-thuong">1. Dấu hiệu nhận biết hàng rào bảo vệ da bị tổn thương</h2>
      <p>Khi lớp màng lipid kép gồm Ceramide, Cholesterol và Acid béo tự do bị thiếu hụt, bạn sẽ gặp các triệu chứng rõ rệt:</p>
      <ul>
        <li>Cảm giác châm chích, nóng rát dữ dội ngay cả khi thoa nước cất hay serum cấp ẩm thông thường.</li>
        <li>Bề mặt da căng bóng nhưng khô khốc, mỏng manh và lộ rõ các mao mạch li ti.</li>
        <li>Tình trạng mụn nước hoặc mụn viêm li ti tái phát liên tục, khó thuyên giảm.</li>
        <li>Da sạm màu, mất độ đàn hồi tự nhiên và dễ kích ứng khi tiếp xúc với ánh nắng mặt trời.</li>
      </ul>

      <h2 id="nguyen-tac-vang-trong-phuc-hoi-da-ton-thuong">2. Nguyên tắc vàng trong phục hồi da tổn thương từ gốc</h2>
      <p>Tại Toàn Heshi, chúng tôi áp dụng phác đồ <strong>3 Không - 3 Đủ</strong>:</p>
      <ol>
        <li><strong>Không can thiệp xâm lấn thô bạo:</strong> Ngưng mọi hoạt chất treatment mạnh (AHA/BHA/Retinoids) và các liệu pháp lột tẩy cơ học trong giai đoạn cấp tính.</li>
        <li><strong>Không sử dụng sản phẩm đa công dụng thiếu kiểm chứng:</strong> Tối giản chu trình skincare còn 3 bước: Làm sạch dịu nhẹ pH 5.5 - Cấp ẩm phục hồi màng lipid - Chống nắng vật lý phổ rộng.</li>
        <li><strong>Không bỏ quên yếu tố dinh dưỡng:</strong> Da cần protein chất lượng cao và chất béo tốt (Omega-3) để tổng hợp lại tế bào sừng.</li>
      </ol>

      <h2 id="phac-do-tri-lieu-heshi-skin-repair">3. Phác đồ Heshi Skin Repair đồng hành cùng chuyên gia</h2>
      <p>Ứng dụng công nghệ dưỡng ẩm sinh học đa tầng cùng các peptide tái sinh mô, liệu trình phục hồi Heshi tập trung làm dịu các thụ thể kích ứng thần kinh dưới da, kích thích tăng sinh nguyên bào sợi và khóa ẩm sâu. Sau 14 - 28 ngày tuân thủ quy trình, lớp màng hydrolipid được tái lập vững vàng, mang lại làn da khỏe khoắn tự nhiên.</p>
      
      <blockquote>"Một làn da đẹp trước hết phải là một làn da khỏe mạnh và có khả năng tự vệ tự nhiên." – Chuyên gia Trần Thị Toàn</blockquote>
    `,
    date: '2026-10-25T08:30:00.000Z',
    formattedDate: '25/10/2026',
    readTime: '5 phút đọc',
    coverImage: '/images/treatment-skin.jpg',
    category: {
      id: 2,
      name: 'Da liễu Chuẩn Y khoa',
      slug: 'da-lieu-y-khoa',
    },
    author: {
      name: 'Trần Thị Toàn (Toàn Heshi)',
      avatar: '/images/avatar.jpg',
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  },
  {
    id: 102,
    slug: 'giai-ma-hoi-chung-co-vai-gay-va-phac-do-tri-lieu-co-mac-fascia',
    title: 'Giải Mã Hội Chứng Cổ Vai Gáy & Phác Đồ Trị Liệu Cơ Mạc (Fascia Release)',
    excerpt: 'Đau mỏi cổ vai gáy không đơn thuần là căng cơ tức thời mà bắt nguồn từ sự xơ dính mạng lưới cân cơ mạc và thói quen sinh hoạt sai lệch trục cột sống.',
    content: `
      <p class="lead">Hơn 80% nhân viên văn phòng và người làm việc trí óc thường xuyên đối mặt với các cơn đau ê ẩm vùng gáy, lan xuống bả vai và cánh tay. Nếu chỉ massage bấm huyệt ngoài da mà không giải phóng các điểm kích hoạt cơ mạc (Trigger Points), cơn đau sẽ nhanh chóng quay trở lại.</p>

      <img src="/images/customer-care.jpg" alt="Trị liệu giải tỏa cơ mạc cổ vai gáy chuyên sâu" />

      <h2 id="co-che-hinh-thanh-co-cung-co-mac">1. Cơ chế hình thành co cứng cơ mạc vùng cổ vai gáy</h2>
      <p>Cân cơ mạc (Fascia) là mạng lưới mô liên kết 3D bao bọc lấy từng thớ cơ, dây thần kinh và mạch máu. Khi chúng ta ngồi sai tư thế nhiều giờ trước máy tính, lưu lượng máu nuôi dưỡng vùng đốt sống cổ suy giảm, các sợi collagen trong cân mạc bị mất nước và xoắn vặn, tạo thành những "nút thắt" xơ cứng.</p>

      <h2 id="phuong-phap-tri-lieu-chuyen-sau-heshi">2. Phương pháp giải tỏa cơ mạc chuyên sâu kết hợp vận động phục hồi</h2>
      <p>Phác đồ chăm sóc của Toàn Heshi phối hợp nhuần nhuyễn kỹ thuật tác động mô sâu:</p>
      <ul>
        <li><strong>Đánh giá biên độ vận động cổ (ROM):</strong> Xác định chính xác nhóm cơ ức đòn chũm, cơ thang hay cơ nâng vai đang bị co rút hoặc ức chế.</li>
        <li><strong>Kỹ thuật nắn chỉnh giải phóng Fascia:</strong> Sử dụng lực tiếp cận chậm và sâu, làm ấm và duỗi mềm các dải xơ dính mà không gây bầm tím tổn thương mô mềm.</li>
        <li><strong>Khai thông tuần hoàn máu não:</strong> Giảm áp lực lên động mạch đốt sống, cải thiện tức thì tình trạng hoa mắt, chóng mặt và mất ngủ kinh niên.</li>
      </ul>

      <h2 id="3-bai-tap-chu-dong-tai-nha">3. Bài tập chủ động 5 phút mỗi ngày duy trì hiệu quả</h2>
      <p>Chăm sóc sức khỏe từ gốc đòi hỏi sự kết hợp giữa trị liệu của chuyên gia và ý thức tự vận động của bản thân. Hãy duy trì bài tập kéo giãn cơ hình thang và thu cằm (Chin Tuck) 3 lần mỗi ngày để tái lập thói quen cột sống chuẩn.</p>
    `,
    date: '2026-10-18T14:15:00.000Z',
    formattedDate: '18/10/2026',
    readTime: '6 phút đọc',
    coverImage: '/images/customer-care.jpg',
    category: {
      id: 3,
      name: 'Trị liệu Cơ mạc & Cổ vai gáy',
      slug: 'tri-lieu-co-mac',
    },
    author: {
      name: 'Trần Thị Toàn (Toàn Heshi)',
      avatar: '/images/avatar.jpg',
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  },
  {
    id: 103,
    slug: 'dinh-duong-chuyen-hoa-nuoi-duong-te-bao-tu-ben-trong',
    title: 'Dinh Dưỡng Chuyển Hóa: Nuôi Dưỡng Tế Bào & Giữ Gìn Vóc Dáng Khỏe Đẹp Tự Nhiên',
    excerpt: 'Tại sao kiêng khem khắt khe lại khiến cơ thể mệt mỏi, da xỉn màu và nhanh tăng cân trở lại? Bí quyết nằm ở việc cân bằng dinh dưỡng chuyển hóa tế bào.',
    content: `
      <p class="lead">Nhiều người lầm tưởng rằng ăn kiêng là nhịn ăn hoặc cắt bỏ hoàn toàn tinh bột và chất béo. Trên thực tế, tế bào không thể tái tạo nếu thiếu hụt các vi chất dinh dưỡng thiết yếu và nguồn năng lượng lành mạnh.</p>

      <img src="/images/healthy-lifestyle.jpg" alt="Lối sống dinh dưỡng chuyển hóa và vận động lành mạnh" />

      <h2 id="su-that-ve-suc-khoe-chuyen-hoa">1. Sự thật về sức khỏe chuyển hóa và làn da</h2>
      <p>Mọi biểu hiện trên bề mặt da như mụn nội tiết, nám mảng, hay sự chùng nhão sớm đều là tấm gương phản chiếu sức khỏe đường ruột và gan của bạn. Khi lượng đường huyết dao động liên tục do ăn uống sai cách, quá trình đường hóa (Glycation) sẽ bẻ gãy các liên kết collagen, khiến da nhanh chóng chảy xệ.</p>

      <h2 id="3-nguyen-tac-dinh-duong-tu-goc">2. 3 nguyên tắc dinh dưỡng từ gốc Toàn Heshi chia sẻ</h2>
      <ul>
        <li><strong>Đủ đạm lành mạnh:</strong> Đảm bảo 1.2g - 1.5g protein/kg trọng lượng cơ thể mỗi ngày từ cá biển, thịt gia cầm, trứng và các loại đậu hạt hữu cơ.</li>
        <li><strong>Chất béo tốt kháng viêm:</strong> Tăng cường dầu oliu ép lạnh, quả bơ, hạt lanh và Omega-3 tinh khiết để bôi trơn khớp và màng tế bào.</li>
        <li><strong>Chất xơ nuôi dưỡng hệ vi sinh:</strong> Tối thiểu 30g rau xanh nhiều màu sắc mỗi ngày nhằm hỗ trợ bài tiết độc tố đường tiêu hóa.</li>
      </ul>
    `,
    date: '2026-10-10T09:00:00.000Z',
    formattedDate: '10/10/2026',
    readTime: '4 phút đọc',
    coverImage: '/images/healthy-lifestyle.jpg',
    category: {
      id: 4,
      name: 'Dinh dưỡng Chuyển hóa',
      slug: 'dinh-duong-chuyen-hoa',
    },
    author: {
      name: 'Trần Thị Toàn (Toàn Heshi)',
      avatar: '/images/avatar.jpg',
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  },
  {
    id: 104,
    slug: 'chuyen-giao-mo-hinh-spa-chuan-y-khoa-cho-chu-co-so-toan-quoc',
    title: 'Chuyển Giao Mô Hình Spa Chuẩn Y Khoa: Giải Pháp Đột Phá Doanh Thu Cho Chủ Cơ Sở',
    excerpt: 'Hơn 100+ chủ spa đã thoát khỏi bế tắc cạnh tranh giá rẻ nhờ chuẩn hóa quy trình điều trị da liễu và tích hợp kiềng 3 chân chăm sóc sức khỏe chủ động Heshi.',
    content: `
      <p class="lead">Thị trường thẩm mỹ và spa đang bước vào giai đoạn thanh lọc khốc liệt. Khách hàng ngày càng thông thái, từ chối những lời quảng cáo thổi phồng và chỉ gắn bó với những cơ sở có chuyên môn y khoa vững vàng cùng trải nghiệm chăm sóc chân thành.</p>

      <img src="/images/transfer-spa.jpg" alt="Lễ chuyển giao mô hình cho chủ cơ sở spa" />

      <h2 id="thach-thuc-cua-chu-spa-truyen-thong">1. Những thách thức sống còn của chủ Spa truyền thống</h2>
      <p>Hầu hết các chủ cơ sở vừa và nhỏ hiện nay gặp 3 vấn đề nan giải:</p>
      <ul>
        <li>Không có quy trình chẩn đoán da liễu chuẩn mực, phụ thuộc vào tay nghề thợ.</li>
        <li>Bị cuốn vào cuộc chiến giảm giá dịch vụ, biên lợi nhuận ngày càng thu hẹp.</li>
        <li>Thiếu hệ thống sản phẩm phục hồi chính hãng có chứng nhận an toàn dược mỹ phẩm.</li>
      </ul>

      <h2 id="gia-tri-chuyen-giao-tu-toan-heshi">2. Giá trị khác biệt khi nhận chuyển giao mô hình từ Toàn Heshi</h2>
      <p>Chương trình chuyển giao không chỉ đơn thuần là phân phối sản phẩm, mà là sự đồng hành 1-1 toàn diện:</p>
      <ol>
        <li><strong>Đào tạo lý thuyết & thực hành lâm sàng:</strong> Nắm vững sinh lý da, phác đồ phục hồi da treatment hỏng, kỹ thuật trị liệu cơ mạc không đau.</li>
        <li><strong>Chuẩn hóa quy trình vận hành (SOP):</strong> Bàn giao bộ tài liệu tư vấn, cam kết liệu trình và chăm sóc khách hàng tự động.</li>
        <li><strong>Chuyển giao chiến lược Marketing bản địa:</strong> Thu hút khách hàng chất lượng cao ngay tại địa phương mà không cần đốt ngân sách quảng cáo vô tội vạ.</li>
      </ol>
    `,
    date: '2026-10-02T11:20:00.000Z',
    formattedDate: '02/10/2026',
    readTime: '7 phút đọc',
    coverImage: '/images/transfer-spa.jpg',
    category: {
      id: 5,
      name: 'Chuyển giao Mô hình Spa',
      slug: 'chuyen-giao-spa',
    },
    author: {
      name: 'Trần Thị Toàn (Toàn Heshi)',
      avatar: '/images/avatar.jpg',
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  },
  {
    id: 105,
    slug: 'triet-ly-kieng-3-chan-cham-soc-suc-khoe-tu-goc',
    title: 'Triết Lý Kiềng 3 Chân: Mát-xa – Vận Động – Dinh Dưỡng: Chăm Sóc Sức Khỏe Từ Gốc',
    excerpt: 'Sức khỏe và sắc đẹp không thể mua bằng sự can thiệp chắp vá. Hãy cùng Chuyên gia Toàn Heshi khám phá nền tảng vững chắc bảo vệ cơ thể từ cấp độ tế bào.',
    content: `
      <p class="lead">Trong suốt hơn 10 năm cống hiến cho ngành chăm sóc sức khỏe và thẩm mỹ, bài học lớn nhất tôi rút ra là: Không có loại kem bôi hay máy móc công nghệ cao nào có thể thay thế một cơ thể tự chữa lành nếu chúng ta biết nuôi dưỡng đúng cách.</p>

      <img src="/images/workshop.jpg" alt="Chuyên gia Toàn Heshi chia sẻ triết lý Kiềng 3 chân" />

      <h2 id="tru-cot-1-mat-xa-tri-lieu">Trụ cột 1: Mát-xa & Trị liệu giải tỏa ách tắc</h2>
      <p>Khai thông dòng chảy bạch huyết, thư giãn cơ căng cứng và đánh thức năng lượng ngủ quên của các mô bào.</p>

      <h2 id="tru-cot-2-van-dong-phuc-hoi">Trụ cột 2: Vận động phục hồi chủ động</h2>
      <p>Tăng cường tính dẻo dai cơ bắp, hỗ trợ dịch khớp tiết đều và duy trì mật độ xương vững chắc.</p>

      <h2 id="tru-cot-3-dinh-duong-te-bao">Trụ cột 3: Dinh dưỡng tế bào chuyển hóa</h2>
      <p>Cung cấp nguyên liệu tinh khiết nhất để cơ thể tái tạo mô mới mỗi ngày và chống lại stress oxy hóa.</p>
    `,
    date: '2026-09-20T16:00:00.000Z',
    formattedDate: '20/09/2026',
    readTime: '5 phút đọc',
    coverImage: '/images/workshop.jpg',
    category: {
      id: 2,
      name: 'Da liễu Chuẩn Y khoa',
      slug: 'da-lieu-y-khoa',
    },
    author: {
      name: 'Trần Thị Toàn (Toàn Heshi)',
      avatar: '/images/avatar.jpg',
      role: 'Chuyên gia Chăm sóc Sức khỏe & Sáng lập Mô hình',
    },
  },
];

export const PILLARS_DATA = [
  {
    id: 'massage',
    title: 'Mát-xa & Trị liệu Chuyên sâu',
    subtitle: 'Giải phóng điểm căng cơ mạc & Tái sinh làn da',
    icon: 'Sparkles',
    description: 'Chăm sóc, thư giãn và phục hồi da liễu & cơ xương khớp chuẩn y khoa. Tác động trúng đích giải tỏa ách tắc kinh lạc, kích thích lưu thông tuần hoàn máu nuôi dưỡng mô sâu.',
    highlights: [
      'Trị liệu đau mỏi cổ vai gáy & thắt lưng',
      'Phục hồi màng ẩm & cấu trúc da tổn thương',
      'Đả thông kinh lạc & lưu dẫn hệ bạch huyết',
      'An toàn chuẩn y khoa, không xâm lấn đau đớn'
    ],
    badgeColor: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    id: 'movement',
    title: 'Vận động Trị liệu Chủ động',
    subtitle: 'Rèn luyện thể chất dẻo dai & Tăng sức bền',
    icon: 'Activity',
    description: 'Hướng dẫn các bài tập phục hồi tư thế, gia tăng biên độ vận động khớp và kích hoạt nguồn năng lượng tự nhiên của cơ thể để chống lại sự thoái hóa sớm.',
    highlights: [
      'Nắn chỉnh tư thế sinh hoạt & cân bằng cột sống',
      'Bài tập giãn cơ mạc 10 phút tại nhà/nơi làm việc',
      'Kích hoạt cơ lõi (Core) và tăng sức bền cơ bắp',
      'Đồng hành tạo thói quen thể dục bền vững'
    ],
    badgeColor: 'bg-sage-soft text-sage border-sage/20',
  },
  {
    id: 'nutrition',
    title: 'Dinh dưỡng Từ Bên Trong',
    subtitle: 'Nuôi dưỡng tế bào & Cân bằng chuyển hóa',
    icon: 'Apple',
    description: 'Hiểu đúng về thực phẩm và sức khỏe chuyển hóa. Xây dựng chế độ dinh dưỡng cá nhân hóa, cung cấp dưỡng chất cần thiết để cơ thể tự phục hồi và trẻ hóa tự nhiên.',
    highlights: [
      'Thực đơn cân bằng vi chất phục hồi tế bào da',
      'Kiểm soát chỉ số đường huyết & phản ứng viêm',
      'Dinh dưỡng bảo vệ sụn khớp & chức năng gan mật',
      'Thanh lọc cơ thể khoa học, không nhịn ăn cực đoan'
    ],
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
];

export const STATS_DATA = [
  { value: '10+', label: 'Năm kinh nghiệm thực chiến', desc: 'Đồng hành cùng hàng ngàn khách hàng' },
  { value: '120+', label: 'Cơ sở Spa chuyển giao', desc: 'Mạng lưới đối tác trên khắp cả nước' },
  { value: '1,500+', label: 'Học viên & Kỹ thuật viên', desc: 'Được đào tạo chuẩn kỹ năng y khoa' },
  { value: '98%', label: 'Khách hàng hài lòng', desc: 'Phản hồi tích cực về hiệu quả phục hồi' },
];

export const B2B_TRAINING_PACKAGES = [
  {
    id: 'basic-spa',
    name: 'Gói Chuyển Giao Cơ Bản – Phục Hồi Da Liễu',
    badge: 'Khởi Nghiệp Bền Vững',
    target: 'Dành cho KTV nâng cao tay nghề hoặc chủ Spa nhỏ muốn bổ sung liệu trình uy tín',
    benefits: [
      'Chuyển giao phác đồ phục hồi da nhiễm corticoid, da mỏng đỏ giãn mao mạch',
      'Cung cấp quy trình soi da, chẩn đoán bệnh học da liễu cơ bản',
      'Bộ tài liệu SOP đón tiếp, tư vấn và chốt liệu trình minh bạch',
      'Hỗ trợ setup danh mục sản phẩm Heshi chính hãng với chiết khấu ưu đãi',
      'Cấp chứng nhận hoàn thành khóa huấn luyện kỹ thuật viên Heshi'
    ],
    ctaText: 'Đăng ký tư vấn gói cơ bản'
  },
  {
    id: 'pro-wellness',
    name: 'Gói Chuyển Giao Chuyên Sâu – Kiềng 3 Chân Toàn Diện',
    badge: 'Được Lựa Chọn Nhiều Nhất',
    isPopular: true,
    target: 'Dành cho các chủ Spa / Clinic muốn bứt phá doanh số với mô hình Wellness chuẩn Y khoa',
    benefits: [
      'Trọn bộ kỹ thuật: Phục hồi da chuyên sâu + Trị liệu cơ mạc Fascia Cổ Vai Gáy',
      'Bộ công thức dinh dưỡng chuyển hóa kết hợp trong phác đồ trị liệu',
      'Đào tạo trực tiếp 1-1 tại cơ sở bởi Chuyên gia Trần Thị Toàn',
      'Cung cấp kịch bản Marketing bản địa, video & hình ảnh truyền thông thực tế',
      'Quy trình quản lý nhân sự & giữ chân nhân sự tay nghề cao',
      'Hỗ trợ bảo hành kỹ thuật và tái đào tạo cập nhật định kỳ mỗi năm'
    ],
    ctaText: 'Nhận bảng quyền lợi chuyên sâu'
  },
  {
    id: 'master-partner',
    name: 'Gói Đồng Hành Đối Tác Chiến Lược – Setup Trọn Gói',
    badge: 'Chuyển Giao Toàn Diện',
    target: 'Dành cho nhà đầu tư mở mới cơ sở Spa/Wellness từ 100m² trở lên',
    benefits: [
      'Tư vấn thiết kế công năng phòng dịch vụ theo tiêu chuẩn vô khuẩn & trải nghiệm',
      'Tuyển dụng và đào tạo toàn bộ đội ngũ kỹ thuật viên ban đầu',
      'Định vị thương hiệu cá nhân cho chủ cơ sở tại địa phương',
      'Trực tiếp chuyên gia Toàn Heshi tham gia ngày khai trương và cố vấn chuyên môn',
      'Độc quyền phân phối khu vực theo thỏa thuận hợp tác thương mại'
    ],
    ctaText: 'Đặt lịch trao đổi trực tiếp'
  }
];

export const B2C_SERVICES = [
  {
    id: 'skin-restoration',
    title: 'Phục Hồi Cấu Trúc Da Tầng Sâu',
    duration: '75 - 90 phút',
    suitableFor: 'Da mỏng đỏ, nhiễm corticoid, tổn thương sau peel/laser sai cách, mất màng ẩm sinh học.',
    process: [
      'Soi da vi điểm và đánh giá mức độ tổn thương màng lipid',
      'Làm sạch sinh học vô khuẩn pH 5.5 không gây kích ứng',
      'Điện di tinh chất peptide sinh học và ceramide tự nhiên',
      'Đắp mặt nạ tế bào gốc làm dịu cấp tốc và chiếu ánh sáng sinh học'
    ],
    commitments: 'Cam kết giảm 70% cảm giác châm chích ngay buổi đầu tiên, tái tạo độ dày khỏe tự nhiên của làn da.'
  },
  {
    id: 'fascia-neck-shoulder',
    title: 'Trị Liệu Cơ Mạc Cổ Vai Gáy & Cột Sống',
    duration: '60 - 75 phút',
    suitableFor: 'Người ngồi máy tính nhiều, đau cứng cổ gáy, tê bì tay chân, đau đầu căng thẳng.',
    process: [
      'Thăm khám tầm vận động cổ gáy và xác định dải cơ xơ cứng',
      'Chườm ấm thảo dược khai thông huyệt đạo và làm mềm mô mạc',
      'Kỹ thuật nắn nhả cơ mạc chuyên sâu giải tỏa áp lực dây thần kinh',
      'Hướng dẫn bài tập tái định vị trục cổ tại nhà'
    ],
    commitments: 'Cảm nhận nhẹ nhõm rõ rệt vùng vai gáy, ngủ sâu giấc và cải thiện tuần hoàn máu lên não.'
  },
  {
    id: 'wellness-nutrition',
    title: 'Đánh Giá Thể Trạng & Tư Vấn Dinh Dưỡng Cá Nhân Hóa',
    duration: '60 phút',
    suitableFor: 'Người bị rối loạn chuyển hóa nhẹ, dễ mệt mỏi, thừa mỡ nội tạng hoặc da sạm lão hóa sớm.',
    process: [
      'Đo lường các chỉ số cơ thể: Mỡ cơ thể, mỡ nội tạng, cơ xương và tuổi sinh học',
      'Phân tích thói quen ăn uống và tìm kiếm căn nguyên gây ứ trệ chuyển hóa',
      'Thiết kế thực đơn dinh dưỡng thực chiến phù hợp với sở thích và nếp sinh hoạt',
      'Theo dõi chỉ số và điều chỉnh định kỳ mỗi 2 tuần'
    ],
    commitments: 'Phương pháp khoa học, không nhịn ăn tiêu cực, giúp cơ thể tràn đầy sinh lực từ sâu bên trong.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Chị Nguyễn Thanh Mai',
    role: 'Chủ Thanh Mai Spa (Hà Giang)',
    type: 'B2B',
    avatar: '/images/transfer-spa.jpg',
    content: 'Trước đây spa của tôi rất vất vả cạnh tranh giảm giá. Nhờ cô Toàn chuyển giao phác đồ phục hồi da và kỹ thuật trị liệu cơ mạc Heshi, khách hàng đến đều đặn và sẵn sàng mua thẻ liệu trình dài hạn. Rất biết ơn sự tận tâm của cô!',
  },
  {
    id: 2,
    name: 'Anh Vũ Hoàng Long',
    role: 'Trưởng phòng Marketing, Khách hàng B2C',
    type: 'B2C',
    avatar: '/images/customer-care.jpg',
    content: 'Tôi bị đau cổ vai gáy kèm mất ngủ suốt 2 năm do ngồi làm việc máy tính. Sau liệu trình 5 buổi trị liệu cơ mạc và tập theo các động tác cô Toàn hướng dẫn, vùng vai nhẹ bẫng, tối ngủ ngon giấc một mạch tới sáng.',
  },
  {
    id: 3,
    name: 'Chị Lê Bích Ngọc',
    role: 'Chủ Ngọc Beauty & Wellness (Tuyên Quang)',
    type: 'B2B',
    avatar: '/images/heshi-team.jpg',
    content: 'Điểm mình nể nhất ở chị Toàn là sự chuẩn y khoa và cái tâm với nghề. Chị dạy thực hành rất kỹ, cầm tay chỉ việc từng học viên cho tới khi thành thạo mới thôi. Mô hình kiềng 3 chân đã thay đổi hoàn toàn tư duy làm nghề của mình.',
  }
];
