import FinancialAbount from "@/components/financial/financial-content/financial-about";
import FinacialAct from "@/components/financial/financial-content/financial-act";
import FinancialFeatures from "@/components/financial/financial-content/financial-features";
import FinancialProcess from "@/components/financial/financial-content/financial-process";
import FinacialTestimonial from "@/components/financial/financial-content/financial-testimonial";
import FinancialHeader from "@/components/financial/financial-header/financial-header";
import { ImageRoot } from "@/components/image-root/image.root";
import { shieldYellow } from "../assets/images/financial";
import FinacialPricing from "@/components/financial/financial-content/financial-pricing";
import FinacialQa from "@/components/financial/financial-content/financial-qa";

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
        <section className="default-container">
          <div className="default-content default-border">
            <div>
              <ImageRoot src={shieldYellow.src} />

              <div>
                <h2>Finance Made Easy</h2>
                <p>Providing top-notch services to our customers.</p>
              </div>

              <a href="#"> Get Started </a>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- -------------------------- Footer --> */}
      <footer className="default-container ">
        <div className="default-content default-border">
          <div>
            <div>
              <h2>FNX</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                perspiciatis mollitia ratione delectus vitae repellat, sequi aut
                voluptatibus adipisci natus corporis maiores .
              </p>
            </div>

            <div>
              <h3>Contact Us</h3>
              <p>1-500-123-4567</p>
              <p>1234 Main St, New York, NY 10001, USA</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FinancialPage;
