import Navbar from "@/components/navbar";
import Link from "next/link";

const verticals = [
  { cat: "Heat Insulation", items: ["Glasswool", "Rockwool", "Ceramic", "Bubble Foil", "XPS Foam", "Rubber", "Heat Paint"] },
  { cat: "Sound Insulation", items: ["Acoustic Felt Board", "Acoustic Foam", "Wood Wool Panels"] },
  { cat: "Roofing Systems", items: ["Polycarbonate Sheet", "Hollow Sheet", "FRP Roofing", "Antique Roofing"] },
  { cat: "Waterproofing", items: ["Bitumen Membrane", "Waterproofing Paint", "Silicone Glue"] },
  { cat: "Geosystem", items: ["Geotextile", "Geomembrane", "Geocell", "Geogrid", "Grass Pavers"] },
  { cat: "Subsurface Drainage", items: ["Drain Cell", "Drain Channel"] },
  { cat: "Agro-Envelopes", items: ["Greenhouse Film", "Weed Barrier", "Mulch Film", "PE Film"] },
  { cat: "Steel & Wiremesh", items: ["Security Fencing", "Agro-Mesh", "Decking"] },
  { cat: "Fans & HVAC", items: ["Decor Fans", "Giant HVLS Fans"] },
  { cat: "Technical Surfacing", items: ["WPC Flooring", "SPC Rigid", "Vinyl", "Acacia", "Garage"] },
  { cat: "Dry Construction", items: ["Cement Boards"] },
  { cat: "Protection Film", items: ["Window Films", "Paint Protection"] }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans antialiased transition-colors duration-300">
      
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        
        <div className="mb-20 border-b border-zinc-200 dark:border-white/10 pb-16">
          
          {/* Kinetic Terminal Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-red-600 transition-colors mb-8 uppercase tracking-widest"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z" fill="currentColor"></path></svg> Return
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Left 7 Columns: Massive Editorial Typography */}
            <div className="lg:col-span-7 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            Supply
            <span className="text-red-600"> Taxonomy</span>
          </h1>
            </div>

            {/* Right 5 Columns: Quoted Spec anchored to the H1 Baseline */}
            <div className="lg:col-span-5 space-y-6 lg:pb-1">
              <p className="text-base sm:text-md text-left md:text-right text-zinc-600 dark:text-zinc-400  border-r-4 border-red-600 pr-4 font-sans">
                Standardized import, supply, and integration logistics across 12 distinct commercial infrastructure verticals operating within the Kingdom of Cambodia.
              </p>
              
   
            </div>

          </div>
        </div>

        {/* The Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <div
              key={i}
              className="group p-8 bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-white/10 hover:border-red-500/50 transition-all duration-300 relative"
            >
              {/* Glowing Top Border Effect on Hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

              <div className="flex items-start justify-between mb-8">
                <h3 className="text-sm font-bold tracking-wide text-zinc-900 dark:text-white uppercase">
                  {v.cat}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {v.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-white/5 text-[10px] text-zinc-600 dark:text-zinc-300 rounded-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </main>

      <footer className="relative z-10 border-t border-zinc-200 dark:border-white/10 py-12 bg-zinc-50 dark:bg-zinc-950 text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-medium tracking-widest text-zinc-900 dark:text-white uppercase">
            SCC Group Cambodia
          </div>
          <div className="font-mono tracking-widest uppercase">
            © 2026 All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}