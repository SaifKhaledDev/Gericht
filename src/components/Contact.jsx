function Contact() {
  return (
    <section className="relative py-20 md:py-28 px-6 md:px-16 bg-[#0C0C0C] text-white flex items-center justify-center min-h-screen overflow-hidden">
      <img
        src="./Img/Mask Group.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-15 pointer-events-none"
      />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-6xl">
        <div className="flex-1 flex flex-col items-start max-w-xl text-left w-full">
          <div className="flex flex-col items-start gap-2 mb-8">
            <p className="font-['Cormorant_Garamond'] text-lg md:text-xl text-white tracking-wider">
              Contact
            </p>

            <img src="./Img/Frame 17.svg" alt="Icon" className="w-[45px]" />

            <h2 className="font-['Cormorant_Garamond'] text-5xl sm:text-6xl md:text-7xl font-bold text-[#DCCA87] tracking-wide capitalize mt-2">
              Find Us
            </h2>
          </div>

          <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm md:text-base leading-relaxed mb-8">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>

          <div className="flex flex-col items-start gap-3 mb-10">
            <h4 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-bold text-[#DCCA87]">
              Opening Hours
            </h4>

            <div className="flex flex-col gap-2 font-['Open_Sans'] text-sm md:text-base text-[#AAAAAA]">
              <p>
                Mon - Fri:{" "}
                <span className="text-white">10:00 am - 02:00 am</span>
              </p>

              <p>
                Sat - Sun:{" "}
                <span className="text-white">10:00 am - 03:00 am</span>
              </p>
            </div>
          </div>

          <button className="bg-[#DCCA87] text-[#0C0C0C] font-['Cormorant_Garamond'] font-bold text-base px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
            Visit Us
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center w-full max-w-[500px]">
          <div className="relative w-full aspect-[7/8] max-w-[550px]">
            <div className="absolute -top-5 -right-5 w-[70%] h-[70%] border-t-[22px] border-r-[22px] border-[#DCCA87]"></div>

            <div className="absolute -bottom-5 -left-5 w-[70%] h-[70%] border-b-[22px] border-l-[22px] border-[#DCCA87]"></div>

            <div className="relative z-10 w-full h-full bg-[#1A1A1A] border border-[#DCCA87]/20 shadow-2xl overflow-hidden">
              <img
                src="./Img/vitor-pinto-bYSpfD0Wn04-unsplash 1.png"
                alt="Cocktail Drink"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
