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

export default function CoreValuesBento() {
  return (
    <div className="border overflow-hidden">
      {/* Grid container with gap-px for clean divider lines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 dark:bg-white/10">
        {values.map((v) => (
          <div
            key={v.name}
            className="p-6 bg-white dark:bg-zinc-950 flex flex-col justify-between"
          >
            <div>
              <span className="text-red-600 dark:text-red-400 mb-3 block">
                {v.icon}
              </span>
              <p className="text-xs font-semibold tracking-widest uppercase text-red-600 dark:text-red-400 mb-2">
                {v.name}
              </p>
              <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {v.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Element */}
      <div className="border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/40 p-6 flex items-center justify-center">
        <p className="text-sm font-bold bg-linear-to-r from-rose-500 via-red-500 to-orange-500 bg-clip-text text-transparent uppercase text-center">
          We believe we are gifted with great talents to make this place a better world!
        </p>
      </div>
    </div>
  );
}
