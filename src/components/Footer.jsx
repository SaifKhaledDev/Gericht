function Footer() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <footer className="relative pt-20 pb-12 px-6 md:px-16 bg-[#0C0C0C] text-white flex flex-col justify-between overflow-hidden">
      <img
        src="./Img/Mask Group.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-15 pointer-events-none"
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="bg-[#0C0C0C] border border-[#DCCA87]/20 p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto mb-20 md:mb-28 shadow-2xl">
          <p className="font-['Cormorant_Garamond'] text-lg md:text-xl text-white tracking-wider">
            Newsletter
          </p>

          <div className="my-2 flex justify-center">
            <img src="./Img/Frame 17.svg" alt="Icon" className="w-[45px]" />
          </div>

          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl font-bold text-[#DCCA87] tracking-wide capitalize mt-2 mb-4">
            Subscribe To Our Newsletter
          </h2>

          <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm md:text-base mb-8">
            And never miss latest Updates!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto w-full"
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-transparent border border-[#DCCA87]/40 px-5 py-3 text-white placeholder-[#AAAAAA] font-['Cormorant_Garamond'] text-base focus:outline-none focus:border-[#DCCA87]"
            />

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#DCCA87] text-[#0C0C0C] font-['Cormorant_Garamond'] font-bold text-base px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black cursor-pointer whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center mb-16">
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#F5EFDB] mb-2">
              Contact Us
            </h3>

            <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm">
              9 W 53rd St, Mansoura, EGY
            </p>

            <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm">
              +201277178371
            </p>

            <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm">
              +201277178371
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-bold text-[#DCCA87] uppercase tracking-widest">
              Gerícht
            </h2>

            <p className="text-[#AAAAAA] font-['Open_Sans'] text-sm max-w-sm italic">
              The best way to find yourself is to lose yourself in the service
              of others.
            </p>

            <img src="./Img/Frame 17.svg" alt="Icon" className="w-[45px]" />

            <div className="flex items-center gap-4 text-white text-xl mt-1">
              <a href="#" className="hover:text-[#DCCA87] transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#" className="hover:text-[#DCCA87] transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a href="#" className="hover:text-[#DCCA87] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#F5EFDB] mb-2">
              Working Hours
            </h3>

            <div className="text-[#AAAAAA] font-['Open_Sans'] text-sm">
              <p>Monday-Friday:</p>
              <p>08:00 am - 12:00 am</p>
            </div>

            <div className="text-[#AAAAAA] font-['Open_Sans'] text-sm mt-2">
              <p>Saturday-Sunday:</p>
              <p>07:00 am - 11:00 pm</p>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-[#DCCA87]/10 pt-8">
          <p className="text-[#AAAAAA] font-['Open_Sans'] text-xs md:text-sm">
            2026 Eng.Saif khaled All Rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
