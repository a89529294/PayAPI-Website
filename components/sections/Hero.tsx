import Head from "next/head";
import Image from "next/image";

import Navbar from "../Navbar";
import Input from "../Input";
import Button from "../Button";
import SectionTitle from "../SectionTitle";

const Hero = () => {
  return (
    <div className="container flex flex-col items-center px-6 pt-10 pb-20 text-center bg-no-repeat bg-aircraft-white bg-hero-pattern bg-hero-position">
      <Head>
        <title>PayAPI - Home</title>
      </Head>
      <Navbar />
      <div className="relative w-32 mt-8 shadow-2xl h-60">
        <Image
          src="/images/illustration-phone-mockup.svg"
          alt="phone"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <SectionTitle
        text="Start building with our APIs for absolutely free."
        color="text-velvet-rope"
        extraClasses="mt-6"
      />
      <form className="mt-6">
        <Input extraClasses="mb-4" />
        <Button
          size="large"
          label="Schedule a Demo"
          backgroundColor="bg-lilac-rose"
          color="text-white"
        />
      </form>

      <p className="mt-6 text-center font-body text-gilneas-grey">
        Have any questions? <span className="font-bold">Contact Us</span>
      </p>
    </div>
  );
};

export default Hero;
