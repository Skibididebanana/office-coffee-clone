import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const officeMachines = [
  {
    name: "Jura GIGA X3c Professional",
    description: "Premium bean-to-cup machine perfect for busy offices. Delivers cafe-quality drinks at the touch of a button.",
    capacity: "Up to 80 cups per day",
    features: ["One-touch operation", "Automatic milk frothing", "Large bean hopper", "Easy maintenance"],
    image: "https://ext.same-assets.com/176798368/894159796.webp",
  },
  {
    name: "Franke A600 MS",
    description: "Versatile office machine with excellent reliability and consistent quality for medium-sized offices.",
    capacity: "Up to 120 cups per day",
    features: ["Touch display", "Multiple drink options", "Fresh milk system", "Easy cleaning"],
    image: "https://ext.same-assets.com/176798368/2446004184.webp",
  },
  {
    name: "WMF 1500 S+",
    description: "Robust and reliable machine designed for high-volume office environments with consistent quality.",
    capacity: "Up to 150 cups per day",
    features: ["Dynamic Coffee Assist", "Perfect foam technology", "Large capacity", "Self-cleaning"],
    image: "https://ext.same-assets.com/176798368/1285433229.webp",
  },
];

const benefits = [
  {
    icon: "☕",
    title: "Boost Productivity",
    description: "Great coffee keeps your team energized and focused throughout the day.",
  },
  {
    icon: "💰",
    title: "Cost Effective",
    description: "Save money compared to buying coffee from shops while offering premium quality.",
  },
  {
    icon: "🤝",
    title: "Team Building",
    description: "Coffee breaks become natural opportunities for collaboration and connection.",
  },
  {
    icon: "⚡",
    title: "Instant Availability",
    description: "Fresh coffee available 24/7 without leaving the office.",
  },
];

const serviceFeatures = [
  "Free installation and setup",
  "Comprehensive staff training",
  "Regular maintenance included",
  "24/7 technical support",
  "Emergency repair service",
  "Quality guarantee",
];

export default function OfficeMachinesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(https://ext.same-assets.com/176798368/894159796.webp)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Office Coffee Machines
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Provide your employees with convenient and delicious bean-to-cup coffee that boosts morale and productivity.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Get a Quote
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Why Your Office Needs a Coffee Machine
            </h2>
            <p className="text-xl text-gray-700">
              Transform your workplace culture with premium coffee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Our Office Coffee Machines
            </h2>
            <p className="text-xl text-gray-700">
              Choose the perfect machine for your office size and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeMachines.map((machine, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">
                    {machine.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {machine.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-green-600">
                      {machine.capacity}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {machine.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-800 hover:bg-amber-900 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Complete Service Package
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We don't just supply machines - we provide a complete coffee solution with ongoing support.
              </p>
              <ul className="space-y-3">
                {serviceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://ext.same-assets.com/176798368/3963286956.webp"
                alt="Coffee machine installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Supply Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://ext.same-assets.com/176798368/862006938.webp"
                alt="Premium coffee beans"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Premium Coffee Supply
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Complement your office machine with our premium Fairtrade and organic coffee beans, delivered fresh to your door.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Puro Fairtrade coffee range</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Regular delivery schedules</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Multiple blend options</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Competitive pricing</span>
                </li>
              </ul>
              <Link href="/shop/coffee">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Shop Coffee
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Office?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get in touch today for a free consultation and quote tailored to your office needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Get a Quote
              </Button>
            </Link>
            <Link href="/coffee/tasting">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-amber-900 px-8 py-3">
                Book a Tasting
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
