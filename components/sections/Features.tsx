import Image from "next/image";
import React from "react";
import DemoForm from "../DemoForm";
import SectionBodyText from "../SectionBodyText";
import SectionTitle from "../SectionTitle";

interface HooksProps {
  imgURL: string;
  imgHeight: string;
  imgAlt: string;
  title: string;
  children: string;
}

function Hooks({ imgURL, imgHeight, imgAlt, title, children }: HooksProps) {
  return (
    <div className="flex flex-col items-center ">
      <div className={`relative mb-12 w-80 h-52 ${imgHeight}`}>
        <Image
          src={imgURL}
          alt={imgAlt}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <SectionTitle text={title} color="text-velvet-rope" extraClasses="mb-6" />
      <SectionBodyText color="text-light-san-juan-blue">
        {children}
      </SectionBodyText>
    </div>
  );
}

interface CategoryProps {
  imgURL: string;
  imgAlt: string;
  title: string;
  children: string;
}

const Category = ({ imgURL, imgAlt, title, children }: CategoryProps) => (
  <div>
    <div className="relative mx-auto mb-8 w-28 h-28">
      <Image src={imgURL} alt={imgAlt} layout="fill" objectFit="contain" />
    </div>
    <h2 className="mb-4 text-lg font-bold font-body">{title}</h2>
    <SectionBodyText color="text-light-san-juan-blue">
      {children}
    </SectionBodyText>
  </div>
);

function Features() {
  return (
    <div className="flex flex-col items-center py-20 text-center gap-y-20">
      <Hooks
        imgURL="/images/easy-to-implement.svg"
        imgHeight="h-52"
        imgAlt="easy to implement illustration"
        title="Easy to implement"
      >
        Our API comes with just a few lines of code. You’ll be up and running in
        no time. We built our documentation page to integrate payments
        functionality with ease.
      </Hooks>
      <Hooks
        imgURL="/images/simple-ui.svg"
        imgHeight="h-72"
        imgAlt="simple ui & ux illustration"
        title="Simple UI & UX"
      >
        Our pre-built form is easy to integrate in your app or website’s
        checkout flow and designed to optimize conversion.
      </Hooks>
      <div className="flex flex-col items-center gap-y-12">
        <Category
          imgURL="/images/icon-personal-finances.svg"
          imgAlt="personal finance icon"
          title="Personal Finances"
        >
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </Category>
        <Category
          imgURL="/images/icon-banking-and-coverage.svg"
          imgAlt="banking icon"
          title="Banking & Coverage"
        >
          With our platform, you can speed up account onboarding and support
          ongoing payments for checking, savings, credit card, and brokerage
          accounts.
        </Category>
        <Category
          imgURL="/images/icon-consumer-payments.svg"
          imgAlt="consumer payment icon"
          title="Consumer Payments"
        >
          It’s easier to set up secure bank payments with us through a flow
          designed with the user experience in mind. Customers could instantly
          authenticate their account.
        </Category>
      </div>
      <DemoForm title="Ready to start?" />
    </div>
  );
}

export default Features;
