import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone } from "lucide-react";

const footerSections = [
  {
    title: "Machines",
    links: [
      { label: "Office Coffee", href: "/machines/office" },
      { label: "Commercial", href: "/machines/commercial" },
      { label: "Filtered Water", href: "/machines/water" },
    ],
  },
  {
    title: "Coffee",
    links: [
      { label: "Puro Coffee", href: "/coffee/puro" },
      { label: "Office Origins", href: "/coffee/origins" },
      { label: "Coffee Tasting", href: "/coffee/tasting" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", href: "/about/story" },
      { label: "Environment", href: "/about/environment" },
      { label: "News & Blog", href: "/about/news" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Head Office", href: "/contact/cheltenham" },
      { label: "Scotland", href: "/contact/scotland" },
      { label: "North", href: "/contact/north" },
      { label: "South West & Wales", href: "/contact/south-west-wales" },
      { label: "Cornwall", href: "/contact/cornwall" },
    ],
  },
  {
    title: "Service",
    links: [
      { label: "Returns Policy", href: "/terms/returns" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/terms/privacy" },
      { label: "Cookie Policy", href: "/terms/cookies" },
    ],
  },
];

const certificationLogos = [
  {
    name: "Fairtrade",
    logo: "https://ext.same-assets.com/304612688/2601118607.webp",
    link: "https://www.fairtrade.org.uk/",
  },
  {
    name: "EU Organic",
    logo: "https://ext.same-assets.com/304612688/3016709346.webp",
    link: "https://ec.europa.eu/info/food-farming-fisheries/farming/organic-farming_en",
  },
  {
    name: "World Land Trust",
    logo: "https://ext.same-assets.com/304612688/3817593073.webp",
    link: "https://www.worldlandtrust.org/",
  },
  {
    name: "Rainforest Alliance",
    logo: "https://ext.same-assets.com/304612688/685615080.webp",
    link: "https://www.rainforest-alliance.org/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-green-800 text-sm uppercase tracking-wide mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-green-700 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Info Section */}
        <div className="border-t border-green-200 pt-12 mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="mb-8 lg:mb-0 lg:max-w-md">
              <div className="h-12 flex items-center mb-6">
                <span className="text-2xl font-bold text-green-800">Office Coffee Co.</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Incredible coffee fuels great working culture
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We help businesses boost morale and increase productivity with our
                state of the art coffee machines, regularly supplied with Fairtrade
                coffee that protects rainforests and supports farming communities.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <Link
                href="tel:02037634035"
                className="flex items-center text-xl font-bold text-green-800 mb-6 hover:text-green-600 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                0203 763 4035
              </Link>

              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/OfficeCoffeeCo/"
                  className="text-gray-600 hover:text-green-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/officecoffeeco/"
                  className="text-gray-600 hover:text-green-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://twitter.com/OfficeCoffeeCo/"
                  className="text-gray-600 hover:text-green-700 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Logos */}
        <div className="border-t border-green-200 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {certificationLogos.map((cert, index) => (
              <Link
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="h-12 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>Copyright © 2025 Office Coffee Company All rights reserved</p>
          <div className="flex items-center mt-4 sm:mt-0">
            <span className="mr-2">Design by</span>
            <Link
              href="https://www.vii.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-green-700 transition-colors"
            >
              VII
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}