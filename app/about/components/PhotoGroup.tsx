"use client";
import { useState, useEffect, useRef, useMemo } from "react";

// ─── Pixel font: each letter is 5 columns × 7 rows ───────────────
const LETTERS: Record<string, number[][]> = {
  S: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  C: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  G: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  R: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  O: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  U: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  P: [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
  ],
};

const LETTER_W = 5;
const LETTER_H = 7;
const LETTER_GAP = 1;
const LINE_GAP = 2;

// ─── Mosaic images (small crop thumbnails) ───────────────────────
const MOSAIC_IMAGES = [
  "/gallery/csr/photo_2026-07-01_11-37-25.jpg",
  "/gallery/others/photo_2026-07-01_12-16-19.jpg",
  "/gallery/training/photo_2026-06-04_17-36-51.jpg",
  "/gallery/training/photo_2026-05-06_17-45-06.jpg",
  "/gallery/others/photo_2026-07-01_11-28-20.jpg",
  "/gallery/others/photo_2026-07-01_11-20-53.jpg",
  "/gallery/others/photo_2026-07-01_12-16-37.jpg",
  "/gallery/csr/photo_2026-07-01_11-35-17.jpg",
  "/gallery/csr/photo_2024-02-14_10-37-50.jpg",
  "/gallery/training/photo_2026-05-06_17-45-06.jpg",
  "/gallery/training/photo_2026-07-01_13-54-08.jpg",
  "/gallery/training/photo_2026-06-04_17-36-51 (2).jpg",
  "/gallery/training/photo_2026-07-01_12-27-38 (2).jpg",
  "/gallery/training/photo_2026-07-01_12-27-38.jpg",
  "/gallery/training/photo_2026-05-06_17-45-06 (2).jpg",
  "/gallery/csr/photo_2025-10-18_13-58-22.jpg",
  "/gallery/csr/photo_2026-07-01_11-35-17.jpg",
  "/gallery/csr/photo_2025-12-22_15-34-26.jpg",
  "/gallery/csr/photo_2026-07-01_11-24-04.jpg",
  "/gallery/csr/photo_2026-07-01_11-23-21.jpg",
  "/gallery/others/photo_2026-07-01_12-16-19.jpg",
  "/gallery/others/photo_2026-07-01_12-16-32.jpg",
  "/gallery/others/photo_2026-07-01_11-28-20.jpg",
  "/gallery/others/photo_2026-07-01_11-20-53.jpg",
  "/gallery/others/photo_2026-07-01_12-16-48.jpg",
  "/gallery/others/photo_2026-07-01_12-16-37.jpg",
  "/gallery/training/photo_2026-06-04_17-36-51.jpg",
  "/gallery/tbd/photo_2022-12-18_17-14-01.jpg",
  "/gallery/tbd/photo_2024-04-11_17-27-02.jpg",
  "/gallery/tbd/photo_2021-10-23_14-14-03.jpg",
  "/gallery/tbd/photo_2023-12-24_11-41-36.jpg",
];

// Fallback colors for cells while images load
const FALLBACK_COLORS = [
  "#6d28d9", "#7c3aed", "#8b5cf6", "#FF0000",
  "#4f46e5", "#6366f1", "#818cf8", "#3b82f6",
  "#0ea5e9", "#06b6d4", "#14b8a6", "#10b981",
  "#f59e0b", "#f97316", "#ef4444", "#ec4899",
];

// ─── Build 2-line pixel grid: "SCC" on top, "GROUP" below ────────
function buildGrid(line1: string, line2: string) {
  const getLetters = (word: string) =>
    word.split("").map((ch) => LETTERS[ch.toUpperCase()]);

  const getLineWidth = (letters: number[][][]) =>
    letters.length * LETTER_W + (letters.length - 1) * LETTER_GAP;

  const l1 = getLetters(line1);
  const l2 = getLetters(line2);
  const w1 = getLineWidth(l1);
  const w2 = getLineWidth(l2);
  const totalW = Math.max(w1, w2);
  const totalH = LETTER_H + LINE_GAP + LETTER_H;

  const grid: boolean[][] = Array.from({ length: totalH }, () =>
    Array(totalW).fill(false)
  );

  const writeLine = (
    letters: number[][][],
    lineWidth: number,
    rowOffset: number
  ) => {
    let col = Math.floor((totalW - lineWidth) / 2);
    for (let li = 0; li < letters.length; li++) {
      const letter = letters[li];
      for (let r = 0; r < LETTER_H; r++) {
        for (let c = 0; c < LETTER_W; c++) {
          if (letter[r][c]) {
            grid[rowOffset + r][col + c] = true;
          }
        }
      }
      col += LETTER_W + LETTER_GAP;
    }
  };

  writeLine(l1, w1, 0);
  writeLine(l2, w2, LETTER_H + LINE_GAP);

  return { grid, totalW, totalH };
}

// ─── Component ───────────────────────────────────────────────────
export default function PhotoGroup() {
  const [isVisible, setIsVisible] = useState(false);
  const [revealedCells, setRevealedCells] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const { grid, totalW, totalH } = useMemo(
    () => buildGrid("SCC", "GROUP"),
    []
  );

  // Build a lookup map of active cells → image index
  const { activeCells, cellImageMap } = useMemo(() => {
    const cells: { row: number; col: number; imgIdx: number }[] = [];
    const map = new Map<string, number>();
    let imgCounter = 0;
    for (let r = 0; r < totalH; r++) {
      for (let c = 0; c < totalW; c++) {
        if (grid[r][c]) {
          const idx = imgCounter % MOSAIC_IMAGES.length;
          cells.push({ row: r, col: c, imgIdx: idx });
          map.set(`${r}-${c}`, idx);
          imgCounter++;
        }
      }
    }
    return { activeCells: cells, cellImageMap: map };
  }, [grid, totalH, totalW]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Staggered reveal: radial from center
  useEffect(() => {
    if (!isVisible) return;
    const centerR = totalH / 2;
    const centerC = totalW / 2;
    const sorted = [...activeCells].sort((a, b) => {
      const distA = Math.sqrt((a.row - centerR) ** 2 + (a.col - centerC) ** 2);
      const distB = Math.sqrt((b.row - centerR) ** 2 + (b.col - centerC) ** 2);
      return distA - distB;
    });

    sorted.forEach((cell, i) => {
      setTimeout(() => {
        setRevealedCells((prev) => {
          const next = new Set(prev);
          next.add(`${cell.row}-${cell.col}`);
          return next;
        });
      }, i * 15);
    });
  }, [isVisible, activeCells, totalH, totalW]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24"
    >

      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-red-500/15 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-orange-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-500/15 blur-[100px]" />


      {/* Section header */}
      <div className="relative mb-8 text-center sm:mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-3xl lg:text-4xl">
          Built from{" "}
          <span className="bg-linear-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent">
            Every Moment
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-800 dark:text-white/35 sm:text-base">
          Each tile is a real photo from our journey <br/> together they form who we
          are.
        </p>
      </div>

      {/* Mosaic grid — constrained to max-w-4xl, centered */}
      <div className="relative mx-auto flex justify-center px-3.5 sm:px-6">
        <div
          className="mosaic-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${totalW}, 10px)`,
            gridTemplateRows: `repeat(${totalH}, 10px)`,
            gap: "2px",
          }}
        >
          {Array.from({ length: totalH }).map((_, row) =>
            Array.from({ length: totalW }).map((_, col) => {
              const isOn = grid[row][col];
              const cellKey = `${row}-${col}`;
              const isRevealed = revealedCells.has(cellKey);

              if (!isOn) {
                return <div key={cellKey} />;
              }

              const imgIdx = cellImageMap.get(cellKey) ?? 0;
              const imgUrl = MOSAIC_IMAGES[imgIdx];
              const fallbackColor =
                FALLBACK_COLORS[imgIdx % FALLBACK_COLORS.length];

              return (
                <div
                  key={cellKey}
                  className="group relative overflow-hidden rounded-none"
                  style={{
                    backgroundColor: fallbackColor,
                    opacity: isRevealed ? 1 : 0,
                    transform: isRevealed ? "scale(1)" : "scale(0.4)",
                    transition:
                      "opacity 0.4s ease-out, transform 0.4s ease-out",
                  }}
                >
                  <img
                    src={imgUrl}
                    alt=""
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-[2px] sm:rounded-[3px] lg:rounded-[4px]" />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Responsive cell sizes: 16px → 28px → 36px */}
      <style>{`
        @media (min-width: 640px) {
          .mosaic-grid {
            grid-template-columns: repeat(${totalW}, 20px) !important;
            grid-template-rows: repeat(${totalH}, 20px) !important;
            gap: 2px !important;
          }
        }
        @media (min-width: 1024px) {
          .mosaic-grid {
            grid-template-columns: repeat(${totalW}, 28px) !important;
            grid-template-rows: repeat(${totalH}, 28px) !important;
            gap: 3px !important;
          }
        }
      `}</style>
    </section>
  );
}
