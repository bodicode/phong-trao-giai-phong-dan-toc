"use client";

import ChatBox from "@/components/chat";
import VietnamFooter from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HistoricalTimeline from "@/components/historical-timeline";
import ResistanceGallery from "@/components/resistance-gallery";
import ResistanceTimeline from "@/components/resistance-timeline";
import RevolutionNature1945 from "@/components/revolution-nature-1945";
import SectionContext from "@/components/section-context";
import UprisingSection1945 from "@/components/uprising-section-1945";

export default function Home() {
  return (
    <div className="min-h-screen bg-beige-light text-black-smoke">
      <Header />
      <Hero />
      <SectionContext />
      <HistoricalTimeline />
      <ResistanceTimeline />
      <ResistanceGallery />
      <UprisingSection1945 />
      <RevolutionNature1945 />
      <VietnamFooter />
      <ChatBox />
    </div>
  );
}
