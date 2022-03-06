import React from "react";
import Image from "next/image";
import PayAPI from "./company-logos/PayAPI";
import NavLinks from "./NavLinks";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full">
      <PayAPI />
      <div className="hidden sm:block sm:ml-16">
        <NavLinks color="text-velvet-rope/70" />
      </div>
      <Button
        size="medium"
        label="Schedule a demo"
        backgroundColor="bg-lilac-rose"
        color="text-link-water-white"
        extraClasses="hidden sm:block xl:ml-auto"
      />

      <div className="sm:hidden">
        <Image
          src="/images/burger.svg"
          alt="menu burger"
          width={28}
          height={17}
        />
      </div>
    </nav>
  );
}
