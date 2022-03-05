import React from "react";
import Link from "next/link";

import PayAPI from "../company-logos/PayAPI";
import Image from "next/image";
import NavLinks from "../NavLinks";

function Footer() {
  return (
    <footer className="bg-mirage-blue">
      <div className="flex flex-col items-center px-10 pt-10 bg-no-repeat xl:container xl:px-20 pb-14 gap-y-10 bg-hero-pattern bg-footer-position sm:py-8 sm:flex-row sm:justify-between">
        <PayAPI fill="white" />
        <NavLinks />
        <div className="flex gap-x-6">
          <Image
            src="/images/facebook.svg"
            alt="facebook icon"
            width={24}
            height={24}
          />
          <Image
            src="/images/twitter.svg"
            alt="twitter icon"
            width={24}
            height={24}
          />
          <Image
            src="/images/linkedin.svg"
            alt="linkedin icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
