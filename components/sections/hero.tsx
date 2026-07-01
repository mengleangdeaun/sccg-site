import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-24 pb-0 overflow-hidden">

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Editorial & Call to Actions */}
        <div className="space-y-8 text-left max-w-2xl">
          
        <h1 className="text-5xl sm:text-6xl md:text-[4rem] font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.2]">
        Controlling <span className="text-red-600 dark:text-red-500">HEAT</span>.<br />
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
              href="/services"
              className="px-6 py-3.5 bg-red-600 text-white text-sm font-medium tracking-wide hover:bg-red-500 transition-colors border border-red-600 rounded-none flex items-center gap-2"
            >
              Explore Service <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/about"
              className="px-6 py-3.5 bg-white hover:bg-gray-100 hover:dark:bg-zinc-900 dark:bg-zinc-950 text-zinc-900 dark:text-white border text-sm font-medium tracking-wide transition-colors rounded-none"
            >
              View corporate mandate
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Cambodia Map Graphic */}
        <div className="relative hidden lg:flex justify-center items-center w-full">
          <div className="relative w-full max-w-[500px] rounded-none overflow-hidden flex items-center justify-center h-[500px]">
            
            {/* Map Image */}
            <Image 
              src="/Cambodia2.svg" 
              alt="Cambodia Map" 
              width={500}
              height={500}
              priority
              className="relative z-10 w-full h-full max-h-[420px] object-contain transition-all duration-700 hover:scale-[1.03] dark:opacity-90 dark:brightness-[1.1] filter"
            />
          </div>
        </div>

      </div>
    </section>
  );
}





