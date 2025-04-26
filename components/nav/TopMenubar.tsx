import Link from "next/link";
import type { FC } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#therapy", label: "Therapy" },
  { href: "#selfhelp", label: "Self help" },
  { href: "#community", label: "Community" },
];

const TopMenubar: FC = () => {
  return (
    <div className="w-full py-4 bg-background dark:bg-background border-b border-gray-300 backdrop-blur-md fixed top-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <h1 className="text-primary font-bold text-lg">DeepSoul</h1>
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
    </div>
  );
};

export default TopMenubar;
