"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, User, ChevronDown } from "lucide-react";

const machinesMenuItems = [
  {
    title: "Office Coffee",
    description: "Provide your employees with convenient and delicious bean-to-cup coffee.",
    link: "/machines/office",
    image: "https://ext.same-assets.com/176798368/894159796.webp",
  },
  {
    title: "Commercial",
    description: "Professional coffee machines that can handle the rush.",
    link: "/machines/commercial",
    image: "https://ext.same-assets.com/176798368/1638910467.webp",
  },
  {
    title: "Filtered Water",
    description: "Hot and cold filtered water on demand, perfect for hot tea and cold drinks.",
    link: "/machines/water",
    image: "https://ext.same-assets.com/176798368/2351809614.webp",
  },
];

const coffeeMenuItems = [
  {
    title: "Puro Coffee",
    description: "Premium Fairtrade & Organic coffee that protects rainforests.",
    link: "/coffee/puro",
    image: "https://ext.same-assets.com/176798368/862006938.webp",
  },
  {
    title: "Office Origins",
    description: "Single origin excellence from specific regions around the world.",
    link: "/coffee/origins",
    image: "https://ext.same-assets.com/176798368/1554632211.webp",
  },
  {
    title: "Coffee Tasting",
    description: "Experience our coffee firsthand with expert-guided tastings.",
    link: "/coffee/tasting",
    image: "https://ext.same-assets.com/176798368/1633516096.webp",
  },
];

const aboutMenuItems = [
  {
    title: "Our Story",
    description: "Discover our journey and commitment to exceptional coffee.",
    link: "/about/story",
    image: "https://ext.same-assets.com/176798368/1115851878.webp",
  },
  {
    title: "Environment",
    description: "Our sustainability initiatives and environmental commitments.",
    link: "/about/environment",
    image: "https://ext.same-assets.com/176798368/1738676429.webp",
  },
  {
    title: "News & Blog",
    description: "Latest updates, news, and insights from our coffee experts.",
    link: "/about/news",
    image: "https://ext.same-assets.com/176798368/3981629894.webp",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const handleMegaMenuEnter = (menu: string) => {
    setActiveMegaMenu(menu);
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
  };

  const MegaMenu = ({ items, isActive }: { items: typeof machinesMenuItems; isActive: boolean }) => (
    <div 
      className={`mega-menu ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
      onMouseLeave={handleMegaMenuLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group block p-4 rounded-lg hover:bg-green-50 transition-colors"
            >
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-green-800 mb-2 group-hover:text-green-600">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="h-8 flex items-center">
              <span className="text-xl font-bold text-green-800">Office Coffee Co.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div 
              className="mega-menu-container"
              onMouseEnter={() => handleMegaMenuEnter('machines')}
              onMouseLeave={handleMegaMenuLeave}
            >
              <Link
                href="/machines"
                className="mega-menu-trigger flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                MACHINES
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <MegaMenu items={machinesMenuItems} isActive={activeMegaMenu === 'machines'} />
            </div>

            <div 
              className="mega-menu-container"
              onMouseEnter={() => handleMegaMenuEnter('coffee')}
              onMouseLeave={handleMegaMenuLeave}
            >
              <Link
                href="/coffee"
                className="mega-menu-trigger flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                COFFEE
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <MegaMenu items={coffeeMenuItems} isActive={activeMegaMenu === 'coffee'} />
            </div>

            <div 
              className="mega-menu-container"
              onMouseEnter={() => handleMegaMenuEnter('about')}
              onMouseLeave={handleMegaMenuLeave}
            >
              <Link
                href="/about"
                className="mega-menu-trigger flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                ABOUT
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <MegaMenu items={aboutMenuItems} isActive={activeMegaMenu === 'about'} />
            </div>
          </nav>

          {/* Right side - Phone, User */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:02037634035"
              className="flex items-center text-gray-700 hover:text-green-600 text-sm font-medium transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              0203 763 4035
            </Link>
            <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Contact Us
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/machines"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
            >
              MACHINES
            </Link>
            <Link
              href="/coffee"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
            >
              COFFEE
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
            >
              ABOUT
            </Link>
            <Link
              href="tel:02037634035"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium"
            >
              0203 763 4035
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white block px-3 py-2 text-base font-medium rounded-md mx-3 mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}