import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import About from "./about/About";
import Category from "./category/Category";
import Home from "./home/Home";

type Props = {};

const Index = (props: Props) => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Index;
