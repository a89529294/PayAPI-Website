import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";

import phoneImg from "../assets/illustration-phone-mockup.svg";

const Home: NextPage = () => {
  return (
    <div className="container px-6 pt-10 pb-20 bg-aircraft-white">
      <Head>
        <title>PayAPI - Home</title>
      </Head>
      <Navbar />
      <Image src={phoneImg} alt="phone" />
    </div>
  );
};

export default Home;
