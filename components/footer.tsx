import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border-t border-zinc-200 dark:border-white/10 transition-colors duration-300 font-sans selection:bg-red-500 selection:text-white">
      
      {/* =========================================================
          1. COMPACT SLOGAN BAR (Side-by-Side on Desktop)
      ========================================================== */}
      <div className="border-b  border-zinc-200 dark:border-white/10 py-10 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-red-600/10 blur-[100px] pointer-events-none z-0"></div>

        <div className="max-w-7xl px-6 mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none text-zinc-900 dark:text-white">
              Keep Doing.{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 via-red-500 to-red-600">
                Keep Creating.
              </span>
            </h2>
          </div>
          
          <div className="md:max-w-xs text-[11px] font-mono font-light text-zinc-500 dark:text-zinc-400 border-l border-zinc-300 dark:border-zinc-800 pl-4 py-0.5 leading-normal">
            COMBINING SINGAPORE STRATEGY WITH CAMBODIAN INFRASTRUCTURE EXPERTISE.
          </div>
        </div>
      </div>

      {/* =========================================================
          2. COMPACT DATA GRID (Tighter spacing, text-xs)
      ========================================================== */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-light">
        
        {/* Col A: Headquarters */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-600 inline-block"></span>
            Headquarters
          </div>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            SCC Group Cambodia HQ<br />
            #80C Street 310, Toul Svay Prey II,<br />
            Phnom Penh, Kingdom of Cambodia
          </p>
          <div className="text-[10px] font-mono text-zinc-400">
            <a
              href="https://www.google.com/maps/search/?api=1&query=11.55556768380531,104.90690015252773"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
            >
              GEO: 11.55556768380531, 104.90690015252773
            </a>
          </div>
        </div>

        {/* Col B: Telecommunications */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-600 inline-block"></span>
            Contact Us
          </div>
          <div className="space-y-2 font-mono text-xs pt-0.5">
            <div className="flex justify-between border-b border-zinc-200 dark:border-white/5 pb-1.5">
              <span className="text-zinc-400">Phone Number:</span>
              <span className="text-zinc-900 dark:text-white font-medium">+855 (0) 89 222 027</span>
            </div>
            <div className="flex justify-between border-b border-zinc-200 dark:border-white/5 pb-1.5">
              <span className="text-zinc-400">Email:</span>
              <span className="text-red-600 dark:text-red-400 font-bold">sccg.cambodia@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Col C: Social Nodes */}
        <div className="space-y-3 flex flex-col items-start md:items-end md:text-right">
          <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-red-600 inline-block"></span>
            Our Socials
          </div>
          
          {/* Razor-Sharp 36px Squares (w-9 h-9) */}
          <div className="flex gap-1.5 pt-0.5 md:justify-end">
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white dark:hover:border-red-600 transition-all rounded-none"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a 
              href="https://telegram.org" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white dark:hover:border-red-600 transition-all rounded-none"
              aria-label="Telegram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-9 h-9 bg-zinc-200/60 dark:bg-zinc-900 border border-zinc-300 dark:border-white/10 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white dark:hover:border-red-600 transition-all rounded-none"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* =========================================================
          3. SLIM COPYRIGHT BAR
      ========================================================== */}
      <div className="border-t border-zinc-200 dark:border-white/10 py-4 px-6 bg-zinc-100 dark:bg-black text-[10px] font-mono text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 inline-block"></span>
            <span className="tracking-wider text-zinc-800 dark:text-zinc-300 font-semibold">SCC GROUP CAMBODIA</span>
            <span className="text-zinc-400 dark:text-zinc-600">• SINGAPORE COLLABORATION</span>
          </div>
          <div className="tracking-widest uppercase opacity-70">
            © {currentYear} ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>

    </footer>
  );
}