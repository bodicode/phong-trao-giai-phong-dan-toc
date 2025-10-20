"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "I. BỐI CẢNH LỊCH SỬ",
    desc: "Thế giới bước vào Thế chiến II. Pháp đầu hàng Đức, Nhật tràn vào Đông Dương — mở ra giai đoạn đen tối cho dân tộc.",
    image: "/hero1.jpg",
  },
  {
    id: 2,
    title: "II. ĐẨY MẠNH CHUẨN BỊ LỰC LƯỢNG VÀ KHỞI NGHĨA TỪNG PHẦN",
    desc: "Đảng chuyển trọng tâm sang nhiệm vụ giải phóng dân tộc, đặt quyền lợi Tổ quốc lên hàng đầu.",
    image: "/hero2.jpg",
  },
  {
    id: 3,
    title: "III. CAO TRÀO KHÁNG NHẬT CỨU NƯỚC",
    desc: "Bắc Sơn, Nam Kỳ, Đô Lương… những tiếng súng mở đường cho Cách mạng Tháng Tám.",
    image: "/hero3.jpg",
  },
  {
    id: 4,
    title: "IV. TỔNG KHỞI NGHĨA GIÀNH CHÍNH QUYỀN",
    desc: "Nhật đảo chính Pháp — cao trào kháng Nhật bùng nổ, căn cứ địa Việt Bắc được củng cố.",
    image: "/hero4.jpg",
  },
  {
    id: 5,
    title: "V. TÍNH CHẤT CỦA KHỞI NGHĨA THÁNG TÁM 1945",
    desc: "Toàn dân vùng dậy giành chính quyền. 2/9/1945: Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    image: "/hero5.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nextSlide = () => setIndex((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setIndex((p) => (p - 1 + slides.length) % slides.length);

  const current = slides[index];

  const particles = useMemo(() => {
    if (!isMounted) return [];
    const width = window.innerWidth;
    const height = window.innerHeight;

    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      initialX: Math.random() * width,
      initialY: Math.random() * height,
      animateX: [
        Math.random() * width,
        Math.random() * width,
        Math.random() * width,
      ],
      animateY: [
        Math.random() * height,
        Math.random() * height,
        Math.random() * height,
      ],
      duration: 15 + Math.random() * 10,
      delay: i * 0.2,
    }));
  }, [isMounted]);

  return (
    <section className="scroll-mt-20 sm:scroll-mt-24 relative flex flex-col md:flex-row items-center justify-between overflow-hidden min-h-screen bg-beige-light pt-16 sm:pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-red-rev/20 rounded-full"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                x: particle.animateX,
                y: particle.animateY,
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
      </div>

      {/* ==== Optimized background image transition ==== */}
      <div className="absolute inset-0 md:inset-y-0 md:left-0 md:w-3/5 lg:w-3/4 overflow-hidden">
        <AnimatePresence mode="popLayout">
          {slides.map((s, i) =>
            i === index ? (
              <motion.div
                key={s.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover brightness-95 object-center will-change-transform"
                  priority={i < 2}
                  quality={70}
                  unoptimized
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-beige-light/60 to-beige-light md:via-beige-light/70 md:to-beige-light/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-20 w-full px-6 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 md:py-0 text-center md:text-left md:ml-[40%] lg:ml-[50%]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="relative sm:mt-20 md:mt-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-color-red-rev leading-tight drop-shadow-sm">
              <motion.svg
                className="hidden md:block absolute -z-10 top-6/4 left-3/4 w-[400px] h-[350px] lg:w-[700px] lg:h-[600px] opacity-30"
                viewBox="0 0 600 600"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <defs>
                  <linearGradient
                    id="blobGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#e45b5b" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                  <filter id="gooey">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                      result="gooey"
                    />
                  </filter>
                </defs>

                <motion.path
                  d="M421.5,308Q392,366,325,377.5Q258,389,196,352Q134,315,137,247Q140,179,201,139Q262,99,322,128Q382,157,418.5,203.5Q455,250,421.5,308Z"
                  fill="url(#blobGradient)"
                  filter="url(#gooey)"
                  animate={{
                    d: [
                      "M421.5,308Q392,366,325,377.5Q258,389,196,352Q134,315,137,247Q140,179,201,139Q262,99,322,128Q382,157,418.5,203.5Q455,250,421.5,308Z",
                      "M408.5,295Q378,340,335,368Q292,396,238,377Q184,358,145,304Q106,250,134,189Q162,128,229,108Q296,88,352,121Q408,154,429,202Q450,250,408.5,295Z",
                      "M445,310Q398,370,339,395Q280,420,220,395Q160,370,125,310Q90,250,125,190Q160,130,220,105Q280,80,339,105Q398,130,445,190Q492,250,445,310Z",
                      "M421.5,308Q392,366,325,377.5Q258,389,196,352Q134,315,137,247Q140,179,201,139Q262,99,322,128Q382,157,418.5,203.5Q455,250,421.5,308Z",
                    ],
                  }}
                  transition={{
                    duration: 20,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                <motion.path
                  d="M400,290Q370,330,330,350Q290,370,245,350Q200,330,180,290Q160,250,180,210Q200,170,245,150Q290,130,330,150Q370,170,400,210Q430,250,400,290Z"
                  fill="#f59e0b"
                  opacity="0.4"
                  filter="url(#gooey)"
                  animate={{
                    d: [
                      "M400,290Q370,330,330,350Q290,370,245,350Q200,330,180,290Q160,250,180,210Q200,170,245,150Q290,130,330,150Q370,170,400,210Q430,250,400,290Z",
                      "M420,300Q380,350,330,370Q280,390,230,370Q180,350,160,300Q140,250,160,200Q180,150,230,130Q280,110,330,130Q380,150,420,200Q460,250,420,300Z",
                      "M390,280Q360,310,320,330Q280,350,235,330Q190,310,175,280Q160,250,175,220Q190,190,235,170Q280,150,320,170Q360,190,390,220Q420,250,390,280Z",
                      "M400,290Q370,330,330,350Q290,370,245,350Q200,330,180,290Q160,250,180,210Q200,170,245,150Q290,130,330,150Q370,170,400,210Q430,250,400,290Z",
                    ],
                    scale: [1, 1.1, 0.9, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 12,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.svg>

              {current.title}
              <span className="absolute -left-4 md:-left-6 top-4 md:top-6 -z-10 bg-red-rev/20 blur-2xl w-[120%] h-8 md:h-10 rounded-full"></span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-text max-w-xl leading-relaxed drop-shadow-sm">
              {current.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-28 right-6 sm:bottom-8 sm:right-20 md:bottom-10 md:right-28 flex flex-col items-center gap-2 md:gap-3 z-20">
        <button
          type="button"
          aria-label="Slide trước"
          onClick={prevSlide}
          className="bg-red-rev hover:bg-red-rev-hover text-white rounded-full p-1.5 md:p-2 transition-all shadow-md"
        >
          <ChevronUp className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
        </button>
        <button
          type="button"
          aria-label="Slide kế tiếp"
          onClick={nextSlide}
          className="bg-red-rev hover:bg-red-rev-hover text-white rounded-full p-1.5 md:p-2 transition-all shadow-md"
        >
          <ChevronDown className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" />
        </button>

        <div className="mt-2 md:mt-3 text-[10px] md:text-xs text-brown-earth/70 tracking-widest font-medium">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}
