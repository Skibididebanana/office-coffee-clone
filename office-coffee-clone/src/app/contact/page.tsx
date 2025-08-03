import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const offices = [
  {
    name: "Head Office",
    location: "Cheltenham",
    address: "Office Coffee Company, Cheltenham, Gloucestershire",
    phone: "0203 763 4035",
    email: "hello@office-coffee.co.uk",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    link: "/contact/cheltenham",
  },
  {
    name: "Scotland",
    location: "Glasgow",
    address: "Office Coffee Company, Glasgow, Scotland",
    phone: "0203 763 4035",
    email: "scotland@office-coffee.co.uk",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    link: "/contact/scotland",
  },
  {
    name: "North",
    location: "Sheffield",
    address: "Office Coffee Company, Sheffield, Yorkshire",
    phone: "0203 763 4035",
    email: "north@office-coffee.co.uk",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    link: "/contact/north",
  },
  {
    name: "South West & Wales",
    location: "Exeter",
    address: "Office Coffee Company, Exeter, Devon",
    phone: "0203 763 4035",
    email: "southwest@office-coffee.co.uk",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    link: "/contact/south-west-wales",
  },
  {
    name: "Cornwall",
    location: "Redruth",
    address: "Office Coffee Company, Redruth, Cornwall",
    phone: "0203 763 4035",
    email: "cornwall@office-coffee.co.uk",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM",
    link: "/contact/cornwall",
  },
];

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak to our coffee experts",
    detail: "0203 763 4035",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    detail: "hello@office-coffee.co.uk",
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Find your nearest office",
    detail: "5 locations across the UK",
    action: "Find Location",
  },
];

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8">
            Ready to transform your workplace with exceptional coffee? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-700">
              Choose the best way to reach our coffee experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {method.description}
                </p>
                <p className="text-lg font-semibold text-gray-900 mb-6">
                  {method.detail}
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-700">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700 mb-2">
                  Enquiry Type
                </label>
                <select
                  id="enquiry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select an enquiry type</option>
                  <option value="coffee-machines">Coffee Machines</option>
                  <option value="coffee-supply">Coffee Supply</option>
                  <option value="coffee-tasting">Coffee Tasting</option>
                  <option value="general">General Enquiry</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your coffee requirements..."
                  required
                />
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-3">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-700">
              Find your nearest Office Coffee Company location
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {office.name}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  {office.location}
                </h4>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.email}</span>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full text-green-800 border-green-800 hover:bg-green-800 hover:text-white"
                >
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Need Emergency Support?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            If you're experiencing issues with your coffee machine, our technical support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Emergency Support
            </Button>
            <Button size="lg" variant="outline" className="text-green-800 border-green-800 hover:bg-green-800 hover:text-white px-8 py-3">
              Schedule Maintenance
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}