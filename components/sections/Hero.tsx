import Head from "next/head";
import Image from "next/image";

import Navbar from "../Navbar";
import DemoForm from "../DemoForm";

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-6 pt-10 pb-20 text-center bg-no-repeat bg-aircraft-white bg-hero-pattern bg-hero-position sm:bg-hero-pattern-tablet sm:bg-hero-position-tablet sm:px-10 sm:pt-10 sm:pb-24">
      <Head>
        <title>PayAPI - Home</title>
      </Head>
      <Navbar />
      <div className="relative w-32 mt-8 mb-6 shadow-2xl sm:mb-12 h-60 sm:w-40 sm:h-76 sm:mt-12">
        <Image
          src="/images/illustration-phone-mockup.svg"
          alt="phone"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <DemoForm title="Start building with our APIs for absolutely free." />
      <p className="mt-6 text-center font-body text-gilneas-grey sm:mt-4">
        Have any questions? <span className="font-bold">Contact Us</span>
      </p>
    </div>
  );
};

export default Hero;
