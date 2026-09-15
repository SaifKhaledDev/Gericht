const awards = [
  {
    number: 2,
    icon: "Group (1).svg",
    title: "Bib Gourmond",
    text: "Recognized for serving exceptional quality food at accessible prices.",
  },
  {
    number: 1,
    icon: "Vector (1).svg",
    title: "Rising Star",
    text: "Awarded for culinary innovation and outstanding new dining experiences.",
  },
  {
    number: 4,
    icon: "Vector (3).svg",
    title: "AA Hospitality",
    text: "Honored for world-class hospitality, service, and atmosphere.",
  },
  {
    number: 3,
    icon: "vector (2).svg",
    title: "Outstanding Chef",
    text: "Celebrating mastery and dedication to fine culinary art.",
  },
];

function Laurels() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-16 lg:px-24 bg-[#0C0C0C] text-white flex items-center justify-center min-h-screen overflow-hidden">
      <img
        src="./Img/Mask Group.svg"
        alt="Background Texture"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-15 pointer-events-none"
      />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 max-w-7xl">
        <div className="flex-1 flex flex-col items-start w-full">
          <div className="flex flex-col items-start gap-3 mb-12">
            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-white tracking-wider">
              Awards & Recognition
            </p>

            <img src="./Img/Frame 17.svg" alt="Icon" className="w-[55px]" />

            <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl font-bold text-[#DCCA87] tracking-wide capitalize mt-2">
              Our Laurels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 w-full">
            {awards.map((award) => (
              <div key={award.title} className="flex items-start gap-6">
                <div className="relative flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                  <img
                    src={`./Img/${award.icon}`}
                    alt=""
                    className="w-full h-full object-contain"
                  />

                  <span className="text-2xl md:text-3xl font-bold text-[#AAAAAA] absolute">
                    {award.number}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-bold text-[#DCCA87]">
                    {award.title}
                  </h3>

                  <p className="text-[#AAAAAA] text-sm md:text-base font-['Open_Sans'] leading-relaxed">
                    {award.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative flex justify-center items-center w-full max-w-[500px] lg:max-w-[560px]">
          <div className="relative z-10 w-full aspect-[3/4] max-w-[500px] shadow-2xl overflow-hidden border border-[#DCCA87]/20">
            <img
              src="./Img/mgg-vitchakorn-J5ZivsKiu9c-unsplash 2.png"
              alt="Laurels Dish"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="absolute -bottom-22 -left-12 sm:-left-18 font-['Cormorant_Garamond'] text-[240px] sm:text-[340px] md:text-[520px] font-bold text-white/80 z-20 pointer-events-none select-none leading-none">
            G
          </span>
        </div>
      </div>
    </section>
  );
}

export default Laurels;
