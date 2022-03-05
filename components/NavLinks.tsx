import React from "react";
import Link from "next/link";

interface FooterLinksProps {
  color?: string;
}

function FooterLinks({ color = "text-link-water-white/70" }: FooterLinksProps) {
  return (
    <nav className={`flex flex-col gap-y-8 sm:flex-row sm:gap-x-10 ${color}`}>
      <Link href="/">
        <a className="font-bold font-body ">Pricing</a>
      </Link>
      <Link href="/">
        <a className="font-bold font-body ">About</a>
      </Link>
      <Link href="/">
        <a className="font-bold font-body ">Contact</a>
      </Link>
    </nav>
  );
}

export default FooterLinks;
