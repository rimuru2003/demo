import "./App.css";
import About from "./component/aboutus/About";
import Doc from "./component/document_Scroll/Doc";
import Hero from "./component/hero/Hero";

import Navbar from "./component/navbar/Navbar";
import Videos from "./component/video_page/Video";

function App() {
  return (
    <div className="App ">

      <Navbar />
      {/* <Hero /> */}
      {/* <Videos /> */}
      <Doc />
    </div>
  );
}

export default App;
