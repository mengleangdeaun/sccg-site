import { cn } from "@/lib/utils";
import type { Category } from "../data/galleryData";

interface TabBarProps {
  categories: Category[];
  activeCategory: string;
  onSelect: (id: string) => void;
}

export default function TabBar({ categories, activeCategory, onSelect }: TabBarProps) {
  return (
    <div className="relative w-full">
      {/* Scrollable container */}
      <div
        className={cn(
          "flex items-center gap-2 sm:gap-3 overflow-x-auto",
          "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600",
          // Hide scrollbar on Firefox and IE/Edge (optional but keeps UI clean)
          "scrollbar-hide"
        )}
        style={{
          // For WebKit browsers: hide scrollbar while still scrollable
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={cn(
                "group relative flex items-center gap-2 rounded-none px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:py-3 sm:text-base",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 dark:focus-visible:ring-white/50",
                "whitespace-nowrap shrink-0",
                isActive
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 dark:bg-zinc-950 dark:text-gray-300  hover:text-gray-900 dark:hover:text-white"
              )}
            >
              <span>{cat.label}</span>

              <span
                className={cn(
                  "ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-none px-1.5 text-[10px] font-bold transition-colors",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                )}
              >
                {cat.items.length}
              </span>
            </button>
          );
        })}
      </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-white dark:from-zinc-950 to-transparent sm:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white dark:from-zinc-950 to-transparent sm:hidden" />
    </div>
    
  );
}