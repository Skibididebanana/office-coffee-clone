import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const machineTypes = [
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

const quickLinks = [
  {
    title: "Office Machines",
    subtitle: "View our range",
    link: "/machines/office",
    image: "https://ext.same-assets.com/176798368/2446004184.webp",
  },
  {
    title: "Commercial Machines",
    subtitle: "View our range",
    link: "/machines/commercial",
    image: "https://ext.same-assets.com/176798368/4007591754.webp",
  },
  {
    title: "Coffee Tasting",
    subtitle: "Start now",
    link: "/coffee/tasting",
    image: "https://ext.same-assets.com/176798368/1092627970.webp",
  },
  {
    title: "Coffee Range",
    subtitle: "Discover more",
    link: "/coffee",
    image: "https://ext.same-assets.com/176798368/1752043403.webp",
  },
  {
    title: "Filtered Water",
    subtitle: "Stay hydrated",
    link: "/machines/water",
    image: "https://ext.same-assets.com/176798368/2990761560.webp",
  },
  {
    title: "Our Brochure",
    subtitle: "Download",
    link: "#",
    image: "https://ext.same-assets.com/176798368/3130119963.webp",
  },
];

export default function MachinesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(https://ext.same-assets.com/176798368/2582139410.webp)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Coffee machines for business and the busy workplace
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            The coffee and water machines you need to help your business thrive.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            View machines
          </Button>
        </div>
      </section>

      {/* Machine Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              What are you looking for?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {machineTypes.map((machine, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-square relative">
                  <img
                    src={machine.image}
                    alt={machine.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                      {machine.title}
                    </h3>
                    <p className="text-white text-center mb-6">
                      {machine.description}
                    </p>
                    <Link href={machine.link}>
                      <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                        See machines
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.link} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={link.image}
                      alt={link.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {link.title}
                      </h3>
                      <p className="text-white text-sm">
                        {link.subtitle}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Hardworking coffee machines
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Looking for Coffee Machines for Your Business?
            </h3>
            <p className="text-gray-700 mb-6">
              We have you covered if you run a coffee shop, hotel, restaurant, or any establishment where you must serve hot drinks daily. Our range of commercial coffee machines for business can provide superior quality espresso-based drinks that will impress your customers.
            </p>

            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Exceptional Coffee Quality Guaranteed
            </h3>
            <p className="text-gray-700 mb-6">
              We understand the importance of serving top-notch coffee that meets your customers expectations. Our coffee machines for business can help you achieve that by brewing coffee from the finest beans with the right equipment. With our machines, you can deliver high-quality coffee in large quantities, ensuring customer satisfaction and loyalty.
            </p>

            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Robust and High-Quality Machines
            </h3>
            <p className="text-gray-700 mb-6">
              Our machines are built to cope with high demand and are robust enough to serve between 50-500 cups daily. You can trust our machines to deliver the best coffee every time, no matter how many cups you need to serve.
            </p>

            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Easy Maintenance and Hassle-Free Service
            </h3>
            <p className="text-gray-700 mb-6">
              We know that you need a reliable, no-hassle service with machines that require minimal maintenance. Our in-house service arrangements ensure that any issues can be fixed quickly, and a guarantee covers you. With our water machines equipped with hot and cold filtered taps, you can efficiently serve piping hot tea and ice-cold drinks.
            </p>

            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Expert Advice and Support
            </h3>
            <p className="text-gray-700 mb-6">
              Our helpful team of experts can guide you through selecting suitable coffee machines for your business. We can help you determine how many machines you need, how many cups of coffee you need to serve daily, and what drinks you want to offer. You can count on us for the best advice and support.
            </p>

            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Ethically Sourced Coffees
            </h3>
            <p className="text-gray-700 mb-6">
              Our coffee machines for business are complemented by our extensive selection of ethically sourced coffees roasted in-house. With our machines and ethically sourced coffees, you can serve coffee that will rival the finest coffee houses.
            </p>

            <p className="text-gray-700 text-center text-lg font-medium">
              Contact us today and see how we can help you take your business to the next level with our coffee machines for business.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}