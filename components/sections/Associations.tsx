import Image from "next/image";
import React from "react";

import SectionTitle from "../SectionTitle";
import Tesla from "../company-logos/Tesla";
import Microsoft from "../company-logos/Microsoft";
import HewlettPackard from "../company-logos/HewlettPackard";
import Oracle from "../company-logos/Oracle";
import Google from "../company-logos/Google";
import Nvidia from "../company-logos/Nvidia";
import SectionBodyText from "../SectionBodyText";
import Button from "../Button";

function Associations() {
  return (
    <div className="flex flex-col items-center py-20 text-center bg-mirage-blue">
      <div className="flex flex-wrap items-center justify-between mx-12 gap-y-10">
        <Tesla fill="white" />
        <Microsoft fill="white" />
        <HewlettPackard fill="white" />
        <Oracle fill="white" />
        <Google fill="white" />
        <Nvidia fill="white" />
      </div>
      <SectionTitle
        text="Who we work with"
        color="text-white"
        extraClasses="mt-14"
      />
      <SectionBodyText color="text-link-water-white/70" extraClasses="mt-4">
        Today, millions of people around the world have successfully connected
        their accounts to apps they love using our API. We provide developers
        with the tools they need to create easy and accessible experiences for
        their users.
      </SectionBodyText>
      <Button
        size="small"
        label="About Us"
        backgroundColor="bg-inherit"
        color="text-link-water-white"
        extraClasses="mt-14"
      />
    </div>
  );
}

export default Associations;