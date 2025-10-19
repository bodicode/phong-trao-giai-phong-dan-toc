"use client";

import { motion } from "framer-motion";

export default function VietnamFooter() {
  return (
    <footer
      className="relative overflow-hidden bg-[var(--background)] py-12"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(168,50,50,0.05), transparent 60%), radial-gradient(circle at top right, rgba(90,62,54,0.05), transparent 60%)",
      }}
    >
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19
                 c-82.06-17.28-168.06-16.14-250.45,1.14C404,32,320.24,72,240.27,89.63
                 c-84.93,19-173.23,13.12-240.27-7.4V120H1200V95.8
                 C1132.19,118.92,1045.4,110.47,985.66,92.83Z"
            className="fill-white"
          />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-6xl mx-auto px-6"
      >
        <h2
          className="text-3xl md:text-4xl font-serif tracking-wider"
          style={{ color: "var(--color-black-smoke)", letterSpacing: "2px" }}
        >
          PHONG TRÀO{" "}
          <span style={{ color: "var(--color-red-rev)" }}>
            GIẢI PHÓNG DÂN TỘC 1939–1945
          </span>
        </h2>

        <p
          className="mt-5 text-base italic leading-relaxed font-serif"
          style={{ color: "var(--color-gray-text)" }}
        >
          Giai đoạn 1939–1945 đánh dấu bước chuyển chiến lược quyết định của
          Đảng Cộng sản Đông Dương – từ đấu tranh dân chủ sang mục tiêu hàng đầu
          là giải phóng dân tộc, mở đường cho Tổng khởi nghĩa Tháng Tám lịch sử.
        </p>

        <div className="flex items-center justify-center mt-6 gap-3">
          <div
            className="h-[2px] w-10"
            style={{ backgroundColor: "var(--color-red-rev)" }}
          />
          <span
            className="uppercase tracking-wide text-sm font-medium"
            style={{ color: "var(--color-black-smoke)" }}
          >
            1939 – 1945
          </span>
          <div
            className="h-[2px] w-10"
            style={{ backgroundColor: "var(--color-red-rev)" }}
          />
        </div>
      </motion.div>

      <div className="mt-10 h-[1px] max-w-7xl mx-auto bg-gray-400" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-3 mx-auto mt-14 grid md:grid-cols-3 gap-10 items-start"
      >
        <div className="text-center">
          <h4
            className="text-base font-semibold tracking-wide uppercase"
            style={{ color: "var(--color-black-smoke)" }}
          >
            Bối cảnh lịch sử
          </h4>
          <div
            className="mt-1 h-[2px] w-20 mx-auto"
            style={{ backgroundColor: "var(--color-red-rev)" }}
          />
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "var(--color-gray-text)" }}
          >
            Chiến tranh thế giới thứ II (1939) bùng nổ, Pháp đầu hàng Đức, Nhật
            tràn vào Đông Dương. Thực dân Pháp và phát xít Nhật cùng thống trị,
            đàn áp phong trào cách mạng, đặt Đảng Cộng sản Đông Dương ra ngoài
            vòng pháp luật.
          </p>
        </div>

        <div className="text-center">
          <h4
            className="text-base font-semibold tracking-wide uppercase"
            style={{ color: "var(--color-black-smoke)" }}
          >
            Chủ trương & Phong trào
          </h4>
          <div
            className="mt-1 h-[2px] w-20 mx-auto"
            style={{ backgroundColor: "var(--color-red-rev)" }}
          />
          <ul
            className="mt-4 space-y-2 text-sm leading-relaxed"
            style={{ color: "var(--color-gray-text)" }}
          >
            <li>
              • Hội nghị Trung ương VI (1939) – xác định nhiệm vụ giải phóng dân
              tộc là hàng đầu.
            </li>
            <li>
              • Hội nghị Trung ương VIII (1941) tại Pác Bó – thành lập Mặt trận
              Việt Minh, chuẩn bị khởi nghĩa vũ trang.
            </li>
            <li>
              • Cao trào kháng Nhật cứu nước 1945: khẩu hiệu “Phá kho thóc, giải
              quyết nạn đói”.
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h4
            className="text-base font-semibold tracking-wide uppercase"
            style={{ color: "var(--color-black-smoke)" }}
          >
            Kết quả & Ý nghĩa
          </h4>
          <div
            className="mt-1 h-[2px] w-20 mx-auto"
            style={{ backgroundColor: "var(--color-red-rev)" }}
          />
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "var(--color-gray-text)" }}
          >
            Tổng khởi nghĩa Tháng Tám 1945 thắng lợi, lập nên nước Việt Nam Dân
            chủ Cộng hòa – nhà nước công nông đầu tiên ở Đông Nam Á, mở ra kỷ
            nguyên độc lập dân tộc và chủ nghĩa xã hội.
          </p>
        </div>
      </motion.div>

      <div className="relative text-center mt-10">
        <p
          className="text-xs tracking-wide uppercase font-medium"
          style={{ color: "var(--color-gray-text)" }}
        >
          © 2025 | Giai đoạn 1939–1945 – Phong trào Giải phóng Dân tộc Việt Nam
        </p>
      </div>
    </footer>
  );
}
