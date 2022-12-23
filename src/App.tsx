import { useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Destination from "./components/destination/Destination";
import Banner from "./components/banner/Banner";
import Packages from "./components/packages/Packages";
import Footer from "./components/footer/Footer";
import Banner1 from "./components/banner1/Banner1";
import Show from "./components/show/Show";
import About from "./pages/about/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Show />
      <Destination />
      <Banner />
      <Packages />
      <Banner1 />
      <Footer />
      <About />
    </div>
  );
}

export default App;
