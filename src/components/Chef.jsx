function Chef() {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-[#0C0C0C] text-white flex items-center justify-center min-h-screen overflow-hidden">
      <img
        src="./Img/Mask Group.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-50"
      />

      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-6xl">
        <div className="flex-1 flex justify-center items-center w-full max-w-[550px]">
          <div className="relative w-full aspect-[8/10] max-w-[550px]">
            <div className="absolute -top-5 -right-5 w-[60%] h-[60%] border-t-[88px] border-r-[88px] border-[#DCCA87] z-0"></div>

            <div className="absolute -bottom-5 -left-5 w-[70%] h-[70%] border-b-[88px] border-l-[88px] border-[#DCCA87] z-0"></div>

            <div className="relative z-10 w-full h-full bg-[#1A1A1A] border border-[#DCCA87]/20 flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src="./Img/pexels-ron-lach-8879653 1.png"
                alt="Chef Kevin Luo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-start max-w-xl text-left">
          <div className="flex flex-col items-start gap-2 mb-8">
            <p className="font-['Cormorant_Garamond'] text-lg md:text-xl text-white tracking-wider capitalize">
              Chef's Word
            </p>

            <img src="./Img/Frame 17.svg" alt="Icon" className="w-[45px]" />

            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl font-bold text-[#DCCA87] tracking-wide capitalize mt-2 leading-tight">
              What We Believe In
            </h2>
          </div>

          <div className="flex flex-col gap-6 my-2">
            <div className="flex items-start gap-3">
              <span className="font-['Cormorant_Garamond'] text-5xl md:text-6xl text-white leading-none select-none shrink-0">
                “
              </span>

              <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm md:text-base leading-[1.8] italic">
                We believe that extraordinary meals begin with absolute respect
                for our ingredients. Every plate we serve carries a story of
                passion, craftsmanship, and a commitment to creating memorable
                moments around the table.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-8">
            <h4 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#DCCA87] tracking-wider capitalize">
              Kevin Luo
            </h4>

            <p className="text-[#AAAAAA] text-xs md:text-sm font-['Open_Sans'] tracking-wider">
              Chef & Founder
            </p>
          </div>

          <div className="mt-10">
            <p className="font-['Great_Vibes'] italic text-3xl md:text-4xl text-[#AAAAAA] tracking-widest">
              Kevin Luo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chef;
