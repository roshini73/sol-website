"use client";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-16 px-16">
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
