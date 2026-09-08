export default function Footer() {
  return (
    <footer className="h-[120px] flex items-center justify-between px-16 text-white">
      <p className="text-sm font-semibold tracking-wide">@soltogether.inc</p>

      <div className="flex items-center gap-6">
        <a
          href="https://docs.google.com/document/d/1TNrv2vluXb0xm7YF717EyGv35WqxniWyS_p4AbIFor4/edit?tab=t.mof2nq2xrzq9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium tracking-wide hover:opacity-80 transition-opacity"
        >
          terms of service
        </a>
        <a
          href="https://docs.google.com/document/d/1TNrv2vluXb0xm7YF717EyGv35WqxniWyS_p4AbIFor4/edit?tab=t.0#heading=h.u0hevdlm5y66"
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
