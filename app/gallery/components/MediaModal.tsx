import { useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "../data/galleryData";
import Image from 'next/image';

interface MediaModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function MediaModal({ item, onClose, onPrev, onNext }: MediaModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-fade-in" />

      {/* Content Wrapper - w-fit hugs the content, negative positions push buttons outside */}
      <div
        className="relative z-10 flex max-h-[85vh] w-fit max-w-[calc(100vw-6rem)] md:max-w-4xl flex-col items-center animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close button (Just above the top right corner) */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:h-10 sm:w-10"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Previous button (Just outside the left edge) */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute top-1/2 -left-12 sm:-left-16 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:h-12 sm:w-12"
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>
        
        {/* Next button (Just outside the right edge) */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute top-1/2 -right-12 sm:-right-16 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:h-12 sm:w-12"
        >
          <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>

        {/* Media Content */}
        {item.type === "video" ? (
          <video
            key={item.id}
            src={item.src}
            controls
            autoPlay
            className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            width={1920}
            height={1080}
            className="max-h-[70vh] w-auto max-w-full rounded-none object-contain shadow-2xl"
          />
        )}

        {/* Info bar */}
        <div className="mt-4 w-full max-w-2xl text-center px-4">
          <div className="flex items-center justify-center gap-2">
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white",
                item.type === "video" ? "bg-red-500/60" : "bg-white/15"
              )}
            >
               {item.type}
            </span>
          </div>
          <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">
            {item.title}
          </h2>
          <p className="mt-1 text-sm text-white/50">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}