import React from "react";
import Button from "./Button";
import CheckMark from "./CheckMark";
import Divider from "./Divider";
import SectionBodyText from "./SectionBodyText";
import SectionTitle from "./SectionTitle";

const arr = [
  "Transactions",
  "Auth",
  "identity",
  "Investments",
  "Asets",
  "Liabilities",
  "Income",
];

interface LiProps {
  children: string;
  checkMarkVisible?: boolean;
  dim?: boolean;
}

const Li = ({ children, checkMarkVisible = false, dim = false }: LiProps) => (
  <li className="flex items-center gap-x-6">
    <CheckMark visible={checkMarkVisible} />
    <SectionBodyText
      color={`${dim ? "text-velvet-rope/50" : "text-velvet-rope"}`}
      noWidth
    >
      {children}
    </SectionBodyText>
  </li>
);

interface PricingPlanProps {
  title: string;
  text: string;
  price: string;
  numberOfVisibleCheckMarks: number;
}

function PricingPlan({
  title,
  text,
  price,
  numberOfVisibleCheckMarks,
}: PricingPlanProps) {
  return (
    <div className="flex flex-col items-center text-center xl:text-left xl:items-start">
      <SectionTitle text={title} color="text-lilac-rose" size="small" />
      <SectionBodyText
        color="text-light-san-juan-blue"
        extraClasses="mt-4 mb-2 max-w-[24ch] sm:mb-8 xl:max-w-none"
        noWidth
      >
        {text}
      </SectionBodyText>
      <SectionTitle
        text={price}
        color="text-velvet-rope"
        size="price"
        extraClasses="mb-6"
      />
      <Divider />
      <ul className="flex flex-col my-6 text-left sm:gap-y-2">
        {arr.map((text, i) => (
          <Li
            key={i}
            checkMarkVisible={i < numberOfVisibleCheckMarks}
            dim={i >= numberOfVisibleCheckMarks}
          >
            {text}
          </Li>
        ))}
      </ul>
      <Divider />
      <Button
        size="medium"
        label="Request Access"
        backgroundColor="bg-inherit"
        color="text-velvet-rope"
        borderColor="border-velvet-rope"
        extraClasses="mt-6"
      />
    </div>
  );
}

export default PricingPlan;
