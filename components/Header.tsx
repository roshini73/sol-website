"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        // Always show at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide
        setIsVisible(false);
      } else {
        // Scrolling up - show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed left-0 right-0 z-50 px-16 transition-all duration-300"
      style={{
        top: isVisible ? 48 : -100,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <nav className="flex justify-center">
        <ul className="flex items-center justify-between max-w-[400px] w-full text-white text-xs font-semibold tracking-wide">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:opacity-80 transition-opacity"
            >
              home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:opacity-80 transition-opacity"
            >
              about
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:opacity-80 transition-opacity"
            >
              contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
