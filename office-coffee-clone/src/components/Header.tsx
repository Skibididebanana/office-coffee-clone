"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const machinesMenuItems = [
  {
    title: "Office Coffee",
    description: "Bean-to-cup machines perfect for small to medium offices. Easy to use with consistent quality.",
    link: "/machines/office",
    image: "https://ext.same-assets.com/176798368/894159796.webp",
    features: ["Bean-to-cup", "Touch interface", "Self-cleaning"],
  },
  {
    title: "Commercial",
    description: "Heavy-duty machines for high-volume environments. Built for reliability and speed.",
    link: "/machines/commercial", 
    image: "https://ext.same-assets.com/176798368/1638910467.webp",
    features: ["High capacity", "Multiple drinks", "Remote monitoring"],
  },
  {
    title: "Filtered Water",
    description: "Premium water systems providing hot and cold filtered water on demand for your office.",
    link: "/machines/water",
    image: "https://ext.same-assets.com/176798368/2351809614.webp",
    features: ["Hot & cold", "Advanced filtration", "Energy efficient"],
  },
];

const coffeeMenuItems = [
  {
    title: "Puro Coffee",
    description: "Premium Fairtrade & Organic coffee that protects rainforests while delivering exceptional taste.",
    link: "/coffee/puro",
    image: "https://ext.same-assets.com/176798368/862006938.webp",
    features: ["Fairtrade", "Organic", "Rainforest protection"],
  },
  {
    title: "Office Origins",
    description: "Single origin excellence from specific regions around the world for discerning coffee lovers.",
    link: "/coffee/origins",
    image: "https://ext.same-assets.com/176798368/1554632211.webp",
    features: ["Single origin", "Unique profiles", "Expert roasted"],
  },
  {
    title: "Coffee Tasting",
    description: "Experience our coffee firsthand with expert-guided tastings tailored for your business.",
    link: "/coffee/tasting",
    image: "https://ext.same-assets.com/176798368/1633516096.webp",
    features: ["Expert guided", "Try before buy", "Tailored advice"],
  },
];

const aboutMenuItems = [
  {
    title: "Our Story",
    description: "Discover our journey from startup to the UK's leading office coffee solution provider.",
    link: "/about/story", 
    image: "https://ext.same-assets.com/176798368/1115851878.webp",
    features: ["10+ years", "500+ clients", "Family owned"],
  },
  {
    title: "Environment",
    description: "Our commitment to sustainability, carbon neutrality, and environmental protection.",
    link: "/about/environment",
    image: "https://ext.same-assets.com/176798368/1738676429.webp",
    features: ["Carbon neutral", "Rainforest protection", "Sustainable sourcing"],
  },
  {
    title: "News & Blog",
    description: "Latest updates, coffee insights, and industry news from our team of experts.",
    link: "/about/news",
    image: "https://ext.same-assets.com/176798368/3981629894.webp",
    features: ["Expert insights", "Industry news", "Regular updates"],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
<<<<<<< HEAD
  const [megaMenuHeight, setMegaMenuHeight] = useState(0);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const gracePeriodRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Update mega menu height when it becomes active
  useEffect(() => {
    if (activeMegaMenu && megaMenuRef.current) {
      const height = megaMenuRef.current.scrollHeight;
      setMegaMenuHeight(height);
    } else {
      setMegaMenuHeight(0);
    }
  }, [activeMegaMenu]);

  // Add CSS variable to document for hero section margin
  useEffect(() => {
    document.documentElement.style.setProperty('--mega-menu-height', `${megaMenuHeight}px`);
  }, [megaMenuHeight]);

  const handleMegaMenuEnter = (menu: string) => {
    // Clear any existing timeouts
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    if (gracePeriodRef.current) {
      clearTimeout(gracePeriodRef.current);
    }
=======
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMegaMenuEnter = (menu: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
>>>>>>> f2cea54a5047e6952e952bef9c0068d6090317c1
    setActiveMegaMenu(menu);
  };

  const handleMegaMenuLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
<<<<<<< HEAD
    }, 150);
  };

  const handleNavLeave = () => {
    // Start 0.5 second grace period
    gracePeriodRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 500);
  };

  const handleNavEnter = () => {
    // Clear grace period when entering any nav item
    if (gracePeriodRef.current) {
      clearTimeout(gracePeriodRef.current);
    }
  };

=======
    }, 150); // Short delay for better UX
  };

>>>>>>> f2cea54a5047e6952e952bef9c0068d6090317c1
  const MegaMenuCard = ({ item }: { item: typeof machinesMenuItems[0] }) => (
    <Link href={item.link} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-xl font-bold text-green-800 group-hover:text-green-600 transition-colors">
              {item.title}
            </h3>
            <ChevronDown className="h-4 w-4 text-green-600 rotate-[-90deg] opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.features.map((feature, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full border border-green-200"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );

  const MegaMenu = ({ items, isActive, title }: { items: typeof machinesMenuItems; isActive: boolean; title: string }) => (
    <div 
<<<<<<< HEAD
      ref={megaMenuRef}
      className={`fixed top-20 left-0 right-0 w-full bg-white/95 backdrop-blur-lg border-t-4 border-green-600 shadow-2xl transform transition-all duration-300 ease-out z-50 ${
=======
      className={`absolute top-full left-0 w-screen bg-white/95 backdrop-blur-lg border-t-4 border-green-600 shadow-2xl transform transition-all duration-300 ease-out z-50 ${
>>>>>>> f2cea54a5047e6952e952bef9c0068d6090317c1
        isActive 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      onMouseEnter={() => handleMegaMenuEnter(activeMegaMenu || '')}
      onMouseLeave={handleMegaMenuLeave}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-2">{title}</h2>
          <div className="w-20 h-1 bg-green-600 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <MegaMenuCard key={index} item={item} />
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Need help choosing? Call us: </span>
              <Link href="tel:02037634035" className="font-semibold text-green-700 hover:text-green-600">
                0203 763 4035
              </Link>
            </div>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              View All {title}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
<<<<<<< HEAD
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50">
=======
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-40">
>>>>>>> f2cea54a5047e6952e952bef9c0068d6090317c1
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-800 leading-tight">
                Office Coffee Co.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative"
<<<<<<< HEAD
              onMouseEnter={() => {
                handleNavEnter();
                handleMegaMenuEnter('machines');
              }}
              onMouseLeave={handleNavLeave}
=======
              onMouseEnter={() => handleMegaMenuEnter('machines')}
              onMouseLeave={handleMegaMenuLeave}
>>>>>>> f2cea54a5047e6952e952bef9c0068d6090317c1
            >
              <Link
                href="/machines"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors group"
              >
                MACHINES
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <MegaMenu 
                items={machinesMenuItems} 
                isActive={activeMegaMenu === 'machines'} 
                title="Coffee Machines"
              />
            </div>

            <div 
              className="relative"
<<<<<<< HEAD
              onMouseEnter={() => {
                handleNavEnter();
                handleMegaMenuEnter('coffee');
              }}
              onMouseLeave={handleNavLeave}
=======
              onMouseEnter={() => handleMegaMenuEnter('coffee')}
              onMouseLeave={handleMegaMenuLeave}
>>>>>>> f2cea54a5047e6952e952bef9c0068d6090317c1
            >
              <Link
                href="/coffee"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors group"
              >
                COFFEE
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <MegaMenu 
                items={coffeeMenuItems} 
                isActive={activeMegaMenu === 'coffee'} 
                title="Premium Coffee"
              />
            </div>

            <div 
              className="relative"
<<<<<<< HEAD
              onMouseEnter={() => {
                handleNavEnter();
                handleMegaMenuEnter('about');
              }}
              onMouseLeave={handleNavLeave}
=======
              onMouseEnter={() => handleMegaMenuEnter('about')}
              onMouseLeave={handleMegaMenuLeave}
>>>>>>> f2cea54a5047e6952e952bef9c0068d6090317c1
            >
              <Link
                href="/about"
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-colors group"
              >
                ABOUT
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <MegaMenu 
                items={aboutMenuItems} 
                isActive={activeMegaMenu === 'about'} 
                title="About Us"
              />
            </div>
          </nav>

          {/* Right side - Phone, Contact */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="tel:02037634035"
              className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              0203 763 4035
            </Link>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
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
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/machines"
              className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              MACHINES
            </Link>
            <Link
              href="/coffee"
              className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              COFFEE
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="tel:02037634035"
                className="block px-4 py-3 text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                📞 0203 763 4035
              </Link>
              <Button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
