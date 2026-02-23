"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/for-students", label: "For Students" },
  { href: "/for-guides", label: "For Guides" },
  { href: "/resources", label: "Resources" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <span className="font-display text-2xl font-bold text-navy">
            Grad<span className="text-gold">.</span>Guide
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-colors hover:text-navy ${
                pathname === link.href ? "text-navy" : "text-foreground/70"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />
              )}
            </Link>
          ))}
          <a
            href="mailto:info@gradguide.work"
            className="text-sm text-foreground/50 hover:text-navy transition-colors"
          >
            info@gradguide.work
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-navy transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-navy transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-base font-medium border-b border-border/50 ${
                pathname === link.href ? "text-navy" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:info@gradguide.work"
            className="block py-3 text-sm text-foreground/50"
          >
            info@gradguide.work
          </a>
        </nav>
      )}
    </header>
  );
}
