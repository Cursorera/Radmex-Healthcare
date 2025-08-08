import { useState } from 'react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      title: "Ferimex FCM Injection",
      category: "Injectable Range",
      image: "/Ferimex-FCM-bottle.jpeg",
    },
    {
      id: 2,
      title: "Ferimex LP",
      category: "Nephrological Range",
      image: "/Ferimex.png",
    },
    {
      id: 3,
      title: "Renomex N",
      category: "Nephrological Range",
      image: "/Renomex.png",
    },
    {
      id: 4,
      title: "Racidosis EC",
      category: "Nephrological Range",
      image: "/Racidosis.png",
    },
    {
      id: 5,
      title: "Phosless 667",
      category: "Nephrological Range",
      image: "/Phosless-667.jpeg"
    },
    {
      id: 6,
      title: "Velamex",
      category: "Nephrological Range",
      image: "/Velamex.png"
    },
    {
      id: 7,
      title: "Racitrol-0.25",
      category: "Nephrological Range",
      image: "/Recitrol.png"
    },
    {
      id: 8,
      title: "KETRENA-DS",
      category: "Nephrological Range",
      image: "/Ketrena.png"
    },
    {
      id: 9,
      title: "MEXTROL",
      category: "Nephrological Range",
      image: "/Mextrol-160.png"
    },
    {
      id: 10,
      title: "PROPREX FORTE",
      category: "Nephrological Range",
      image: "/pro-prex-forte.png"
    },
    {
      id: 11,
      title: "K-LESS",
      category: "Nephrological Range",
      image: "/k-less.jpeg"
    },
    {
      id: 12,
      title: "VITINOX HP",
      category: "Nephrological Range",
      image: "/Vetinox-Hp.jpeg"
    },
    {
      id: 13,
      title: "VALCYCLE 450",
      category: "Immuno Suppressants Range",
      image: "/Valcycle.png"
    },
    {
      id: 14,
      title: "Tacrex",
      category: "Immuno Suppressants Range",
      image: "/Tacrex0.5.png"
    },
    {
      id: 15,
      title: "Mycorex - 360",
      category: "Immuno Suppressants Range",
      image: "/Mycorex-s360.png"
    },
    {
      id: 16,
      title: "Mycorex - 500",
      category: "Immuno Suppressants Range",
      image: "/Mycorex-500.png"
    },
      {
      id: 17,
      title: "Vitinox HP",
      category: "Immuno Suppressants Range",
      image: "/Vitinox-HP.jpeg"
    },
          {
      id: 18,
      title: "Tacrex - 0.25",
      category: "Immuno Suppressants Range",
      image: "/Tacrex-0.25.jpeg"
    },
              {
      id: 19,
      title: "Ketrena DS",
      category: "Immuno Suppressants Range",
      image: "/Ketrenca-DS.jpeg"
    },
    {
      id: 20,
      title: "Racidosis EC 500",
      category: "Immuno Suppressants Range",
      image: "/Racidosis-EC500.jpeg"
    },
    {
      id: 21,
      title: "Mycorex S 180",
      category: "Immuno Suppressants Range",
      image: "/Mycorex-S180.jpeg"
    },
    {
      id: 22,
      title: "Vitinox",
      category: "Immuno Suppressants Range",
      image: "/Vitinox.jpeg"
    },
    {
      id: 23,
      title: "Velamex-400",
      category: "Immuno Suppressants Range",
      image: "/Velamex-400.jpeg"
    },
    {
      id: 23,
      title: "Valcycle-450",
      category: "Immuno Suppressants Range",
      image: "/Valcycle-450.jpeg"
    },
    
  ];

  const categories = ["All", "Injectable Range", "Nephrological Range", "Immuno Suppressants Range"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section className="py-20 bg-secondary/5" id="all-products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Renal Medicines, Transplant Support & Nutrition</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our specialized products for kidney care: dialysis essentials, post-transplant management, electrolytes & supplements, and renal medical nutrition—trusted by providers across India.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-background text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedImage(image.image)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-medium mb-2">
                  {image.category}
                </span>
                <h3 className="text-lg font-semibold">{image.title}</h3>
                {/* Specialties */}
                {/* <div className="space-y-2">
                    <h5 className="font-semibold text-professional-gray text-sm">Key Specialties:</h5>
                    <div className="flex flex-wrap gap-2">
                      {image.specialties.map((specialty: any) => (
                        <span 
                          key={specialty}
                          // className={`text-xs px-3 py-1 rounded-full ${image.bgColor} ${image.color} font-medium`}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;