function Hero() {
  return (
    <section className="container mx-auto px-6 md:px-16 py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative flex-1">
      <div className="hidden xl:flex flex-col items-center gap-12 absolute left-6 top-1/2 -translate-y-1/2 text-xs tracking-[0.2em] text-white z-20">
        <span className="[writing-mode:vertical-lr] rotate-180 hover:text-[#DCCA87] transition cursor-pointer">
          #Gericht
        </span>

        <span className="[writing-mode:vertical-lr] rotate-180 hover:text-[#DCCA87] transition cursor-pointer">
          #Bar
        </span>
      </div>

      <div className="flex-1 flex flex-col items-start max-w-xl xl:ml-12 z-10">
        <div className="flex flex-col items-start gap-2 mb-2">
          <p className="font-['Cormorant_Garamond'] text-lg md:text-xl text-white tracking-wider capitalize">
            Chase The New Flavour
          </p>

          <img src="./Img/Frame 17.svg" alt="Decoration" className="w-[45px]" />
        </div>

        <h1 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl xl:text-[88px] font-bold text-[#DCCA87] tracking-wide leading-[1.1] capitalize my-4 md:my-6">
          The Key To
          <br />
          Fine Dining
        </h1>

        <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm md:text-base leading-[1.8] mb-8 font-normal max-w-[440px]">
          Experience the art of fine dining where culinary passion meets
          exceptional taste. We craft unforgettable flavors with the finest
          seasonal ingredients.
        </p>

        <button className="bg-[#DCCA87] text-[#0C0C0C] font-['Cormorant_Garamond'] font-bold text-base px-7 py-2.5 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
          Explore Menu
        </button>
      </div>

      <div className="flex-1 flex justify-center items-center w-full">
        <div className="relative w-full aspect-[6/7] max-w-[500px]">
          <div className="absolute -top-6 -right-6 w-[70%] h-[70%] bg-[#DCCA87] z-0"></div>

          <div className="absolute -bottom-6 -left-6 w-[70%] h-[70%] bg-[#DCCA87] z-0"></div>

          <div className="relative z-10 w-full h-full bg-[#1A1A1A] border border-[#DCCA87]/20 flex items-center justify-center overflow-hidden shadow-2xl">
            <img
              src="./Img/295d43ccf99feacf040ed3f0557709a0ae5610ed.jpg"
              alt="Dish"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
