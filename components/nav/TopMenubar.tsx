"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import type { FC } from "react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#therapy", label: "Therapy" },
  { href: "#selfhelp", label: "Self help" },
  { href: "#community", label: "Community" },
];

const TopMenubar: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
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
  return (
    <header className="w-full py-4 bg-background dark:bg-background border-b border-gray-300 dark:border-primary backdrop-blur-md fixed top-0 z-50 shadow-sm">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/">
          <h1 className="text-primary text-2xl font-bold">DeepSoul</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-content dark:text-content hover:text-primary dark:hover:text-primary transition-colors"
            >
              {label}
            </Link>
          ))}
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
        </nav>
        <div
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Open menu"
          role="button"
          tabIndex={0}
        >
          <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-100"></span>
          <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-100"></span>
          <span className="block w-6 h-0.5 bg-gray-500 dark:bg-gray-100"></span>
        </div>
      </div>
    </header>
  );
};

export default TopMenubar;
