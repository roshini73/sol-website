import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-50 h-[120px] flex items-center justify-between text-white"
      style={{ paddingLeft: 60, paddingRight: 60 }}
    >
      <p className="text-sm font-semibold tracking-wide">@soltogether.inc</p>

      <div className="flex items-center gap-6">
        <Link
          href="/about"
          className="text-xs font-medium tracking-wide hover:opacity-80 transition-opacity"
        >
          about
        </Link>
        <a
          href="https://app.soltimetogether.com/legal/#terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium tracking-wide hover:opacity-80 transition-opacity"
        >
          terms of service
        </a>
        <a
          href="https://app.soltimetogether.com/legal/#privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium tracking-wide hover:opacity-80 transition-opacity"
        >
          privacy policy
        </a>
      </div>
    </footer>
  );
}
