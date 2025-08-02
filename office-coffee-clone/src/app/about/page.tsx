import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    number: "01",
    title: "Farm",
    subtitle: "Fairtrade & organic coffee",
    description: "Welcome to a world of coffee where the well-being of the farmers and the land is just as important as the final product in your cup. We work hand in hand with Puro Coffee, our Fairtrade and Organic coffee brand. Puro works directly with farmers to support communities and help preserve the rainforest.",
    image: "https://ext.same-assets.com/176798368/391877538.webp",
  },
  {
    number: "02",
    title: "Protect",
    subtitle: "Saving the rainforest",
    description: "When you choose the Office Coffee Company, you're helping to protect the rainforest. We can safeguard 19m² of this precious landscape for every kilo of Puro coffee you purchase. Through our partnership with the World Life Trust, Puro gives back to the Earth, honouring Indigenous sustainability principles.",
    image: "https://ext.same-assets.com/176798368/1738676429.webp",
  },
  {
    number: "03",
    title: "Community",
    subtitle: "Puro social projects",
    description: "Through Puro's community initiatives, the Office Coffee Company tangibly improves the lives of local people. We currently contribute to three charitable initiatives: Trees 4 Schools, Coffee Growers of Congo, and Orangutans of Borneo.",
    image: "https://ext.same-assets.com/176798368/2168801396.webp",
  },
  {
    number: "04",
    title: "Create",
    subtitle: "Coffee roasting",
    description: "Not just another coffee supplier. Our strength is sourcing coffee worldwide. We are part of Miko Coffee, a family business established over two hundred years. Here in the UK, we roast speciality coffee in one of the regional small-batch coffee roasteries.",
    image: "https://ext.same-assets.com/176798368/3463438347.webp",
  },
  {
    number: "05",
    title: "Balance",
    subtitle: "Cutting carbon emissions",
    description: "From growing, processing, and then shipping the beans, the coffee business certainly racks up the miles. That's why the Office Coffee Company believes so strongly in offsetting our carbon emissions. In fact, Puro Coffee is already carbon neutral up until 2024.",
    image: "https://ext.same-assets.com/176798368/3028666614.webp",
  },
  {
    number: "06",
    title: "Taste",
    subtitle: "Coffee tasting sessions",
    description: "We love arranging coffee tastings - they're a chance for us to showcase our delicious coffee and build a relationship with you and your team. We'll take you on a fun and engaging journey around the world of our coffee.",
    image: "https://ext.same-assets.com/176798368/1633516096.webp",
  },
  {
    number: "07",
    title: "Install",
    subtitle: "Getting you started",
    description: "Following a simple over-the-phone assessment of where you would like your coffee machine installed, we deliver and install your new machine free of charge. On the day, we'll ensure everything is up and running smoothly.",
    image: "https://ext.same-assets.com/176798368/3963286956.webp",
  },
  {
    number: "08",
    title: "Recycle",
    subtitle: "Sustainable practices",
    description: "No one likes adding more waste to landfills. To keep your used coffee grounds out of the bin, we can arrange for First Mile and Bio-Bean to collect them from your office. They will process your used grounds into carbon-neutral fuels.",
    image: "https://ext.same-assets.com/176798368/3469026329.webp",
  },
  {
    number: "09",
    title: "Care",
    subtitle: "Simple, responsive aftercare",
    description: "Now that you have your new coffee machine, you need top-notch support to keep it running smoothly. Our Total Care package includes all emergency repair calls and regularly scheduled maintenance.",
    image: "https://ext.same-assets.com/176798368/1486691892.webp",
  },
  {
    number: "10",
    title: "Enjoy",
    subtitle: "Incredible working culture",
    description: "There's nothing like chatting with colleagues and brainstorming over a great cup of coffee - the ideas just flow more smoothly. At the Office Coffee Company, we believe that great coffee, great times, and great work go hand in hand.",
    image: "https://ext.same-assets.com/176798368/592214265.webp",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(https://ext.same-assets.com/176798368/1115851878.webp)` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Curating great coffee experiences - it's what makes us tick
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            We are passionate about providing you with incredible cups of organic Fairtrade coffee that boost morale and increase productivity.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            Find out more
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-amber-800 font-medium text-sm uppercase tracking-wide">
              How we work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mt-2 mb-6">
              A love of coffee and our planet for the perfect blend
            </h2>
            <p className="text-xl text-gray-700">
              Our incredible journey starts by working with farmers to produce, blend and roast the best coffee possible. Through our social projects and sustainability initiatives, we've taken time to work with nature to create the perfect cup of coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="mb-6">
                    <span className="text-6xl font-bold text-amber-900 opacity-20">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-amber-900 mb-2">
                    {step.title}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-700 mb-4">
                    {step.subtitle}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Our commitment to you
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Sustainable
              </h3>
              <p className="text-gray-600">
                Every cup helps protect rainforests and supports farming communities worldwide.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                Premium Fairtrade and organic coffee beans, expertly roasted for the perfect taste.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                Service
              </h3>
              <p className="text-gray-600">
                Dedicated support team, free installation, and comprehensive maintenance packages.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
            Ready to transform your workplace?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Give your team the boost they need with incredible coffee that fuels great working culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              Contact Us Today
            </Button>
            <Button size="lg" variant="outline" className="text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white px-8 py-3">
              Schedule a Tasting
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
