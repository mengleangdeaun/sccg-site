"use client";

import { useState } from "react";
import Image from "next/image";

// Mock data updated for Employee/Team Activities
const galleryData = [
  {
    id: "01",
    url: "/gallery/IMG_2970.jpg",
    caption: "Chinese New Year",
    location: "Phnom Penh",
  },
  {
    id: "02",
    url: "/gallery/photo_2026-06-24_17-13-13.jpg",
    caption: "Staff Capacity Building",
    location: "Phnom Penh",
  },
  {
    id: "03",
    url: "/gallery/IMG_2959.jpg",
    caption: "Chinese New Year",
    location: "Phnom Penh",
  },
  {
    id: "04",
    url: "/gallery/IMG_2989.jpg",
    caption: "Chinese New Year",
    location: "Phnom Penh",
  },
  {
    id: "05",
    url: "/gallery/IMG_2971.jpg",
    caption: "Chinese New Year",
    location: "Phnom Penh",
  },
  {
    id: "06",
    url: "/gallery/IMG_2969.jpg",
    caption: "Chinese New Year",
    location: "Phnom Penh",
  },
];

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 border-t border-zinc-200 dark:border-white/10 w-full overflow-hidden">
      
      {/* 1. Constrained Header Aligned to Global Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-white uppercase">
              OUR <span className="text-red-600 dark:text-red-500" >Activity.</span>
            </h2>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono tracking-widest uppercase max-w-xs leading-relaxed md:text-right border-l-2 border-red-600 pl-4 md:border-l-0 md:border-r-2 md:pr-4 md:pl-0">
            Building resilience through continuous team evolution.
          </p>
        </div>
      </div>

{/* 2. Full Bleed Image Viewer (100vw) */}
      <div className="w-full border-y border-zinc-200 dark:border-white/10 select-none">
        
        <div className="relative h-[55vh] md:h-[70vh] w-full overflow-hidden group cursor-crosshair">
          
     
          {galleryData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10 pointer-events-none"
              }`}
            >
              <Image
                src={slide.url}
                alt={slide.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority={index === 0}
                className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          ))}

          <div 

            className="absolute top-0 left-0 h-full bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md border-r border-zinc-200 dark:border-white/10 z-10 pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-0"
            style={{ width: "max(0px, calc((100% - 80rem) / 2 + 1.5rem))" }}
          />


          <div 
            className="absolute top-0 right-0 h-full bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md border-l border-zinc-200 dark:border-white/10 z-10 pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-0"
           style={{ width: "max(0px, calc((100% - 80rem) / 2 + 1.5rem))" }}
          />

  
          <div className="absolute inset-0 z-20 pointer-events-none flex justify-center">
            <div className="w-full max-w-7xl relative h-full">
               <div 
                 className="absolute bottom-6 mr-6 bg-white dark:bg-zinc-900 px-4 py-2 border-none pointer-events-auto transition-transform duration-500 group-hover:-translate-y-1"
                 style={{ right: "max(1.5rem, calc((100% - 80rem) / 2 + 1.5rem))" }}
               >
                  <span className="text-[9px] font-mono font-bold tracking-widest text-red-600 dark:text-red-500 uppercase block">
                    {galleryData[currentIndex].location}
                  </span>
               </div>
            </div>
          </div>

        </div>

        {/* 3. Constrained Control Deck (Aligned to Global Grid) */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-6">
            
            {/* Dynamic Caption */}
            <div className="flex-1 min-w-0 w-full">
              <h3 className="text-sm md:text-base font-semibold tracking-tight text-zinc-900 dark:text-white truncate">
                {galleryData[currentIndex].caption}
              </h3>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-8 self-end sm:self-auto border-t sm:border-t-0 border-zinc-200 dark:border-white/10 pt-4 sm:pt-0 w-full sm:w-auto justify-between">
              
              {/* Pagination Readout */}
              <div className="text-[11px] font-mono tracking-widest text-zinc-400">
                [ 
                <span className="text-zinc-900 dark:text-white font-bold mx-2">
                  {(currentIndex + 1).toString().padStart(2, "0")}
                </span> 
                / {galleryData.length.toString().padStart(2, "0")} ]
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white dark:hover:border-red-600 transition-colors rounded-none"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 flex items-center justify-center bg-gray-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white dark:hover:border-red-600 transition-colors rounded-none"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}