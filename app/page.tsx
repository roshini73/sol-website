import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import DownloadButton from "@/components/DownloadButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Content */}
      <div className="relative flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 overflow-y-auto scroll-container">
          <Hero />
          <About />
          <Contact />

          {/* Download button */}
          <div className="flex justify-center py-12">
            <DownloadButton />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
