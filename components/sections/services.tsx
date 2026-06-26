import Link from "next/link";

const verticals = [
  "Heat Insulation", "Sound Insulation", "Roofing Systems", 
  "Waterproofing", "Geosystem Infrastructure", "Subsurface Drainage", 
  "Agricultural Envelopes", "Steel & Wiremesh", "Thermodynamic Fans", 
  "Technical Surfacing", "Dry Construction", "Protection Film"
];

export default function ServicesSection() {
  const tickerItems = [...verticals, ...verticals];

  return (
    <section id="services" className="pt-6 pb-24 relative">
      
      {/* Top Border with Red Intersect Nodes */}
      <div className="relative border-t border-zinc-200 dark:border-white/10 w-full flex">
        <div className="absolute -top-1 left-0 w-2 h-2 bg-red-600"></div>
        <div className="absolute -top-1 right-0 w-2 h-2 bg-red-600"></div>
      </div>

      <div className="flex flex-col md:flex-row border-b border-zinc-200 dark:border-white/10 relative">
        
        {/* Left Fixed Block (Mimicking "POWERING IDEAS...") */}
        <div className="md:w-[320px] shrink-0 border-r border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/20 p-8 flex flex-col justify-center relative z-10">
        
          <Link href="/services" className="group block">
            <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">
              Supply Taxonomy
            </span>
            <span className="text-sm font-semibold tracking-wide text-zinc-900 dark:text-white uppercase group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors flex items-center justify-between">
              View All 12 Sectors
              <span className="font-mono transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          </Link>
        </div>

        {/* Right Scrolling Marquee Track */}
        <div className="flex-1 overflow-hidden bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm flex items-center relative">
          
          {/* Gradient masks to fade the edges of the scrolling track */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max animate-marquee">
            {tickerItems.map((item, i) => (
              <div 
                key={i} 
                className="w-64 flex-shrink-0 border-r border-zinc-200 dark:border-white/10 py-8 px-6 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors cursor-default"
              >
                <span className="text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-200 uppercase text-center">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Border Red Intersect Node */}
      <div className="relative w-full">
         <div className="absolute -top-1 left-[320px] w-2 h-2 bg-red-600 hidden md:block"></div>
      </div>
      
    </section>
  );
}