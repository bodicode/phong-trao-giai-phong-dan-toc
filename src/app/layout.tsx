import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  title: "Phong trào Giải phóng Dân tộc 1939–1945",
  description:
    "Trang thông tin tương tác về phong trào giải phóng dân tộc Việt Nam giai đoạn 1939–1945 — hành trình đấu tranh giành độc lập của dân tộc.",
  keywords: [
    "cách mạng tháng tám",
    "giải phóng dân tộc",
    "lịch sử Việt Nam",
    "Việt Minh",
    "Hồ Chí Minh",
    "1939-1945",
    "khởi nghĩa",
  ],
  authors: [{ name: "Giải Phóng Dân Tộc" }],
  openGraph: {
    title: "Phong trào Giải phóng Dân tộc 1939–1945",
    description:
      "Tìm hiểu hành trình lịch sử đấu tranh giành độc lập của dân tộc Việt Nam trong giai đoạn 1939–1945.",
    url: "https://giaiphongdantoc.vn",
    siteName: "Giải Phóng Dân Tộc",
    locale: "vi_VN",
    type: "website",
  },
};
/* 🧱 Root Layout */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${montserrat.variable} font-sans antialiased bg-beige-light text-black-smoke`}
      >
        {children}
      </body>
    </html>
  );
}
