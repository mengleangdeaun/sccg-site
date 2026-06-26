import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-24 pb-0 overflow-hidden">

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Editorial & Call to Actions */}
        <div className="space-y-8 text-left max-w-2xl">
          
        <h1 className="text-5xl sm:text-6xl md:text-[4rem] font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.2]">
        Controlling <span className="text-red-600 dark:text-red-500">heat</span>.<br />
        Empowering{" "}
        <span className="text-red-600 dark:text-red-500 ">
            CAMBODIA
        </span>.
        </h1>

          <p className="text-lg md:text-xl font-light text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
We offer high-quality, scientifically verified materials and integration services designed to decisively solve physical environmental problems for our customers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#services"
              className="px-6 py-3.5 bg-red-600 text-white text-sm font-medium tracking-wide hover:bg-red-500 transition-colors border border-red-600 rounded-none shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center gap-2"
            >
              Explore Portfolios <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="#about"
              className="px-6 py-3.5 bg-transparent text-zinc-900 dark:text-white text-sm font-medium tracking-wide border border-zinc-200 dark:border-white/20 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors rounded-none"
            >
              View corporate mandate
            </Link>
          </div>
        </div>

{/* RIGHT COLUMN: The "Infrastructure Stack" Graphic (Clean v4 Classes) */}
        <div className="relative hidden lg:flex justify-center items-center h-[500px] w-full perspective-2000">
          
          <div className="relative w-full max-w-[400px] h-full transform-3d rotate-iso transition-transform duration-700 hover:rotate-iso-hover">
            
            {/* Top Layer: Surface Armor */}
            <div className="absolute top-[10%] left-0 w-full h-[120px] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transform translate-y-0 tz-60 flex items-center px-8 transition-transform duration-500 hover:tz-80">
              <div className="flex items-center gap-4 w-full">
                <div className="w-10 h-10 bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-600 font-mono text-xs">01</div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-zinc-900 dark:text-white">Surface Armor</div>
                  <div className="text-[10px] text-zinc-500">Glaze & Window Films</div>
                </div>
              </div>
            </div>

            {/* Middle Layer: The Core (Red Accent) */}
            <div className="absolute top-[35%] left-0 w-full h-[140px] bg-red-600 border border-red-500 shadow-[0_20px_50px_rgba(220,38,38,0.2)] transform translate-y-0 tz-20 flex items-center justify-center transition-transform duration-500 hover:tz-40">
              <div className="text-white text-3xl font-bold tracking-tighter">
                Thermal Core
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
            </div>

            {/* Bottom Layer: Acoustic & Base */}
            <div className="absolute top-[65%] left-0 w-full h-[120px] bg-zinc-100/90 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200 dark:border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.05)] transform translate-y-0 tz-neg-20 flex items-center px-8 transition-transform duration-500 hover:tz-0">
               <div className="flex items-center justify-between w-full">
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase text-zinc-900 dark:text-white">Acoustic Base</div>
                    <div className="text-[10px] text-zinc-500">Rockwool & Insulation</div>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-6 h-6 border border-zinc-300 dark:border-zinc-700"></div>
                     <div className="w-6 h-6 border border-zinc-300 dark:border-zinc-700"></div>
                  </div>
              </div>
            </div>

            {/* Connecting Lines */}
            <div className="absolute top-[40%] -left-16 w-16 h-px bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="absolute top-[40%] -left-16 w-px h-[200px] bg-zinc-300 dark:bg-zinc-700"></div>
            <div className="absolute bottom-[20%] -left-16 w-8 h-px bg-zinc-300 dark:bg-zinc-700"></div>
            
          </div>
        </div>

      </div>
    </section>
  );
}





