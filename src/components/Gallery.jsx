const galleryImages = [
  "michele-blackwell-rAyCBQTH7ws-unsplash 2.png",
  "images.jfif",
  "christian-coquet-p1sdBSnS3Qc-unsplash.png",
  "cala-w6ftFbPCs9I-unsplash.png",
];

function Gallery() {
  return (
    <section className="relative py-4 px-6 md:px-16 bg-[#0C0C0C] text-white flex items-center justify-center overflow-hidden">
      <img
        src="./Img/Mask Group.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-15 pointer-events-none"
      />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-7xl">
        <div className="flex-1 flex flex-col items-start max-w-md w-full">
          <p className="font-['Cormorant_Garamond'] text-lg md:text-xl text-white tracking-wider capitalize">
            Instagram
          </p>

          <div className="my-2">
            <img src="./Img/Frame 17.svg" alt="Icon" className="w-[45px]" />
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl font-bold text-[#DCCA87] tracking-wide capitalize mt-2 mb-6">
            Photo Gallery
          </h2>

          <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm md:text-base leading-[1.8] mb-8">
            Capturing the essence of fine dining through our lens. From artfully
            plated dishes to vibrant evening moments, explore our visual story.
          </p>

          <button className="bg-[#DCCA87] text-[#0C0C0C] font-['Cormorant_Garamond'] font-bold text-base px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer whitespace-nowrap">
            View More
          </button>
        </div>

        <div className="flex-1 w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="relative w-full h-[280px] sm:h-[350px] overflow-hidden group cursor-pointer border border-[#DCCA87]/20 bg-[#1A1A1A]"
            >
              <img
                src={`./Img/${image}`}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="fa-brands fa-instagram text-white text-4xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
