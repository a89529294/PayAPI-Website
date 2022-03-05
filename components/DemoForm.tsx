import React from "react";

import SectionTitle from "./SectionTitle";
import Input from "./Input";
import Button from "./Button";

function DemoForm({ title }: { title: string }) {
  return (
    <div>
      <SectionTitle
        text={title}
        color="text-velvet-rope"
        extraClasses="mx-auto"
      />
      <form className="mt-7 sm:w-112 sm:relative">
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
