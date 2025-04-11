import {
  contact,
  contact1,
  contact2,
  contact3,
  contact4,
  form,
  news1,
  news2,
} from "@/app/assets/images/portifolio";
import { ImageRoot } from "@/components/image-root/image.root";
import { FlexContainerRoot } from "@/components/layout-root/flex/flex-container.root";
import ContentAbount from "@/components/protfolio/portfolio-content/content-about";
import ContentGallery from "@/components/protfolio/portfolio-content/content-gallery";
import ContentMotto from "@/components/protfolio/portfolio-content/content-motto";
import ContentPortfolio from "@/components/protfolio/portfolio-content/content-portfolio";
import ContentServices from "@/components/protfolio/portfolio-content/content-services";
import ContentSkills from "@/components/protfolio/portfolio-content/content-skills";
import ContentTestimonials from "@/components/protfolio/portfolio-content/content-testimonials";
import PortfolioHeader from "@/components/protfolio/portfolio-header/portfolio-header";

export default function PortfolioPage() {
  return (
    <FlexContainerRoot className="bg-primary">
      <PortfolioHeader />
      <main>
        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Motto --> */}
        <ContentMotto />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* About me --> */}
        <ContentAbount />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Gallery --> */}
        <ContentGallery />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Skills --> */}
        <ContentSkills />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Portfolio --> */}
        <ContentPortfolio />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Services --> */}
        <ContentServices />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Testimonials --> */}
        <ContentTestimonials />

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* News --> */}
        <section>
          <div>
            <div>
              <h6>news</h6>
              <h2>Across the world of Photography</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              corporis eveniet, doloribus impedit fuga eum accusamus Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ab corrupti sapiente
              illo sint animi inventore
            </p>

            <a href="#">View News</a>
          </div>

          <div>
            <div>
              <ImageRoot src={news1.src} />
              <h3>Model Photoshoot</h3>
              <h6>Dec 24, 2027</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia consectetur obcaecati ut nihil placeat.
              </p>
              <a href="#">
                <span>Read More</span> <i></i>
              </a>
            </div>

            <div>
              <ImageRoot src={news2.src} />
              <h3>Company Profile</h3>
              <h6>Jan 24, 2028</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia consectetur obcaecati ut nihil placeat.
              </p>
              <a href="#">
                <span>Read More</span> <i></i>
              </a>
            </div>
          </div>
        </section>

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Contact --> */}
        <section>
          <div>
            <div>
              <h6>lets talk</h6>
              <h2>Keep In Touch</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              corporis eveniet, doloribus impedit fuga eum accusamus Lorem ipsum
              dolor sit amet consectetur
            </p>

            <a href="#">Lets Chat</a>
          </div>

          <ImageRoot src={contact.src} />
        </section>
      </main>

      {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Contact Form --> */}
      <footer>
        <div>
          <ImageRoot src={form.src} />

          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div>
          <div>
            <h6>lets talk</h6>
            <h2>Keep In Touch</h2>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            corporis eveniet, doloribus impedit fuga eum accusamus Lorem
          </p>

          <div>
            <div>
              <ImageRoot src={contact1.src} />

              <h6>Phone Number</h6>
              <p>123-234-1234</p>
            </div>

            <div>
              <ImageRoot src={contact2.src} />

              <h6>Email address</h6>
              <p>cool@cool.com</p>
            </div>

            <div>
              <ImageRoot src={contact3.src} />

              <h6>Websites</h6>
              <p>www.cool.com</p>
            </div>

            <div>
              <ImageRoot src={contact4.src} />
              <h6>Address</h6>
              <p>177A Bleecker Street, NY</p>
            </div>
          </div>
        </div>
      </footer>
    </FlexContainerRoot>
  );
}
