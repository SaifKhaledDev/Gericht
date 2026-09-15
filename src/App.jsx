import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Chef from "./components/Chef";
import VideoSection from "./components/VideoSection";
import Laurels from "./components/Laurels";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <Chef />
      <VideoSection />
      <Laurels />
      <Gallery />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
