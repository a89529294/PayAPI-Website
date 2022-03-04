import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";

import phoneImg from "../assets/illustration-phone-mockup.svg";

const Home: NextPage = () => {
  return (
    <div className="container flex flex-col items-center px-6 pt-10 pb-20 bg-aircraft-white">
      <Head>
        <title>PayAPI - Home</title>
      </Head>
      <Navbar />
      <div className="relative w-32 mt-8 h-60">
        <Image src={phoneImg} alt="phone" layout="fill" objectFit="contain" />
      </div>
      <div>
        <h1 className="mt-6 text-3xl tracking-tight text-center font-display text-velvet-rope">
          Start building with our APIs for absolutely free.
        </h1>
      </div>
    </div>
  );
};

export default Home;
