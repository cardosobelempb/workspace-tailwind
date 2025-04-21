import FinancialAbount from "@/components/financial/financial-content/financial-about";
import FinancialHeader from "@/components/financial/financial-header/financial-header";
import { ImageRoot } from "@/components/image-root/image.root";
import {
  afterBlue,
  afterPink,
  businessFinance,
  carFinance,
  homeFinance,
  lifeFinance,
  otherFinance,
  quote,
  shieldGreen,
  shieldYellow,
  testimonial,
  travelFinance,
} from "../assets/images/financial";

const FinancialPage = () => {
  return (
    <>
      {/* <!-- -------------------------- Header --> */}
      <FinancialHeader />
      <main className="">
        {/* <!-- -------------------------- About --> */}
        <FinancialAbount />

        {/* <!-- -------------------------- Features --> */}
        <section className="default-container">
          <div className="default-content default-border">
            <div>
              <h2>Different Finances for Different Needs</h2>
              <p>Lorem ipsum dolor sit amet elit adipisicing elit.</p>
            </div>

            <div>
              <div>
                <ImageRoot src={homeFinance.src} />

                <h4>Home Finance</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <div>
                <ImageRoot src={carFinance.src} />

                <h4>Car Finance</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <div>
                <ImageRoot src={lifeFinance.src} />

                <h4>Life Finance</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <div>
                <ImageRoot src={businessFinance.src} />

                <h4>Business Finance</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <div>
                <ImageRoot src={travelFinance.src} />

                <h4>Travel Finance</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <div>
                <ImageRoot src={otherFinance.src} />

                <h4>Other Finance</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- -------------------------- Process --> */}
        <section className="default-container">
          <div className="default-content default-border">
            <div>
              <h2>Simplified Process</h2>
              <p>Easy as One, Two, Three</p>
            </div>

            <div>
              <div>
                <p>1</p>
                <h4>Step One</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <ImageRoot src={afterBlue.src} />

              <div>
                <p>2</p>
                <h4>Step Two</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <ImageRoot src={afterPink.src} />

              <div>
                <p>3</p>
                <h4>Step Three</h4>

                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- -------------------------- Testimonial --> */}
        <section className="default-container">
          <div className="default-content default-border">
            <div>
              <ImageRoot src={quote.src} />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                aperiam ipsum doloremque tempore blanditiis, velit nulla quam
                amet pariatur. Vero expedita in harum maiores nostrum dolor,
                libero veritatis excepturi eveniet.
              </p>

              <div>
                <h5>Jane Doe</h5>
                <p>Legal Consultant, XYZ Corps.</p>
              </div>
            </div>

            <ImageRoot src={testimonial.src} />
          </div>
        </section>

        {/* <!-- -------------------------- CTA --> */}
        <section className="default-container">
          <div className="default-content default-border">
            <div>
              <ImageRoot src={shieldGreen.src} />
              <div>
                <h2>Secure Your Future Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit.</p>
              </div>

              <a href="#"> Get Started </a>
            </div>
          </div>
        </section>

        {/* <!-- -------------------------- Pricing --> */}
        <section className="default-container">
          <div className="default-content default-border">
            <div>
              <h2>Pricing</h2>
              <p>No Hidden Fees</p>
            </div>

            <div>
              <div>
                <h6>Basic</h6>
                <h5>
                  <sup>$</sup>9.99
                </h5>

                <ul>
                  <li>
                    <span></span>Feature 1
                  </li>
                  <li>
                    <span></span>Feature 2
                  </li>
                  <li>
                    <span></span>Feature 3
                  </li>
                  <li>
                    <span></span>Feature 4
                  </li>
                </ul>

                <a href="#">Choose Plan</a>
              </div>

              <div>
                <h6>Professional</h6>

                <h5>
                  <sup>$</sup>12.99
                </h5>

                <ul>
                  <li>
                    <span></span>Feature 1
                  </li>
                  <li>
                    <span></span>Feature 2
                  </li>
                  <li>
                    <span></span>Feature 3
                  </li>
                  <li>
                    <span></span>Feature 4
                  </li>
                </ul>

                <a href="#">Choose Plan</a>
              </div>

              <div>
                <h6>Premium</h6>
                <h5>
                  <sup>$</sup>19.99
                </h5>

                <ul>
                  <li>
                    <span></span>Feature 1
                  </li>
                  <li>
                    <span></span>Feature 2
                  </li>
                  <li>
                    <span></span>Feature 3
                  </li>
                  <li>
                    <span></span>Feature 4
                  </li>
                </ul>

                <a href="#">Choose Plan</a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- -------------------------- Q&A --> */}
        <section className="default-container">
          <div className="default-content default-border">
            <div>
              <div>
                <h6>How do I start?</h6>
                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <div>
                <h6>Is my money safe?</h6>
                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <div>
                <h6>Can I cancel anytime?</h6>
                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>

              <div>
                <h6>How do I get support?</h6>
                <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
              </div>
            </div>
          </div>
        </section>

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
