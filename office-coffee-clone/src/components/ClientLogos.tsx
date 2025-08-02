const clientLogos = [
  {
    name: "Adobo Room",
    logo: "https://ext.same-assets.com/304612688/665627830.webp",
  },
  {
    name: "Eagle Labs",
    logo: "https://ext.same-assets.com/304612688/985933954.webp",
  },
  {
    name: "DHL",
    logo: "https://ext.same-assets.com/304612688/1955280067.webp",
  },
  {
    name: "Lush",
    logo: "https://ext.same-assets.com/304612688/3649993174.webp",
  },
  {
    name: "Sir Richard McAlpine",
    logo: "https://ext.same-assets.com/304612688/1531291147.webp",
  },
  {
    name: "Tripadvisor",
    logo: "https://ext.same-assets.com/304612688/3221953279.webp",
  },
  {
    name: "UCL",
    logo: "https://ext.same-assets.com/304612688/228180399.webp",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 md:h-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
