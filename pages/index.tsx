import type { NextPage } from "next";

import Hero from "../components/sections/index/Hero";
import Associations from "../components/sections/index/Associations";
import Features from "../components/sections/index/Features";
import Footer from "../components/sections/Footer";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Hero />
      <Associations />
      <Features />
      <Footer invis />
      <Footer />
    </div>
  );
};

export default Home;
