import React from "react";
import Image from "next/image";
import PayAPI from "./company-logos/PayAPI";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full">
      <PayAPI />
      <Image
        src="/images/burger.svg"
        alt="menu burger"
        width={28}
        height={17}
      />
    </nav>
  );
}
