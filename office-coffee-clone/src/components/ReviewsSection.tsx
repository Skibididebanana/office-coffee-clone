import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Kulesar N.",
    date: "2 July",
    rating: 5,
    text: "We have two coffee machines and a water cooler at our two office locations, all from...",
    verified: true,
  },
  {
    name: "Becky,",
    date: "15 April",
    rating: 5,
    text: "We have been using The Office Coffee Co for several years. Excellent service - so mu...",
    verified: true,
  },
  {
    name: "customer,",
    date: "11 April",
    rating: 5,
    text: "Fin & Sophie made our installation and post installation check in very convenient! Gr...",
    verified: true,
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-amber-800 font-medium text-sm uppercase tracking-wide mb-4">
            GREAT REVIEWS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
            Hear what our customers say
          </h2>
        </div>

        {/* Trustpilot Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-green-500 text-green-500"
                    />
                  ))}
                  {review.verified && (
                    <span className="ml-2 text-xs text-gray-600">✓ Verified</span>
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {review.text}
                </p>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">{review.name}</span>{" "}
                  {review.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trustpilot Summary */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-2">
            <span className="text-sm text-gray-600 mr-2">Rated</span>
            <span className="text-sm font-bold text-gray-900">4.9 / 5</span>
            <span className="text-sm text-gray-600 ml-2">
              based on 344 reviews
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Showing our 4 & 5 star reviews.
          </p>
          <div className="flex items-center justify-center mb-6">
            <span className="text-green-600 font-bold text-lg">★ Trustpilot</span>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
            MORE REVIEWS
          </Button>
        </div>
      </div>
    </section>
  );
}
