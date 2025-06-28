import Spline from "@splinetool/react-spline/next";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import HowItWorks from "@/components/HowItWorks";
import Recommended from "@/components/Recommended";
import WhatAreWe from "@/components/Scalable";
import ServicesSection from "@/components/WhatWeProvide";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      {/* Hero Section with Spline */}
      <section className="relative w-full min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Spline
            scene="https://prod.spline.design/hrSFBrjnLVa-AGek/scene.splinecode"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center w-full space-y-10 pt-32 pb-8">
          <Button className="btn-text-medium border-2 border-neutral-700 rounded-2xl bg-neutral-900">
            <Zap /> Extend your LLM capabilities with Aximo
          </Button>

          <h1 className="text-display-medium flex flex-col text-center">
            <span> Revolutionizing MCP With</span>
            <span>QEDA Architecture</span>
          </h1>

          <Button className="bg-white text-black btn-text-large border border-neutral-400">
            Launch Dapp
          </Button>

          <div className="relative z-20">
            <HeroVideoDialog
              className="block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </section>
      {/* Rest of the page content */}
      <WhatAreWe />
      <HowItWorks />
      <Recommended />
      <ServicesSection />
    </main>
  );
}
