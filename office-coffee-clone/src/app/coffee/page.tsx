import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const coffeeRanges = [
  {
    title: "Puro Coffee",
    subtitle: "Premium Fairtrade & Organic",
    description: "Our signature range of ethically sourced, premium coffee beans. Every purchase helps protect the rainforest and supports farming communities.",
    image: "https://ext.same-assets.com/176798368/862006938.webp",
    link: "/coffee/puro",
    features: ["Fairtrade Certified", "Organic", "Rainforest Protection", "Carbon Neutral"],
  },
  {
    title: "Office Origins",
    subtitle: "Single Origin Excellence",
    description: "Discover the unique flavors and characteristics of coffee from specific regions around the world. Perfect for the discerning coffee enthusiast.",
    image: "https://ext.same-assets.com/176798368/1554632211.webp",
    link: "/coffee/origins",
    features: ["Single Origin", "Expertly Roasted", "Unique Profiles", "Premium Quality"],
  },
];

const sustainability = [
  {
    icon: "🌳",
    title: "Rainforest Protection",
    description: "19m² of rainforest protected for every kilo of Puro coffee purchased",
  },
  {
    icon: "👥",
    title: "Community Support",
    description: "Direct partnerships with farming communities across 8 countries",
  },
  {
    icon: "♻️",
    title: "Carbon Neutral",
    description: "Puro Coffee is carbon neutral through verified offset programs",
  },
  {
    icon: "🌱",
    title: "Organic Farming",
    description: "Supporting regenerative agricultural practices that heal the land",
  },
];

const tastingBenefits = [
  "Try before you buy - no obligation",
  "Expert-guided tasting experience",
  "Learn about our coffee origins",
  "Tailored recommendations for your business",
  "Meet our coffee specialists",
];

export default function CoffeePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-green-800 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Exceptional Coffee for Your Business
              </h1>
              <p className="text-xl text-green-100 mb-8">
                From bean to cup, we're passionate about delivering the finest Fairtrade and organic coffee that not only tastes incredible but makes a positive impact on the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white px-8 py-3">
                  Explore Our Coffee
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-800 px-8 py-3">
                  Book a Tasting
                </Button>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://ext.same-assets.com/176798368/3981629894.webp"
                alt="Premium coffee beans"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Ranges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Coffee Ranges
            </h2>
            <p className="text-xl text-gray-700">
              Discover our carefully curated selection of premium coffee
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {coffeeRanges.map((range, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={range.image}
                    alt={range.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    {range.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">
                    {range.subtitle}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {range.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {range.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={range.link}>
                    <Button className="w-full bg-green-800 hover:bg-green-900 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Impact */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Coffee That Makes a Difference
            </h2>
            <p className="text-xl text-gray-700">
              Every cup you enjoy creates positive impact for people and planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainability.map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Tasting Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Our Coffee Firsthand
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Book a coffee tasting session and discover the perfect coffee solution for your business. Our experts will guide you through our ranges and help you find the ideal match.
              </p>
              <ul className="space-y-3 mb-8">
                {tastingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link href="/coffee/tasting">
                <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white px-8 py-3">
                  Book Your Tasting
                </Button>
              </Link>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://ext.same-assets.com/176798368/1633516096.webp"
                alt="Coffee tasting session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Our Quality Promise
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl mb-6">
              We're not just another coffee supplier. Our strength lies in sourcing exceptional coffee from around the world and roasting it to perfection in our regional small-batch roasteries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Expertly Sourced</h3>
                <p>Direct relationships with farmers across 8 countries ensure the highest quality beans.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Perfectly Roasted</h3>
                <p>Small-batch roasting in our UK facilities guarantees optimal flavor in every cup.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-3">Freshly Delivered</h3>
                <p>Regular deliveries ensure your office always has the freshest, most delicious coffee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Ready to Elevate Your Coffee Experience?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Discover why thousands of businesses trust us for their coffee needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link href="/coffee/tasting">
              <Button size="lg" variant="outline" className="text-green-800 border-green-800 hover:bg-green-800 hover:text-white px-8 py-3">
                Schedule a Tasting
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}