"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, User, ShoppingCart } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="h-8 flex items-center">
              <span className="text-xl font-bold text-amber-900">Office Coffee Co.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/machines"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              MACHINES
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              SHOP
            </Link>
            <Link
              href="/coffee"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              COFFEE
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              ABOUT
            </Link>
          </nav>

          {/* Right side - Phone, User, Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:02037634035"
              className="flex items-center text-gray-700 hover:text-gray-900 text-sm font-medium"
            >
              <Phone className="h-4 w-4 mr-2" />
              0203 763 4035
            </Link>
            <Link href="/account">
              <User className="h-5 w-5 text-gray-700 hover:text-gray-900" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-gray-900" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <Link
              href="/machines"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              MACHINES
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              SHOP
            </Link>
            <Link
              href="/coffee"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              COFFEE
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              ABOUT
            </Link>
            <Link
              href="tel:02037634035"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              0203 763 4035
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
