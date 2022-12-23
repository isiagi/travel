import React from "react";
import Banner from "../../components/banner/Banner";
import Banner1 from "../../components/banner1/Banner1";
import Destination from "../../components/destination/Destination";
import Hero from "../../components/hero/Hero";
import Packages from "../../components/packages/Packages";
import Show from "../../components/show/Show";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Hero />
      <Destination />
      <Banner />
      <Show />
      <Packages />
      <Banner1 />
    </div>
  );
};

export default Home;
