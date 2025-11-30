import "./App.css";
import Services from "./component/service/Services";
import Lenis from 'lenis'
import Hero from "./component/hero/Hero";
import ClickSpark from "./animation/ClickSpark";
import Moments from "./component/MOT/Moments";
import Client from "./component/client/Client";
import AboutLayout from "./component/aboutlayout/AboutLayout";
import TestimonialsCarousel from "./component/testimonial/Testimonial";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <ClickSpark
      sparkColor="#E61F25"
      sparkSize={10}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
    >
      <div className="App space-y-12 xl:space-y-16">
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
        <Client />
        <div id="feedbacks">
          <TestimonialsCarousel />
        </div>
         <Footer /> 
      </div>
    </ClickSpark>
  );
}

export default App;