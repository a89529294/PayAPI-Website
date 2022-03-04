import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";

type InputProps = {
  type: "button" | "text";
};

const baseInputClasses = "w-full h-12 px-6 rounded-3xl";
const Input = ({ type }: InputProps) =>
  type === "text" ? (
    <input
      type="text"
      className={`${baseInputClasses} bg-white mt-6 placeholder:font-body placeholder:font-bold placeholder:text-velvet-rope/50`}
      placeholder="Enter email address"
    />
  ) : (
    <button className={`${baseInputClasses} bg-lilac-rose text-white mt-4`}>
      Schedule a Demo
    </button>
  );

const Home: NextPage = () => {
  return (
    <div className="container flex flex-col items-center px-6 pt-10 pb-20 bg-no-repeat bg-aircraft-white bg-hero-pattern bg-hero">
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
      <h1 className="mt-6 text-3xl tracking-tight text-center font-display text-velvet-rope max-w-[18ch]">
        Start building with our APIs for absolutely free.
      </h1>
      <Input type="text" />
      <Input type="button" />
      <p className="mt-6 text-center font-body text-gilneas-grey">
        Have any questions? <span className="font-bold">Contact Us</span>
      </p>
    </div>
  );
};

export default Home;
