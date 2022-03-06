import Image from "next/image";
import React from "react";
import DemoForm from "../../DemoForm";
import SectionBodyText from "../../SectionBodyText";
import SectionTitle from "../../SectionTitle";

interface HooksProps {
  imgURL: string;
  imgSize: string;
  imgAlt: string;
  title: string;
  children: string;
  swap?: boolean;
}

function Hooks({ imgURL, imgSize, imgAlt, title, children, swap }: HooksProps) {
  return (
    <div className="flex flex-col items-center xl:flex-row xl:justify-between xl:w-full">
      <div
        className={`relative mb-12 drop-shadow-2xl ${imgSize} xl:mb-0 ${
          swap ? "xl:order-2" : ""
        }`}
      >
        <Image
          src={imgURL}
          alt={imgAlt}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className={`${swap ? "xl:order-1" : ""}`}>
        <SectionTitle
          text={title}
          color="text-velvet-rope"
          extraClasses="mb-6"
        />
        <SectionBodyText
          color="text-light-san-juan-blue"
          extraClasses="sm:w-140 xl:text-left xl:w-112"
        >
          {children}
        </SectionBodyText>
      </div>
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
    <div className="relative mx-auto mb-8 w-28 h-28 sm:w-22 sm:h-22 xl:w-28 xl:h-28">
      <Image src={imgURL} alt={imgAlt} layout="fill" objectFit="contain" />
    </div>
    <h2 className="mb-4 text-lg font-bold font-body">{title}</h2>
    <SectionBodyText
      color="text-light-san-juan-blue"
      extraClasses="sm:w-56 xl:w-87"
    >
      {children}
    </SectionBodyText>
  </div>
);

function Features() {
  return (
    <div className="bg-no-repeat bg-aircraft-white bg-hero-pattern bg-features-position">
      <div className="flex flex-col items-center px-6 py-20 text-center xl:container xl:px-20 gap-y-20 sm:gap-y-24 sm:py-24 xl:py-36 xl:gap-y-36 xl:pb-24">
        <Hooks
          imgURL="/images/easy-to-implement.svg"
          imgSize="h-52 w-80 sm:w-96 sm:h-64 xl:w-112 xl:h-72"
          imgAlt="easy to implement illustration"
          title="Easy to implement"
        >
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </Hooks>
        <Hooks
          imgURL="/images/simple-ui.svg"
          imgSize="h-72 w-80 sm:w-96 sm:h-80 xl:w-140 xl:h-125"
          imgAlt="simple ui & ux illustration"
          title="Simple UI & UX"
          swap
        >
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </Hooks>
        <div className="flex flex-col items-center gap-y-12 sm:flex-row sm:items-start sm:gap-x-3 xl:w-full xl:justify-between">
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
        <DemoForm title="Ready to start?" row />
      </div>
    </div>
  );
}

export default Features;
