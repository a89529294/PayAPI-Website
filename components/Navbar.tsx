import React from "react";
import Image from "next/image";

import logo from "../assets/logo.svg";
import burger from "../assets/burger.svg";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full">
      <Image src={logo} alt="logo" />
      <Image src={burger} alt="menu burger" />
    </nav>
  );
}
