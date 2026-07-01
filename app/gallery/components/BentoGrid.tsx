import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "../data/galleryData";
import Image from "next/image";

interface BentoGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}

function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
        <svg className="ml-1 h-6 w-6 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}

function ImageIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21,15 16,10 5,21" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23,7 16,12 23,17" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

export default function BentoGrid({ items, onItemClick }: BentoGridProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  useEffect(() => {
    setVisibleItems([]);
    const ids = items.map((item) => item.id);
    ids.forEach((id, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, id]);
      }, index * 80);
    });
  }, [items]);

  const getSizeClasses = (size: GalleryItem["size"]) => {
    switch (size) {
      case "lg":
        return "col-span-2 row-span-2";
      case "md":
        return "col-span-2 row-span-1";
      case "tall":
        return "col-span-1 row-span-2";
      case "sm":
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[220px]">
      {items.map((item) => {
        const isVisible = visibleItems.includes(item.id);
        return (
          <div
            key={item.id}
            onClick={() => onItemClick(item)}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-none bg-slate-800 transition-all duration-300",
              getSizeClasses(item.size),
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-8 opacity-0 scale-95"
            )}
          >
            {/* Image */}
            <Image
              src={item.thumbnail}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              width={1920}
              height={1080}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

            {/* Play button for videos */}
            {item.type === "video" && <PlayIcon />}

            {/* Bottom info */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-3 sm:p-4">
              <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                {/* Type badge */}
                <div className="mb-2 flex items-center gap-1.5">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 rounded-none px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm",
                      item.type === "video" ? "bg-red-500/70" : "bg-white/20"
                    )}
                  >
                    {item.type === "video" ? <VideoIcon /> : <ImageIcon />}
                    {item.type}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-gray-100 dark:text-white sm:text-base line-clamp-1">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[11px] text-gray-200 dark:text-gray-300 sm:text-xs line-clamp-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Hover border glow */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 rounded-none border-2 border-transparent transition-all duration-300 group-hover:border-white/30"
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
