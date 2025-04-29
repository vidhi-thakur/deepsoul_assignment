"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import type { FC } from "react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#therapy", label: "Therapy" },
  { href: "#selfhelp", label: "Self help" },
];

const TopMenubar: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleToggle = (): void => {
    setIsDarkMode((val) => !val);
  };

  const toggleMenu = (): void => {
    setMenuVisible((val) => !val);
  };

  return (
    <>
      <header className="w-full py-4 bg-background dark:bg-background border-b border-gray-300 dark:border-primary/50 backdrop-blur-md fixed top-0 z-10 shadow-sm">
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="/">
            <h1 className="text-primary text-lg md:text-2xl font-bold">
              DeepSoul
            </h1>
          </Link>

          <div className="flex items-center justify-between gap-6">
            <button
              onClick={handleToggle}
              aria-label="Toggle Dark Mode"
              className="rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 cursor-pointer dark:hover:bg-primary hover:bg-gray-300"
            >
              {isDarkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-400" />
              ) : (
                <MoonIcon className="h-6 w-6 text-content" />
              )}
            </button>

            {/* Desktop nav */}
            <nav className="md:flex items-center gap-6 hidden">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-content dark:text-content hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu toggle */}
            <div
              className="md:hidden flex flex-col gap-1.5 cursor-pointer"
              aria-label="Open menu"
              role="button"
              tabIndex={0}
              onClick={toggleMenu}
            >
              <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-100"></span>
              <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-100"></span>
              <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-100"></span>
            </div>
          </div>
        </div>
      </header>

      {/* mobile nav */}
      {isMenuVisible && (
        <div className="fixed top-[64px] right-0 z-20 w-full">
          <div
            className={`bg-background dark:bg-background border-y border-gray-200 dark:border-primary/50 shadow-lg p-6 mt-2 transform transition-all duration-200 ease-out ${
              isMenuVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuVisible(false)}
                  className="text-content dark:text-content hover:text-primary dark:hover:text-primary text-base transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default TopMenubar;
