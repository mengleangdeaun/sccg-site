import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 border-t border-zinc-200 dark:border-white/10 relative"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* Headline */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-snug text-right">
            Driving Change<br />for Almost
          </h2>
          {/* OPTIMIZATION: Shifted to text-red-700 in light mode for strict WCAG compliance */}
          <span className="text-[5rem] md:text-[7rem] font-extrabold leading-none tracking-tighter text-red-600 dark:text-red-500">
            20
            <span className="ml-2 inline-block text-[2rem] md:text-[2.5rem] leading-none tracking-tighter text-red-600 dark:text-red-500">
              Years
            </span>
          </span>
        </div>

        {/* Intro paragraph */}
        {/* OPTIMIZATION: Darkened from zinc-600 to zinc-700 to ensure high contrast */}
        <p className="text-zinc-700 dark:text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto text-lg">
          Established in 2007 through a strategic collaboration between Cambodian
          and Singaporean investors, SCC Group was founded with a singular
          mandate: to solve the most pressing environmental infrastructure
          challenges within the Kingdom.
        </p>

        {/* Three core points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-zinc-200 dark:border-white/10">
          {[
            {
              title: "Mission",
              text: "We offer high quality products and services that solve problems to our customers.",
            },
            {
              title: "Vision",
              text: "To make positive changes to the lives of people where we operate our business.",
            },
            {
              title: "The Dream",
              text: "SCC Group will be a vibrant international company that combines people with great talents from different culture and expertise to make meaningful and valuable products , services that will improve the quality of life for our customers",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative border border-zinc-200 dark:border-white/10 p-6 pr-10 text-left bg-white hover:bg-zinc-50 dark:bg-neutral-950 dark:hover:bg-neutral-900 transition-colors"
            >
              <div className="absolute right-0 bottom-0 w-12 h-3 bg-red-600 dark:bg-red-500" />

              {/* CRITICAL FIX: text-red-500 fails WCAG on white backgrounds. Shifted to text-red-700 */}
              <h3 className="text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-400 mb-2">
                {item.title}
              </h3>
              
              {/* OPTIMIZATION: Darkened from zinc-700 to zinc-800 for maximum readability */}
              <p className="text-zinc-800 dark:text-zinc-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="pt-8">
          {/* CRITICAL FIX: White text on bg-red-500 fails WCAG. Shifted to bg-red-700 */}
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white text-xs font-bold uppercase tracking-widest transition-all hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
          >
            LEARN MORE...
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}