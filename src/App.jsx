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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heros from "./v2/Hero";
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
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/v2" element={<MainContentTwo />} />
        </Routes>
      </Router>
    </ClickSpark>
  );
}

export default App;
