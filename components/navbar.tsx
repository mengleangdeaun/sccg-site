"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <-- 1. Native Next.js Route Reader

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // e.g. returns "/services"

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }
      if (e.key.toLowerCase() === "d") {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/logo.png"
              alt="SCC Group Logo"
              width={120}
              height={120}
              priority
              className="w-24 h-24 object-contain"
            />
          </Link>

          {/* =========================================================
              DESKTOP NAV (Option 2 + Route Reader Engine)
          ========================================================== */}
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase font-bold tracking-wide">
            {navLinks.map((link) => {
              // Matches exact URL, or any sub-page inside that sector (e.g. /services/film)
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative inline-flex h-9 items-center px-1 font-bold transition-colors rounded-none ${
                    isActive
                      ? "text-zinc-900 dark:text-white"
                      : "text-gray-800 hover:text-zinc-900 dark:text-gray-200 dark:hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* The 0-Degree Red Floor Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-200 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Sharp 0-Degree Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 border-none bg-transparent flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white dark:hover:border-red-600 transition-all rounded-none cursor-pointer relative group ml-2"
            >
              <span className="absolute -bottom-8 right-0 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[9px] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Press &apos;D&apos;
              </span>
              <svg className="w-4 h-4 hidden dark:block fill-current" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 5.106a.75.75 0 001.06 1.06l1.59-1.591a.75.75 0 00-1.061-1.06l-1.59 1.591z" /></svg>
              <svg className="w-4 h-4 block dark:hidden fill-current" viewBox="0 0 24 24"><path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" /></svg>
            </button>
          </div>

          {/* Mobile Toggle Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-8 h-8 border-none bg-transparent flex items-center justify-center text-zinc-700 dark:text-zinc-300 rounded-none"
            >
              <svg className="w-4 h-4 hidden dark:block fill-current" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 5.106a.75.75 0 001.06 1.06l1.59-1.591a.75.75 0 00-1.061-1.06l-1.59 1.591z" /></svg>
              <svg className="w-4 h-4 block dark:hidden fill-current" viewBox="0 0 24 24"><path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" /></svg>
            </button>

            <button className="text-zinc-900 dark:text-white" aria-label="open-menu" onClick={toggleMenu}>
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current mb-1"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-white/10 z-[70] shadow-2xl flex flex-col p-8 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-bold tracking-tight text-zinc-900 dark:text-white text-sm uppercase">
            SCC Group
          </span>
          <button className="text-3xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" onClick={toggleMenu}>
            &times;
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-2xl tracking-tight">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center transition-colors ${
                  isActive 
                    ? "text-red-600 dark:text-red-500 font-normal pl-3 border-l-2 border-red-600" 
                    : "text-zinc-900 hover:text-red-600 dark:text-white dark:hover:text-red-500 font-light"
                }`}
                onClick={toggleMenu}
              >
                <span className="text-xs font-mono text-red-600 dark:text-red-500 mr-4 opacity-70">
                  0{index + 1}
                </span>
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-zinc-200 dark:border-white/10">
          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            System Status
          </p>
          <div className="mt-2 flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </aside>
    </>
  );
}