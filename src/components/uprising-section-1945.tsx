"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Megaphone,
  ScrollText,
  Flag,
  TimerReset,
} from "lucide-react";

export default function UprisingSection1945() {
  const bulletsThoiCo = [
    "Đầu năm 1945, Thế chiến thứ II bước vào giai đoạn kết thúc.",
    "Tháng 8/1945, Liên Xô đánh bại đạo quân Quan Đông; Mỹ ném hai quả bom nguyên tử; Nhật Bản tuyên bố đầu hàng Đồng minh.",
    "Chính quyền Nhật ở Đông Dương hoang mang. Thời cơ giành chính quyền đã xuất hiện.",
    "Thời cơ tồn tại từ khi Nhật đầu hàng đến trước khi quân Đồng minh (Anh, Trung Hoa Dân quốc) đổ bộ (nửa cuối tháng 8).",
  ];

  const keyDates = [
    {
      date: "13/8/1945 (23:00)",
      title: "Quân lệnh số 1",
      desc: "Phát lệnh Tổng khởi nghĩa trong cả nước.",
      icon: Megaphone,
    },
    {
      date: "14–15/8/1945",
      title: "Hội nghị toàn quốc của Đảng – Tân Trào",
      desc: "Khẳng định thời cơ chín muồi; nguyên tắc tập trung, thống nhất, kịp thời.",
      icon: CalendarDays,
    },
    {
      date: "16/8/1945",
      title: "Đại hội Quốc dân – Tân Trào",
      desc: "Thông qua 10 chính sách; lập Ủy ban Dân tộc Giải phóng VN, Chủ tịch Hồ Chí Minh.",
      icon: ScrollText,
    },
    {
      date: "02/9/1945",
      title: "Nước Việt Nam Dân chủ Cộng hòa",
      desc: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập tại Ba Đình.",
      icon: Flag,
    },
  ];

  return (
    <section
      id="khoi-nghia"
      className="relative py-16 sm:py-20 scroll-mt-24 bg-beige-light"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <h2
              className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] font-bold leading-tight"
              style={{ color: "var(--color-red-rev)" }}
            >
              IV. Tổng khởi nghĩa giành chính quyền
            </h2>
            <p
              className="mt-2 text-sm md:text-base"
              style={{ color: "var(--color-gray-text)" }}
            >
              Bối cảnh – Phát lệnh – Kết quả (8/1945)
            </p>
          </div>
        </motion.div>

        <div
          className="h-px mt-6"
          style={{ backgroundColor: "var(--color-brown-earth)" }}
        />

        {/* MAIN LAYOUT */}
        <div className="mt-10 flex flex-col-reverse gap-12 lg:flex-row lg:gap-10">
          {/* ===== MAIN CONTENT ===== */}
          <div className="flex-1 space-y-12">
            {/* === 1. Thời cơ cách mạng === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-2">
                <TimerReset
                  className="h-5 w-5"
                  style={{ color: "var(--color-red-rev)" }}
                />
                <h3
                  className="text-xl md:text-2xl font-semibold m-0"
                  style={{ color: "var(--color-red-rev)" }}
                >
                  1. Thời cơ cách mạng
                </h3>
              </div>

              <div
                className="border rounded-lg p-6 shadow-sm backdrop-blur bg-white/90"
                style={{ borderColor: "var(--color-brown-earth)" }}
              >
                <ul className="grid gap-3 text-[15px] leading-relaxed">
                  {bulletsThoiCo.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1 h-2 w-2 rounded-full inline-block shrink-0"
                        style={{ backgroundColor: "var(--color-red-rev)" }}
                      />
                      <span style={{ color: "var(--color-gray-text)" }}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div
                    className="rounded-lg border p-4"
                    style={{ borderColor: "var(--color-brown-earth)" }}
                  >
                    <div
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--color-gray-text)" }}
                    >
                      <CalendarDays className="h-4 w-4" />
                      <span>Cửa sổ thời cơ</span>
                    </div>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "var(--foreground)" }}
                    >
                      Khoảng nửa cuối tháng 8/1945 – trước khi quân Đồng minh đổ
                      bộ.
                    </p>
                  </div>
                  <div
                    className="rounded-lg border p-4"
                    style={{ borderColor: "var(--color-brown-earth)" }}
                  >
                    <div
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--color-gray-text)" }}
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Phạm vi</span>
                    </div>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "var(--foreground)" }}
                    >
                      Toàn cõi Đông Dương, trọng điểm các đô thị và cơ quan đầu
                      não.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* === 2. Phát lệnh Tổng khởi nghĩa === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-2">
                <Megaphone
                  className="h-5 w-5"
                  style={{ color: "var(--color-red-rev)" }}
                />
                <h3
                  className="text-xl md:text-2xl font-semibold m-0"
                  style={{ color: "var(--color-red-rev)" }}
                >
                  2. Phát lệnh Tổng khởi nghĩa
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Box 1 */}
                <div
                  className="border rounded-lg p-5 shadow-sm bg-white"
                  style={{ borderColor: "var(--color-brown-earth)" }}
                >
                  <div
                    className="text-xs mb-2"
                    style={{ color: "var(--color-gray-text)" }}
                  >
                    <span className="px-2 py-0.5 rounded mr-2 bg-red-700 text-white">
                      14–15/8/1945
                    </span>
                    Tân Trào
                  </div>
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: "var(--color-red-rev)" }}
                  >
                    Hội nghị toàn quốc của Đảng
                  </h4>
                  <ul
                    className="space-y-2 text-sm leading-relaxed"
                    style={{ color: "var(--color-gray-text)" }}
                  >
                    <li>
                      • Nhận định: Thời cơ đã đến, cần kịp thời hành động.
                    </li>
                    <li>
                      • Nguyên tắc chỉ đạo: Tập trung – Thống nhất – Kịp thời.
                    </li>
                    <li>
                      • Chủ trương: Chiếm nơi chắc thắng; kết hợp quân sự và
                      chính trị.
                    </li>
                  </ul>

                  <div
                    className="rounded-lg border p-3 mt-4"
                    style={{
                      borderColor: "var(--color-brown-earth)",
                      backgroundColor: "rgba(168,50,50,0.08)",
                    }}
                  >
                    <div
                      className="text-xs"
                      style={{ color: "var(--color-gray-text)" }}
                    >
                      <span className="px-2 py-0.5 rounded mr-2 bg-red-700 text-white">
                        23:00 • 13/8/1945
                      </span>
                      Quân lệnh số 1
                    </div>
                    <p
                      className="mt-2 text-sm"
                      style={{ color: "var(--foreground)" }}
                    >
                      Phát lệnh Tổng khởi nghĩa trên phạm vi cả nước.
                    </p>
                  </div>
                </div>

                {/* Box 2 */}
                <div
                  className="border rounded-lg p-5 shadow-sm bg-white"
                  style={{ borderColor: "var(--color-brown-earth)" }}
                >
                  <div
                    className="text-xs mb-2"
                    style={{ color: "var(--color-gray-text)" }}
                  >
                    <span className="px-2 py-0.5 rounded mr-2 bg-red-700 text-white">
                      16/8/1945
                    </span>
                    Tân Trào
                  </div>
                  <h4
                    className="font-semibold mb-3"
                    style={{ color: "var(--color-red-rev)" }}
                  >
                    Đại hội Quốc dân
                  </h4>
                  <p style={{ color: "var(--color-gray-text)" }}>
                    • Thông qua 10 chính sách của Việt Minh.
                  </p>
                  <p style={{ color: "var(--color-gray-text)" }}>
                    • Thành lập Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí
                    Minh làm Chủ tịch.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* === 3. Kết quả === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <Flag
                  className="h-5 w-5"
                  style={{ color: "var(--color-red-rev)" }}
                />
                <h3
                  className="text-xl md:text-2xl font-semibold m-0"
                  style={{ color: "var(--color-red-rev)" }}
                >
                  3. Kết quả
                </h3>
              </div>

              <div
                className="border rounded-lg p-6 shadow-sm"
                style={{
                  borderColor: "var(--color-brown-earth)",
                  background:
                    "linear-gradient(to bottom right, var(--color-beige-light), #fff)",
                }}
              >
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "var(--foreground)" }}
                >
                  Thắng lợi của Tổng khởi nghĩa làm nên sự ra đời của{" "}
                  <span
                    className="font-semibold"
                    style={{ color: "var(--color-red-rev)" }}
                  >
                    nước Việt Nam Dân chủ Cộng hòa
                  </span>
                  .
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="px-2 py-0.5 rounded bg-red-700 text-white">
                    02/9/1945
                  </span>
                  <span style={{ color: "var(--color-gray-text)" }}>
                    Chủ tịch Hồ Chí Minh đọc <em>Tuyên ngôn độc lập</em> tại
                    Quảng trường Ba Đình.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ===== ASIDE (Timeline) ===== */}
          {/* ===== ASIDE (Timeline) ===== */}
          <aside
            className="
      order-2 lg:order-1
      w-full lg:w-[260px]
      h-fit
      lg:sticky lg:top-28
      z-10
    "
          >
            <h3
              className="text-base font-semibold mb-4 text-center lg:text-left"
              style={{ color: "var(--color-red-rev)" }}
            >
              Mốc then chốt
            </h3>
            <div className="relative pl-4">
              <div
                className="absolute left-1 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: "var(--color-brown-earth)" }}
              />
              <ul className="space-y-6">
                {keyDates.map((k, i) => (
                  <motion.li
                    key={k.date}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative"
                  >
                    <div
                      className="absolute -left-[16px] top-0.5 h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: "var(--color-red-rev)" }}
                    />
                    <div className="ml-2">
                      <p
                        className="text-xs uppercase tracking-wide"
                        style={{ color: "var(--color-gray-text)" }}
                      >
                        {k.date}
                      </p>
                      <div className="mt-1 flex items-start gap-2">
                        <k.icon
                          className="h-4 w-4 shrink-0 mt-1.5"
                          style={{ color: "var(--color-red-rev)" }}
                        />
                        <div>
                          <p
                            className="font-semibold"
                            style={{ color: "var(--color-red-rev)" }}
                          >
                            {k.title}
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: "var(--color-gray-text)" }}
                          >
                            {k.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
