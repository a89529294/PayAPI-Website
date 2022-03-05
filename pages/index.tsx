import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import Hero from "../components/sections/Hero";
import Associations from "../components/sections/Associations";
import Features from "../components/sections/Features";
import Footer from "../components/sections/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Associations />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
