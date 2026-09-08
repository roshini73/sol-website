export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[60vh] flex items-center justify-center px-8"
    >
      <div className="text-white text-center text-3xl md:text-4xl font-semibold tracking-wide">
        <p>questions? email →</p>
        <a
          href="mailto:help@soltimetogether.com"
          className="hover:opacity-80 transition-opacity"
        >
          help@soltimetogether.com
        </a>
      </div>
    </section>
  );
}
