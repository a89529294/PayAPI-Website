import React from "react";
import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import PricingPlan from "../components/PricingPlan";
import DemoForm from "../components/DemoForm";
import Footer from "../components/sections/Footer";
import PricingPlans from "../components/sections/pricing/PricingPlans";

const Pricing: NextPage = () => {
  return (
    <div className="relative sm:min-h-screen">
      <PricingPlans />
      {/* <Footer invis /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Pricing;
