import { useEffect } from "react";
import "./App.css";
import Services from "./component/service/Services";
import Lenis from "lenis";
import Hero from "./component/hero/Hero";
import ClickSpark from "./animation/ClickSpark";
import Moments from "./component/MOT/Moments";
import AboutLayout from "./component/aboutlayout/AboutLayout";
import TestimonialsCarousel from "./component/testimonial/Testimonial";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Client from "./component/client/Client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Heros from "./v2/Hero";
import Herov from "./v3/Herov";
import AboutL from "./v3/AboutL"
import Moment from "./v2/Moment";
import TestimonialSlider from "./v2/Testimonials";
import Service from "./v2/Service";

function MainContent() {
  return (
    <div className=" space-y-12 xl:space-y-16">
      <Navbar />
      <Hero />
      <div id="about">
        <AboutLayout />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="works">
        <Moments />
      </div>
      <div>
        <Client />
      </div>
      <div id="feedbacks">
        <TestimonialsCarousel />
      </div>
      <Footer />
    </div>
  );
}

function MainContentTwo() {
  return (
    <div className=" space-y-12 xl:space-y-16">
      <Navbar />
      <Heros />
      <div id="about">
        <AboutLayout />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="works">
        <Moment />
      </div>
      <div>
        <Client />
      </div>
      <div id="feedbacks">
        <TestimonialSlider />
      </div>
      <Footer />
    </div>
  );
}

function MainContentThree() {
  return (
    <div className=" space-y-12 xl:space-y-16">
      <Navbar />
      <Herov />
      <div id="about">
        <AboutL />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="works">
        <Moment />
      </div>
      <div>
        <Client />
      </div>
      <div id="feedbacks">
        <TestimonialSlider />
      </div>
      <Footer />
    </div>
  );
}

function NavigateButton() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex gap-2 pointer-events-auto">
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 rounded-full bg-black text-white
                   opacity-60 hover:opacity-100 transition"
      >
        Go V1
      </button>

      <button
        onClick={() => navigate("/v2")}
        className="px-4 py-2 rounded-full bg-black text-white
                   opacity-60 hover:opacity-100 transition"
      >
        Go V2
      </button>

      
      <button
        onClick={() => navigate("/v3")}
        className="px-4 py-2 rounded-full bg-black text-white
                   opacity-60 hover:opacity-100 transition"
      >
        Go V3
      </button> 
     
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <ClickSpark
      sparkColor="#E61F25"
      sparkSize={10}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
    >
      <Router>
        <NavigateButton />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/v2" element={<MainContentTwo />} />
          <Route path="/v3" element={<MainContentThree />} />
        </Routes>
      </Router>
    </ClickSpark>
  );
}

export default App;
