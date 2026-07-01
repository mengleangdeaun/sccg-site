import { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import GalleryClient from "./GalleryClient"; 

// Export the metadata for the Gallery page
export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery of SCC Group. We build human capital through structured hiring, intensive onboarding, and performance-based promotion.",
  openGraph: {
    title: "Gallery | SCC Group",
    description: "Explore career opportunities across our departments. We build human capital through structured hiring and performance-based promotion.",
    url: "https://www.scc-group.asia/gallery",
  }
};

export default function GalleryPage() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-gray-50 font-sans selection:bg-red-500 selection:text-white antialiased transition-colors duration-300">
      
      {/* Engineering Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        <div className="mb-8 pb-8">
          <Link
            href="/"
            className="inline-flex items-center px-3 py-2 gap-2 text-sm font-bold text-red-500 hover:text-red-600 transition-colors mb-8 uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="currentColor" fill="none" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z" fill="currentColor"></path></svg> Return
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                Our
                <span className="text-red-600"> Activities.</span>
              </h1>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:pb-1">
              <p className="text-base sm:text-md text-left md:text-right text-zinc-600 dark:text-zinc-400 border-r-4 border-red-600 pr-4 font-sans">
                Explore our collection of photos and videos from our works, training sessions, team activities, corporate social responsibility, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Load the interactive client component */}
        <GalleryClient />

      </main>
      <Footer />
    </div>
  );
}