"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useState } from "react";
import { TimelineModal } from "./timeline-modal";
import AnimatedHeroBackground from "./animate-blob";

type TimelineItem = {
  year: string;
  title: string;
  details: string;
  modal: {
    title: string;
    image: string;
    content: React.ReactNode;
  };
};

const timeline: TimelineItem[] = [
  {
    year: "1939–1941",
    title: "Các cuộc khởi nghĩa ban đầu",
    details:
      "Khởi nghĩa Bắc Sơn (9/1940), Nam Kỳ (11/1940), và Binh biến Đô Lương (1/1941) là những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc.",
    modal: {
      title: "Các cuộc khởi nghĩa ban đầu",
      image: "/khoi-nghia-ban-dau.jpg",
      content: (
        <div className="space-y-3">
          <p>
            Các cuộc khởi nghĩa quan trọng nổ ra là Khởi nghĩa Bắc Sơn (9/1940),
            Khởi nghĩa Nam Kỳ (11/1940), và Binh biến Đô Lương (1/1941).
          </p>
          <p>
            Những sự kiện này được xem là “Những tiếng súng báo hiệu cho cuộc
            khởi nghĩa toàn quốc, là bước đầu đấu tranh bằng võ lực”.
          </p>
        </div>
      ),
    },
  },
  {
    year: "1941–1944",
    title: "Hoạt động tuyên truyền và xây dựng Mặt trận",
    details:
      "Việt Minh công bố Tuyên Ngôn (25/10/1941) với 10 chính sách lớn; thành lập Hội Văn hóa cứu quốc Việt Nam (1944); đẩy mạnh tuyên truyền.",
    modal: {
      title: "Tuyên truyền và Xây dựng Mặt trận",
      image: "/xay-dung-mat-tran.jpg",
      content: (
        <div className="space-y-3">
          <p>Đảng đẩy mạnh công tác tuyên truyền và xây dựng Mặt trận:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Việt Minh công bố <i>Tuyên Ngôn</i> (25/10/1941) với 10 chính sách
              quan trọng: bỏ thuế ruộng, thuế thân, tự do tín ngưỡng, báo chí,
              nông dân có ruộng, công nhân làm 8h/ngày.
            </li>
            <li>Thành lập Hội Văn hóa cứu quốc Việt Nam (1944).</li>
            <li>Đẩy mạnh hoạt động báo chí và tuyên truyền.</li>
          </ul>
        </div>
      ),
    },
  },
  {
    year: "1944",
    title: "Xây dựng lực lượng vũ trang",
    details:
      "Đội du kích Bắc Sơn phát triển thành Cứu quốc quân; thành lập Việt Nam Tuyên truyền Giải phóng quân (22/12/1944).",
    modal: {
      title: "Xây dựng lực lượng vũ trang",
      image: "/xay-dung-luc-luong-vu-trang.jpg",
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-5 space-y-2">
            <li>Đội du kích Bắc Sơn phát triển thành Cứu quốc quân.</li>
            <li>
              Thành lập Việt Nam Tuyên truyền Giải phóng quân (22/12/1944).
            </li>
            <li>Mở rộng các đội tự vệ cứu quốc trên khắp cả nước.</li>
          </ul>
        </div>
      ),
    },
  },
  {
    year: "1943–1945",
    title: "Thiết lập căn cứ địa và chuẩn bị Tổng khởi nghĩa",
    details:
      "Hình thành căn cứ địa Việt Bắc; Tổng bộ Việt Minh ra chỉ thị 'Sửa soạn khởi nghĩa' (10/1944); thành lập Khu giải phóng Việt Bắc (4/6/1945).",
    modal: {
      title: "Thiết lập căn cứ địa và Chuẩn bị Tổng khởi nghĩa",
      image: "/xay-dung-can-cu.jpg",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Khu căn cứ địa được thành lập vào cuối năm 1943.</li>
          <li>
            Tổng bộ Việt Minh ra chỉ thị <i>“Sửa soạn khởi nghĩa”</i> (10/1944),
            nhận định cơ hội giải phóng dân tộc đã đến gần.
          </li>
          <li>Ngày 4/6/1945, Khu giải phóng Việt Bắc được thành lập.</li>
        </ul>
      ),
    },
  },
];

export default function HistoricalTimeline() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeModal = () => setSelectedIndex(null);
  const openModal = (i: number) => setSelectedIndex(i);

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < timeline.length - 1)
      setSelectedIndex(selectedIndex + 1);
  };

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0)
      setSelectedIndex(selectedIndex - 1);
  };

  const modalData =
    selectedIndex !== null ? timeline[selectedIndex].modal : null;

  return (
    <section
      id="chien-luoc"
      className="relative py-20 md:py-10 bg-[var(--color-beige-light)]/30 overflow-hidden"
    >
      {/* ✅ Hiệu ứng nền động */}
      <AnimatedHeroBackground
        showParticles
        colorStops={["#e45b5b", "#f59e0b", "#ef4444"]}
        className="opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[2.75rem] md:text-[3.5rem] font-serif font-bold color-red-rev mb-16 text-center"
        >
          II. Đẩy mạnh chuẩn bị lực lượng và Khởi nghĩa từng phần
        </motion.h2>

        <div className="relative border-l-2 border-[var(--color-brown-earth)]/20 pl-10 md:pl-16 space-y-16">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white" />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dot */}
              <div
                className="absolute -left-[59px] md:-left-[87px] top-0 
                            flex items-center justify-center 
                            w-10 h-10 md:w-12 md:h-12 
                            bg-[var(--color-red-rev)] rounded-full border-4 border-[var(--color-beige-light)]/80"
              >
                <CalendarDays size={20} className="text-white md:w-6 md:h-6 " />
              </div>

              {/* Card */}
              <div
                onClick={() => openModal(i)}
                className="p-5 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-[var(--color-brown-earth)]/10 
                           cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-[var(--color-brown-earth)]/30"
              >
                <span className="inline-block px-3 py-1 text-xs md:text-sm font-semibold text-[var(--color-brown-earth)] bg-[var(--color-brown-earth)]/10 rounded-full mb-3">
                  {item.year}
                </span>

                <h3 className="text-lg md:text-xl font-serif font-semibold text-[var(--color-red-rev)]">
                  {item.title}
                </h3>

                <p className="text-[var(--color-gray-text)] mt-2 text-sm md:text-base leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <TimelineModal
        isOpen={selectedIndex !== null}
        onClose={closeModal}
        data={modalData}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={selectedIndex}
        totalItems={timeline.length}
      />
    </section>
  );
}
