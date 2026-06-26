const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    name: "Integrity",
    desc: "We do what we say. No gap between our words and actions.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M12 3v18M3 9l9-6 9 6M5 20h14M5 9l-2 7h4L5 9zM19 9l-2 7h4L19 9z" />
      </svg>
    ),
    name: "Fairness",
    desc: "Every stakeholder is treated with equal respect and impartiality.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    name: "Ethic",
    desc: "Moral clarity guides every decision we make.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    name: "Accountability",
    desc: "We own our outcomes — successes and failures alike. The foundation of trust inside and outside our organization.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    name: "Responsibility",
    desc: "We take ownership of our impact on every community we touch.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
    name: "Transparency",
    desc: "Open communication with every partner, client, and community we serve.",
  },
];

const COLS = 3;

function CornerDot({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const pos = {
    tl: "-top-px -left-px",
    tr: "-top-px -right-px",
    bl: "-bottom-px -left-px",
    br: "-bottom-px -right-px",
  }[position];
  return <span className={`absolute w-2 h-2 bg-red-600 dark:bg-red-500 z-10 ${pos}`} />;
}

export default function CoreValuesBento() {
  return (
    /**
     * Border strategy:
     * - `outline` on wrapper = outer frame (lives outside box model, never collides with children)
     * - Every cell draws `border-top` + `border-left`
     * - Strip first-row top (nth-child 1-3) and first-col left (nth-child 3n+1)
     * - Footer is unaffected by any of those selectors
     */
    <div
      className="relative grid grid-cols-1 md:grid-cols-3 outline-1 outline-zinc-200 dark:outline-white/10"
    >
      <CornerDot position="tl" />
      <CornerDot position="tr" />
      <CornerDot position="bl" />
      <CornerDot position="br" />

      {values.map((v, i) => {
        const col = i % COLS;
        const isFirstRow = i < COLS;
        const isFirstCol = col === 0;
        const isAlt = i % 2 !== 0;

        return (
          <div
            key={v.name}
            className={[
              "p-7",
              isAlt ? "bg-gray-100 dark:bg-zinc-900" : "bg-white dark:bg-zinc-950",
              // top+left on all; suppress where outline already provides the edge
              !isFirstRow ? "border-t border-zinc-200 dark:border-white/10" : "",
              !isFirstCol ? "md:border-l border-zinc-200 dark:border-white/10" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span className="text-red-600 dark:text-red-400 mb-3 block">{v.icon}</span>
            <p className="text-xs font-semibold tracking-widest uppercase text-red-600 dark:text-red-400 mb-2">
              {v.name}
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {v.desc}
            </p>
          </div>
        );
      })}

      {/* Footer */}
      <div className="md:col-span-3 border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/40 p-7 flex items-center justify-center">
        <p className="text-sm bg-linear-to-r font-bold from-rose-500 via-red-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-widest">
          We believe we are gifted with great talents to make this place a better world!
        </p>
      </div>
    </div>
  );
}