"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [megaMenuHeight, setMegaMenuHeight] = useState(0);

  useEffect(() => {
    // Listen for mega menu height changes
    const updateMegaMenuHeight = () => {
      const height = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--mega-menu-height') || '0'
      );
      setMegaMenuHeight(height);
    };

    // Create a MutationObserver to watch for CSS variable changes
    const observer = new MutationObserver(() => {
      updateMegaMenuHeight();
    });

    // Watch for changes to the document element's style
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style']
    });

    // Also listen for custom events
    const handleMegaMenuChange = () => updateMegaMenuHeight();
    window.addEventListener('mega-menu-height-change', handleMegaMenuChange);

    // Initial check
    updateMegaMenuHeight();

    return () => {
      observer.disconnect();
      window.removeEventListener('mega-menu-height-change', handleMegaMenuChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main 
        className="transition-all duration-300 ease-out"
        style={{ 
          marginTop: megaMenuHeight > 0 ? `${megaMenuHeight}px` : '0px' 
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}