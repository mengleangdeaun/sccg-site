"use client";

import { useState, useCallback } from "react";
import { categories } from "./data/galleryData";
import type { GalleryItem } from "./data/galleryData";
import TabBar from "./components/TabBar";
import BentoGrid from "./components/BentoGrid";
import MediaModal from "./components/MediaModal";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const items = currentCategory.items;

  const handleItemClick = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (!selectedItem) return;
    const idx = items.findIndex((i) => i.id === selectedItem.id);
    const prevIdx = idx <= 0 ? items.length - 1 : idx - 1;
    setSelectedItem(items[prevIdx]);
  }, [selectedItem, items]);

  const handleNext = useCallback(() => {
    if (!selectedItem) return;
    const idx = items.findIndex((i) => i.id === selectedItem.id);
    const nextIdx = idx >= items.length - 1 ? 0 : idx + 1;
    setSelectedItem(items[nextIdx]);
  }, [selectedItem, items]);

  const totalImages = items.filter((i) => i.type === "image").length;
  const totalVideos = items.filter((i) => i.type === "video").length;

  return (
    <div>
      <div className="relative">
        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center w-full">
          {/* Category info bar */}
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 sm:text-2xl">
                {currentCategory.label}
              </h2>
              <p className="text-xs text-gray-800 dark:text-gray-200">
                {totalImages} photos · {totalVideos} videos
              </p>
            </div>
          </div>
          {/* Tabbar on right */}
          <div className="flex items-center gap-2 text-xs text-gray-800 dark:text-gray-200 w-full min-w-0 lg:w-auto">
            <TabBar
              categories={categories}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
          </div>
        </div>

        <BentoGrid items={items} onItemClick={handleItemClick} />
      </div>
      
      <MediaModal
        item={selectedItem}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}