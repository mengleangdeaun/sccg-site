import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import Footer from "@/components/footer";
import GallerySection from "@/components/sections/gallery";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-gray-50 font-sans selection:bg-red-500 selection:text-white antialiased transition-colors duration-300">
      
      {/* Laravel-Style Engineering Grid Background */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

      <Navbar />
      
{/* 1. Un-constrain main, but force overflow-x-hidden to stop horizontal scrollbars */}
      <main className="relative z-10 w-full overflow-x-hidden">
        
        {/* Boxed Hero */}
        <div className="max-w-7xl mx-auto px-6">
          <HeroSection />
        </div>

        {/* 100% Edge-to-Edge Marquee */}
        <ServicesSection />

        {/* Boxed About */}
        <div className="max-w-7xl mx-auto px-6">
         
          <AboutSection />
        </div>
         {/* <GallerySection /> */}

      </main>

      <Footer/>
    </div>
  );
}