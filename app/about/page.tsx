import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import CoreValuesBento from '@/components/corevalue';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-gray-50 font-sans selection:bg-red-500 selection:text-white antialiased transition-colors duration-300">

      {/* Engineering Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">

        {/* Page Header */}
        <div className="mb-8 pb-8">
          <Link
            href="/"
            className="inline-flex items-center px-3 py-2 gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition-colors mb-8 uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z" fill="currentColor"></path></svg> Return
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            The
            <span className="text-red-600"> Mandate.</span>
          </h1>
        </div>
        {/* Origin & Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-12 space-y-5 text-base sm:text-md text-zinc-600 dark:text-zinc-400">
            <p>
              SCC Group is found through collaboration between Cambodia & Singapore investors. The team want to contribute to the development of Cambodia through business activities that solve major problems in the country since 2007. Due to hot weather in Cambodia , the team decided to focus on controlling heat as key focus. Over the years , the company imported and distributes various products including heat protection window films, rockwool & glass wool , acoustic foam , heat protective paints , roofing sheeting etc. 

            </p>
            <p>
              The team is looking to expand further to be the leading company to offer value to customers through quality products and services. Our main product includes heat insulation ,constructions materials and other materials and services.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <p className="font-mono text-xl tracking-widest font-bold uppercase text-red-600 dark:text-red-500 mb-6">
          <span className="w-2 h-2 bg-red-600 inline-block mb-1"></span> Philosophy
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 border  mb-20">
          {/* Mission */}
          <div className="p-7 border-b md:border-b-0 md:border-r bg-white dark:bg-zinc-950">
            <div className="w-8 h-8 bg-red-50 dark:bg-red-950/40 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" className="text-red-600 dark:text-red-500">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <p className="text-base font-medium text-red-600 dark:text-red-400 mb-2">MISSION</p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              We offer high-quality products and services that solve core infrastructure problems for our customers.
            </p>
          </div>

          {/* Vision */}
          <div className="p-7 border-b md:border-b-0 md:border-r bg-white dark:bg-zinc-950">
            <div className="w-8 h-8 bg-red-50 dark:bg-red-950/40 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" className="text-red-600 dark:text-red-500">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <p className="text-base font-medium text-red-600 dark:text-red-400 mb-2">VISION</p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              To make permanent, compounding positive changes to the lives of the people where we operate our business.
            </p>
          </div>

          {/* Dream */}
          <div className="p-7 bg-white dark:bg-zinc-950">
            <div className="w-8 h-8 bg-red-50 dark:bg-red-950/40 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" className="text-red-600 dark:text-red-500">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/>
              </svg>
            </div>
            <p className="text-base font-medium text-red-600 dark:text-red-400 mb-2">THE DREAM</p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
             SCC Group will be a vibrant international company that combines people with great talents from different culture and expertise to make meaningful and valuable products, services that will improve the quality of life for our customers.
            </p>
          </div>
        </div>

        <p className="font-mono text-xl tracking-widest font-bold uppercase text-red-600 dark:text-red-500 mb-6">
          <span className="w-2 h-2 bg-red-600 inline-block mb-1"></span> Core Values
        </p> 


<CoreValuesBento />
      </main>

      <Footer />
    </div>
  );
}