import React from "react";

import SectionTitle from "../../SectionTitle";
import Tesla from "../../company-logos/Tesla";
import Microsoft from "../../company-logos/Microsoft";
import HewlettPackard from "../../company-logos/HewlettPackard";
import Oracle from "../../company-logos/Oracle";
import Google from "../../company-logos/Google";
import Nvidia from "../../company-logos/Nvidia";
import SectionBodyText from "../../SectionBodyText";
import Button from "../../Button";

function Associations() {
  return (
    <div className="bg-mirage-blue">
      <div className="flex flex-col items-center py-20 text-center sm:py-[5.5rem] xl:container xl:px-20 xl:flex-row xl:text-left xl:justify-between">
        <div className="flex flex-wrap items-center justify-between gap-y-10 w-80 sm:w-[33rem] xl:order-2">
          <Tesla fill="white" />
          <Microsoft fill="white" />
          <HewlettPackard fill="white" />
          <Oracle fill="white" />
          <Google fill="white" />
          <Nvidia fill="white" />
        </div>
        <div className="flex flex-col items-center xl:order-1 xl:items-start">
          <SectionTitle
            text="Who we work with"
            color="text-link-water-white"
            extraClasses="mt-14 sm:mt-16"
          />
          <SectionBodyText
            color="text-link-water-white/50"
            extraClasses="mt-4 sm:w-112"
          >
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </SectionBodyText>
          <Button
            size="small"
            label="About Us"
            backgroundColor="bg-inherit"
            color="text-link-water-white"
            borderColor="border-link-water-white"
            extraClasses="mt-14 sm:mt-8"
          />
        </div>
      </div>
    </div>
  );
}

export default Associations;
