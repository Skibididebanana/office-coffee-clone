import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Our Coffee",
    subtitle: "Discover our range",
    image: "https://ext.same-assets.com/304612688/758263681.webp",
    link: "/coffee",
  },
  {
    title: "Our Machines",
    subtitle: "Find your machine",
    image: "https://ext.same-assets.com/304612688/3132776536.webp",
    link: "/machines",
  },
  {
    title: "Coffee Tasting",
    subtitle: "Book a session",
    image: "https://ext.same-assets.com/304612688/3120748658.webp",
    link: "/coffee/tasting",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4">
            What are you looking
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800">
            for today?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <div className="aspect-square relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <Button
                    variant="outline"
                    className="w-fit bg-transparent border-white text-white hover:bg-white hover:text-black transition-all"
                  >
                    {service.subtitle}
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}