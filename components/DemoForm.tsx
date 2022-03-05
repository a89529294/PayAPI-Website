import React from "react";

import SectionTitle from "./SectionTitle";
import Input from "./Input";
import Button from "./Button";

function DemoForm({
  title,
  extraTitleClasses,
  row,
}: {
  title: string;
  extraTitleClasses?: string;
  row?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center xl:items-start  ${
        row ? "xl:flex-row xl:w-full xl:justify-between xl:items-center" : ""
      }`}
    >
      <SectionTitle
        text={title}
        color="text-velvet-rope"
        extraClasses={extraTitleClasses}
      />
      <form
        className={`mt-7 sm:w-112 sm:relative sm:mt-10 ${
          row ? "order-1 xl:mt-0" : ""
        }`}
      >
        <Input extraClasses="mb-4 sm:mb-0" />
        <Button
          size="large"
          label="Schedule a Demo"
          backgroundColor="bg-lilac-rose"
          color="text-white"
          extraClasses="sm:hidden"
        />
        <Button
          size="medium"
          label="Schedule a Demo"
          backgroundColor="bg-lilac-rose"
          color="text-white"
          extraClasses="hidden sm:block sm:absolute right-0 top-0"
        />
      </form>
    </div>
  );
}

export default DemoForm;
