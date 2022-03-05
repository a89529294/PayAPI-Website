import Head from "next/head";
import Image from "next/image";

import Navbar from "../Navbar";
import DemoForm from "../DemoForm";

const Hero = () => {
  return (
    <div className="bg-no-repeat bg-aircraft-white bg-hero-pattern bg-hero-position sm:bg-hero-pattern-tablet sm:bg-hero-position-tablet">
      <div className="flex flex-col items-center px-6 pt-10 pb-20 text-center sm:px-10 sm:pt-10 sm:pb-20 xl:px-20 xl:container">
        <Head>
          <title>PayAPI - Home</title>
        </Head>
        <Navbar />
        <div className="flex flex-col items-center xl:flex-row xl:w-full">
          <div className="relative w-32 mt-8 mb-6 drop-shadow-2xl sm:mb-12 h-60 sm:w-40 sm:h-76 sm:mt-12 xl:order-2 xl:ml-52 xl:w-64 xl:h-125">
            <Image
              src="/images/illustration-phone-mockup.svg"
              alt="phone"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="xl:order-1">
            <DemoForm title="Start building with our APIs for absolutely free." />
            <p className="mt-6 text-center font-body text-light-san-juan-blue sm:mt-4">
              Have any questions? <span className="font-bold">Contact Us</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
