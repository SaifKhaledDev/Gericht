function VideoSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <img
        src="./Img/jason-leung-poI7DelFiVA-unsplash.jpg"
        alt="Gericht Interior"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/45 z-0"></div>

      <div className="relative z-10 flex items-center justify-center">
        <button
          aria-label="Play Video"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#DCCA87] flex items-center justify-center bg-black/20 hover:bg-[#DCCA87]/20 transition-all duration-300 hover:scale-110 cursor-pointer"
        >
          <i className="fa-solid fa-play text-[#DCCA87] text-2xl"></i>
        </button>
      </div>
    </section>
  );
}

export default VideoSection;
