"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://ext.same-assets.com/304612688/1346932767.webp",
    title: "Delicious coffee for your office",
    subtitle: "At the Office Coffee Company, we specialise in",
    highlight1: "barista-quality machines",
    highlight2: "ethically sourced beans,",
    description: "for your workplace.",
    buttonText: "coffee machines",
    buttonLink: "/office-coffee-machines/",
  },
  {
    id: 2,
    image: "https://ext.same-assets.com/304612688/2685718521.webp",
    title: "Fairtrade coffee and supplies, with next business day delivery",
    subtitle: "Freshly roasted delicious coffee for your coffee machine.",
    buttonText: "Coffee shop",
    buttonLink: "/shop/",
  },
  {
    id: 3,
    image: "https://ext.same-assets.com/304612688/1853671973.webp",
    title: "Organise a coffee tasting for your colleagues",
    subtitle: "Host an obligation free coffee morning to sample our delicious blends and reliable machines",
    buttonText: "Coffee machines",
    buttonLink: "/office-coffee-machines/",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-lg md:text-xl text-white mb-2">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.highlight1 && (
                    <p className="text-lg md:text-xl text-white mb-2">
                      <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                        {slide.highlight1}
                      </span>{" "}
                      and{" "}
                      <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                        {slide.highlight2}
                      </span>
                    </p>
                  )}
                  {slide.description && (
                    <p className="text-lg md:text-xl text-white mb-8">
                      {slide.description}
                    </p>
                  )}
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-medium"
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
