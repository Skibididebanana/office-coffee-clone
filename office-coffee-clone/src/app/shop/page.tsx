import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const topBenefits = [
  "Next Day Delivery on orders placed by 12pm",
  "Free Delivery on all orders over £75",
  "Collect Reward Points when you purchase",
];

const shopCategories = [
  {
    title: "Coffee",
    subcategories: [
      { name: "Fresh Beans", link: "/shop/coffee/beans" },
      { name: "Fresh Ground", link: "/shop/coffee/ground" },
      { name: "Instant", link: "/shop/coffee/instant" },
    ],
  },
  {
    title: "Tea",
    subcategories: [
      { name: "Everyday", link: "/shop/tea/everyday" },
      { name: "Envelopes", link: "/shop/tea/envelopes" },
      { name: "Green Tea", link: "/shop/tea/green" },
    ],
  },
  {
    title: "Sundries",
    subcategories: [
      { name: "Milk", link: "/shop/sundries/milk" },
      { name: "Hot Chocolate", link: "/shop/sundries/hot-chocolate" },
      { name: "Sugar", link: "/shop/sundries/sugar" },
      { name: "Syrups", link: "/shop/sundries/syrups" },
      { name: "Biscuits", link: "/shop/sundries/biscuits" },
      { name: "Cleaning", link: "/shop/sundries/cleaning" },
    ],
  },
  {
    title: "Disposables",
    subcategories: [
      { name: "Cups", link: "/shop/disposables/cups" },
      { name: "Stirrers", link: "/shop/disposables/stirrers" },
      { name: "Filter Papers", link: "/shop/disposables/filter-papers" },
    ],
  },
];

const featuredProducts = [
  {
    name: "Puro Fuerte Espresso Coffee Beans",
    price: "£92.59",
    image: "https://ext.same-assets.com/176798368/862006938.webp",
    link: "/shop/product/puro-fuerte-espresso",
  },
  {
    name: "Puro Fino Espresso Coffee Beans",
    price: "£83.88",
    image: "https://ext.same-assets.com/176798368/1554632211.webp",
    link: "/shop/product/puro-fino-espresso",
  },
  {
    name: "White (Fairtrade) Sugar Sticks x 1000",
    price: "£14.28",
    image: "https://ext.same-assets.com/176798368/1158155308.webp",
    link: "/shop/product/fairtrade-sugar",
  },
  {
    name: "Border Biscuits Multi Pack Box",
    price: "£31.12",
    image: "https://ext.same-assets.com/176798368/483893217.webp",
    link: "/shop/product/border-biscuits",
  },
  {
    name: "SHOTT Hazelnut Syrup 1 litre",
    price: "£12.35",
    image: "https://ext.same-assets.com/176798368/1461230917.webp",
    link: "/shop/product/shott-hazelnut-syrup",
  },
];

const heroSlides = [
  {
    title: "Great tasting coffee that protects the rainforests",
    image: "https://ext.same-assets.com/176798368/4062412544.webp",
    link: "/shop/coffee/beans",
  },
  {
    title: "Introducing SHOTT real fruit syrups for coffee",
    image: "https://ext.same-assets.com/176798368/172753487.webp",
    link: "/shop/sundries/syrups",
  },
  {
    title: "Great tasting ethical tea",
    image: "https://ext.same-assets.com/176798368/2665720121.webp",
    link: "/shop/tea/envelopes",
  },
];

const quickLinks = [
  {
    title: "Coffee",
    subtitle: "Shop for coffee",
    image: "https://ext.same-assets.com/176798368/3254887432.webp",
    link: "/shop/coffee",
  },
  {
    title: "Tea",
    subtitle: "Shop for tea",
    image: "https://ext.same-assets.com/176798368/2199519007.webp",
    link: "/shop/tea",
  },
  {
    title: "Coffee Machines",
    subtitle: "Show now",
    image: "https://ext.same-assets.com/176798368/1285433229.webp",
    link: "/machines",
  },
  {
    title: "Water Machines",
    subtitle: "Show now",
    image: "https://ext.same-assets.com/176798368/3179388369.webp",
    link: "/machines/water",
  },
  {
    title: "Sundries",
    subtitle: "Shop now",
    image: "https://ext.same-assets.com/176798368/679811487.webp",
    link: "/shop/sundries",
  },
  {
    title: "Disposables",
    subtitle: "Shop now",
    image: "https://ext.same-assets.com/176798368/3111505968.webp",
    link: "/shop/disposables",
  },
];

export default function ShopPage() {
  return (
    <Layout>
      {/* Top Benefits Bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {topBenefits.map((benefit, index) => (
              <span key={index} className="flex items-center">
                {benefit}
                {index < topBenefits.length - 1 && <span className="ml-4">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              All the supplies you need for your business
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Order everything you need to keep the office refreshed and hydrated
            </p>
          </div>

          {/* Featured Hero Slides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {heroSlides.map((slide, index) => (
              <Link key={index} href={slide.link} className="group">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all" />
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white text-center">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Shop Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shopCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={sub.link}
                        className="text-gray-600 hover:text-amber-900 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Popular purchases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredProducts.map((product, index) => (
              <Link key={index} href={product.link} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 text-sm line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-green-600 font-bold">
                      {product.price}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
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

      {/* Wholesale Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-amber-800 font-medium text-sm uppercase tracking-wide">
              Wholesale
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mt-2 mb-4">
              Buying in Bulk? Need a lot of Coffee?
            </h2>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Enquire now
            </Button>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Open an account
              </h3>
              <p className="text-gray-600 mb-4">
                To speed up the ordering process and get exclusive offers next time you visit, create an account with us.
              </p>
              <Button variant="outline" className="text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white">
                Create account
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Bean rewards
              </h3>
              <p className="text-gray-600 mb-4">
                Become a member of our rewards scheme to unlock exciting perks and access to exclusive rewards.
              </p>
              <Button variant="outline" className="text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white">
                Learn more
              </Button>
            </Card>

            <Card className="p-6 text-center">
              <h3 className="text-xl font-bold text-amber-900 mb-4">
                Free delivery
              </h3>
              <p className="text-gray-600 mb-4">
                We provide next business day delivery on orders placed by 12pm and free delivery on any orders over £75.
              </p>
              <Button variant="outline" className="text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white">
                Shop now
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
