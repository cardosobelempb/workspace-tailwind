import FinacialHeading from "../shared/financial-heading";
import FinancialPringinCard from "./financial-pricing-card";

function FinacialPricing() {
  return (
    <section className="default-container">
      <div className="default-content default-border flex flex-col gap-y-10">
        <FinacialHeading title="Pricing" subtitle="No Hidden Fees" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          <FinancialPringinCard
            title="Basic"
            price="9.99"
            color="green"
            className="col-start-1 col-end-2 row-start-1 row-end-1"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />

          <FinancialPringinCard
            title="Professional"
            price="12.99"
            color="blue"
            className="col-start-2 col-end-3 row-start-1 -row-end-1"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />

          <FinancialPringinCard
            className="md:flex-row md:justify-between lg:flex-col md:gap-x-2 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-1"
            title="Premium"
            price="19.99"
            color="orange"
            features={["Feature 1", "Feature 2", "Feature 3"]}
          />
        </div>
      </div>
    </section>
  );
}

export default FinacialPricing;
