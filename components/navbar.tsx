"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Shop by Category" },
  { href: "/top-picks", label: "Top Picks" },
  { href: "/plan", label: "Partner Plan" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
              RestaurantPro <span className="text-primary">Supply Hub</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild size="sm" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold">
              <a href="https://affiliate-program.amazon.com" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-4 h-4 mr-1" />
                Shop on Amazon
              </a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium",
                pathname === link.href
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Button asChild className="w-full bg-amber-500 hover:bg-amber-600 text-white">
              <a href="https://affiliate-program.amazon.com" target="_blank" rel="noopener noreferrer">
                Shop on Amazon
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
