import { Button } from "@/components/ui/button";

export default function BrochureSection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://ext.same-assets.com/304612688/1805870668.webp)`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-white text-sm font-medium uppercase tracking-wide mb-4">
            OUR BROCHURE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Find out more about our range of machines and services...
          </h2>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium transition-all"
          >
            DOWNLOAD NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
