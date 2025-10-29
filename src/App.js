import "./App.css";
import Services from "./component/service/Services";
import Hero from "./component/hero/Hero";
import ClickSpark from "./animation/ClickSpark";
import Navbar from "./component/navbar/Navbar";
import Moments from "./component/MOT/Moments";
import Client from "./component/client/Client";
import AboutLayout from "./component/aboutlayout/AboutLayout";
import TestimonialsCarousel from "./component/testimonial/Testimonial";
import Footer from "./component/footer/Footer";
// import InfoMediaCard from "./component/MOT/Pop";

function App() {
  return (
    <ClickSpark
      sparkColor="#E61F25"
      sparkSize={10}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
    >
      <div className="App space-y-16">
        // {/* <Navbar /> */}
        <Hero />
        <AboutLayout />
        <Services />
        <Moments />
        <Client />
        <TestimonialsCarousel />
        <Footer />
        // <InfoMediaCard />
      </div>
    </ClickSpark>
  );
}

export default App;
