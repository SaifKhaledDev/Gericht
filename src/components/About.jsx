function About() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-16 bg-cover flex items-center justify-center overflow-hidden min-h-[85vh]">
      <img
        src="./Img/Mask Group.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-['Cormorant_Garamond'] text-[260px] sm:text-[400px] md:text-[550px] font-bold text-[#AAAAAA]/15 leading-none">
          G
        </span>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl">
        <div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-[48px] font-bold text-[#DCCA87] capitalize tracking-wide whitespace-nowrap">
            About Us
          </h2>

          <div className="my-3 scale-x-[-1]">
            <img src="./Img/Frame 17.svg" alt="Icon" className="w-[45px]" />
          </div>

          <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm md:text-base leading-[1.8] my-4 max-w-[410px]">
            At Gericht, we blend traditional techniques with contemporary flair
            to create memorable dining experiences, crafted meticulously with
            the finest seasonal ingredients.
          </p>

          <button className="bg-[#DCCA87] text-[#0C0C0C] font-['Cormorant_Garamond'] font-bold text-base px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer whitespace-nowrap">
            Know More
          </button>
        </div>

        <div className="relative z-20 flex justify-center items-center shrink-0 my-4 md:my-0">
          <img
            src="./Img/savernake-knives-f4jl2ezowuM-unsplash 2.svg"
            alt="Knife"
            className="h-[280px] sm:h-[380px] md:h-[520px] object-contain drop-shadow-2xl"
          />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-[48px] font-bold text-[#DCCA87] capitalize tracking-wide whitespace-nowrap">
            Our History
          </h2>

          <div className="my-3">
            <img src="./Img/Frame 17.svg" alt="Icon" className="w-[45px]" />
          </div>

          <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm md:text-base leading-[1.8] my-4 max-w-[410px]">
            Founded in 1995, Gericht began as a small family bistro with a
            vision to revolutionize culinary traditions through passion,
            elegance, and timeless recipes.
          </p>

          <button className="bg-[#DCCA87] text-[#0C0C0C] font-['Cormorant_Garamond'] font-bold text-base px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer whitespace-nowrap">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
