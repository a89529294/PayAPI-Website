import Head from "next/head";
import Image from "next/image";

import Navbar from "../Navbar";
import DemoForm from "../DemoForm";

const Hero = () => {
  return (
    <div className="container flex flex-col items-center px-6 pt-10 pb-20 text-center bg-no-repeat bg-aircraft-white bg-hero-pattern bg-hero-position">
      <Head>
        <title>PayAPI - Home</title>
      </Head>
      <Navbar />
      <div className="relative w-32 mt-8 mb-6 shadow-2xl h-60">
        <Image
          src="/images/illustration-phone-mockup.svg"
          alt="phone"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <DemoForm title="Start building with our APIs for absolutely free." />
      <p className="mt-6 text-center font-body text-gilneas-grey">
        Have any questions? <span className="font-bold">Contact Us</span>
      </p>
    </div>
  );
};

export default Hero;
