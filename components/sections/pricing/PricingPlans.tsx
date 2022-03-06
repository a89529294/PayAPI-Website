import React from "react";

import Navbar from "../../Navbar";
import SectionTitle from "../../SectionTitle";
import PricingPlan from "../../PricingPlan";
import DemoForm from "../../DemoForm";

const PricingPlans = () => {
  return (
    <div className="pt-10 pb-20 bg-no-repeat sm:w-full sm:h-full bg-aircraft-white bg-hero-pattern bg-pricing-position sm:bg-pricing-position-tablet sm:pb-24 xl:bg-pricing-position-desktop">
      <div className="flex flex-col px-6 xl:container sm:gap-0 sm:px-10 xl:px-20 xl:gap-0">
        <Navbar />
        <SectionTitle
          text="Pricing"
          color="text-velvet-rope"
          extraClasses="my-12 sm:mt-20 sm:mb-16 "
        />
        <div className="flex flex-col mb-20 gap-y-12 sm:flex-row sm:gap-x-2 sm:justify-between xl:gap-x-8 sm:mb-24">
          <PricingPlan
            title="Free Plan"
            text="Build and test using our core set of products with up to 100 API requests"
            price="$0.00"
            numberOfVisibleCheckMarks={4}
          />
          <PricingPlan
            title="Basic Plan"
            text="Launch your project with unlimited requests and no contractual minimums"
            price="$249.00"
            numberOfVisibleCheckMarks={5}
          />
          <PricingPlan
            title="Premium Plan"
            text="Get tailored solutions, volume pricing, and dedicated support for your team"
            price="$449.00"
            numberOfVisibleCheckMarks={7}
          />
        </div>
        <DemoForm title="Ready to start?" row />
      </div>
    </div>
  );
};

export default PricingPlans;
