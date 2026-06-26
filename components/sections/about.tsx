import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 border-t border-zinc-200 dark:border-white/10 relative"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm px-4 py-2">
          <span className="text-[10px] font-mono font-medium tracking-widest text-zinc-600 dark:text-zinc-300 uppercase">
            Corporate Profile
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-tight">
          Engineering resilience into tropical environments.
        </h2>

        {/* Intro paragraph */}
        <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto text-lg">
          Established in 2007 through a strategic collaboration between Cambodian
          and Singaporean investors, SCC Group was founded with a singular
          mandate: to solve the most pressing environmental infrastructure
          challenges within the Kingdom.
        </p>

        {/* Three core points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-zinc-200 dark:border-white/10 text-left">
          {/* Mission */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400">
              Mission
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              We offer high-quality products and services that solve core
              infrastructure problems for our customers.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400">
              Vision
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              To make permanent, compounding positive changes to the lives of
              the people where we operate our business.
            </p>
          </div>

          {/* The Dream */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400">
              The Dream
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              A vibrant international enterprise combining exceptional talent
              across cultures — creating infrastructure that permanently
              elevates human quality of life.
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="pt-8">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-red-500 text-white text-xs font-bold uppercase tracking-widest transition-all hover:bg-red-600"
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