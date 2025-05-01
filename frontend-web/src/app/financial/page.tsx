import FinancialAbount from "@/components/financial/financial-content/financial-about";
import FinacialAct from "@/components/financial/financial-content/financial-act";
import FinacialActOrange from "@/components/financial/financial-content/financial-act-orange";
import FinancialFeatures from "@/components/financial/financial-content/financial-features";
import FinacialPricing from "@/components/financial/financial-content/financial-pricing";
import FinancialProcess from "@/components/financial/financial-content/financial-process";
import FinacialQa from "@/components/financial/financial-content/financial-qa";
import FinacialTestimonial from "@/components/financial/financial-content/financial-testimonial";
import FinacialFooter from "@/components/financial/financial-footer/finacial-footer";
import FinancialHeader from "@/components/financial/financial-header/financial-header";

const FinancialPage = () => {
  return (
    <>
      {/* <!-- -------------------------- Header --> */}
      <FinancialHeader />
      <main className="">
        {/* <!-- -------------------------- About --> */}
        <FinancialAbount />

        {/* <!-- -------------------------- Features --> */}

        <FinancialFeatures />

        {/* <!-- -------------------------- Process --> */}
        <FinancialProcess />

        {/* <!-- -------------------------- Testimonial --> */}
        <FinacialTestimonial />

        {/* <!-- -------------------------- CTA --> */}
        <FinacialAct />

        {/* <!-- -------------------------- Pricing --> */}
        <FinacialPricing />

        {/* <!-- -------------------------- Q&A --> */}
        <FinacialQa />

        {/* <!-- -------------------------- CTA --> */}
        <FinacialActOrange />
      </main>
      {/* <!-- -------------------------- Footer --> */}
      <FinacialFooter />
    </>
  );
};

export default FinancialPage;
