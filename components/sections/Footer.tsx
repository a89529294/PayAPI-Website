import React from "react";
import Link from "next/link";

import PayAPI from "../company-logos/PayAPI";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col items-center pt-10 pb-14 bg-mirage-blue gap-y-10">
      <PayAPI fill="white" />
      <nav className="flex flex-col gap-y-8">
        <Link href="/">
          <a className="font-bold font-body text-link-water-white/70">
            Pricing
          </a>
        </Link>
        <Link href="/">
          <a className="font-bold font-body text-link-water-white/70">About</a>
        </Link>
        <Link href="/">
          <a className="font-bold font-body text-link-water-white/70">
            Contact
          </a>
        </Link>
      </nav>
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
  );
}

export default Footer;
