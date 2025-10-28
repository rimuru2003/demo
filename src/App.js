import "./App.css";
import About from "./component/aboutus/About";
import Services from "./component/service/Services";
import Hero from "./component/hero/Hero";

import Navbar from "./component/navbar/Navbar";
import OurTeam from "./component/our_team/OurTeam";
import Moments from "./component/MOT/Moments";
import Client from "./component/client/Client";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <OurTeam /> */}
      <Moments />
      <Client />
    </div>
  );
}

export default App;
