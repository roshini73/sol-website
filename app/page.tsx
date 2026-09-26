import { ViewTransition } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BackgroundSlider from "@/components/BackgroundSlider";

export default function Home() {
  return (
    <ViewTransition name="page" enter="auto" exit="auto">
      <main className="relative min-h-screen">
        <BackgroundSlider />

        {/* Content */}
        <div className="relative min-h-screen">
          <Hero />
        </div>

        <Footer />
      </main>
    </ViewTransition>
  );
}
