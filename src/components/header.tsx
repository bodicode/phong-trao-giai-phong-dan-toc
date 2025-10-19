"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const mainNav = [
    { name: "Bối cảnh", href: "#boi-canh" },
    { name: "Chiến lược", href: "#chien-luoc" },
    { name: "Kháng Nhật", href: "#khang-nhat" },
    { name: "Khởi nghĩa", href: "#khoi-nghia" },
    { name: "Tính chất", href: "#tinh-chat" },
    { name: "Về dự án", href: "/ve-du-an" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 160) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-beige-light/90 backdrop-blur-sm border-b border-brown-earth/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={36}
            height={36}
            className="object-contain rounded-sm"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg sm:text-xl font-bold text-brown-earth">
              Giải Phóng
            </span>
            <span className="text-[10px] sm:text-[12px] tracking-wider text-gray-600 uppercase">
              Dân tộc & Lịch sử
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-black-smoke">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 ${
                activeSection === item.href.replace("#", "")
                  ? "text-red-rev font-semibold"
                  : "hover:text-red-rev"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 md:hidden hover:text-red-rev transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-beige-light border-t border-brown-earth/20 flex flex-col items-center py-4 space-y-3">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-[15px] font-medium transition-colors ${
                activeSection === item.href.replace("#", "")
                  ? "text-red-rev font-semibold"
                  : "text-black-smoke hover:text-red-rev"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
