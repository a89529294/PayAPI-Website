import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full">
      <Image src="/images/logo.svg" alt="logo" width={135} height={38} />
      <Image
        src="/images/burger.svg"
        alt="menu burger"
        width={28}
        height={17}
      />
    </nav>
  );
}
