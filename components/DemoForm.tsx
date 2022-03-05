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
      <form className="mt-7">
        <Input extraClasses="mb-4" />
        <Button
          size="large"
          label="Schedule a Demo"
          backgroundColor="bg-lilac-rose"
          color="text-white"
        />
      </form>
    </div>
  );
}

export default DemoForm;
