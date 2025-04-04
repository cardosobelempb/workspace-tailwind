import { ChevronRight } from "lucide-react";

import {
  abount,
  client,
  contact,
  contact1,
  contact2,
  contact3,
  contact4,
  form,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  news1,
  news2,
  portfolio1,
  portfolio2,
  service1,
  service2,
  service3,
  service4,
  skills,
  testimonial,
} from "@/app/assets/images/portifolio";
import { ImageRoot } from "@/components/image-root/image.root";
import PortfolioHeader from "@/components/protfolio/portfolio-header/portfolio-header";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHeader />

      <main>
        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Motto --> */}
        <section>
          <div>
            <blockquote cite="https://www.azquotes.com/author/8044-Martin_Luther_King_Jr/tag/brother">
              <p>
                Weve learned to fly the air like birds, weve learned to swim the
                seas like fish, and yet we havent learned to walk the earth as
                brothers and sisters.
              </p>
            </blockquote>
            <p>
              — Martin Luther King, Jr., <cite>Love</cite>
            </p>
          </div>
        </section>

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* About me --> */}
        <section>
          <div>
            <div>
              <div>
                <h6>About me</h6>
                <h2>Professional Photographer</h2>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora corporis eveniet, doloribus impedit fuga eum accusamus
                  libero recusandae modi odio, a voluptatem necessitatibus? Eos,
                  commodi!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium doloremque nesciunt quod sapiente voluptates?
                  Natus nihil ab illum corrupti quos?
                </p>
              </div>
            </div>

            <div>
              <h3>My Awards</h3>

              <ul>
                <li>
                  <ChevronRight />
                  <span>Award 1</span>
                </li>
                <li>
                  <ChevronRight />
                  <span>Award 2</span>
                </li>
                <li>
                  <ChevronRight />
                  <span>Award 3</span>
                </li>
              </ul>
            </div>
          </div>

          <ImageRoot src={abount.src} />
        </section>

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Gallery --> */}
        <section>
          <ImageRoot
            src={gallery1.src}
            isCaption
            captionTitle="Gallery Image"
          />

          <ImageRoot
            src={gallery2.src}
            isCaption
            captionTitle="Gallery Image"
          />

          <ImageRoot
            src={gallery3.src}
            isCaption
            captionTitle="Gallery Image"
          />

          <ImageRoot
            src={gallery4.src}
            isCaption
            captionTitle="Gallery Image"
          />

          <ImageRoot
            src={gallery5.src}
            isCaption
            captionTitle="Gallery Image"
          />
        </section>

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Skills --> */}
        <section>
          <div>
            <div>
              <h6>My Skills</h6>
              <h2>I am experienced in the following fields</h2>
            </div>

            <div>
              <p>
                Lorem ipsum dolor recusandae modi odio, a voluptatem Eos,
                commodi!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium doloremque nesciunt
              </p>
            </div>

            <div>
              <div>
                <h5>Photography</h5>
                <div>95%</div>
              </div>

              <div>
                <h5>Design Thinking</h5>
                <div>90%</div>
              </div>

              <div>
                <h5>Videography</h5>
                <div>80%</div>
              </div>

              <div>
                <h5>Social Innovation</h5>
                <div>85%</div>
              </div>
            </div>
          </div>

          <figure>
            <ImageRoot src={skills.src} />
          </figure>
        </section>

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Portfolio --> */}
        <section>
          <div>
            <div>
              <h6>My Portfolio</h6>
              <h2>Recent Works</h2>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora corporis eveniet, doloribus impedit fuga eum accusamus
                libero recusandae modi odio, a voluptatem necessitatibus? Eos,
                commodi!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium doloremque nesciunt quod sapiente voluptates? Natus
                nihil ab illum corrupti quos?
              </p>
            </div>
          </div>

          <div>
            <ImageRoot src={portfolio1.src} />

            <ImageRoot src={portfolio2.src} />
          </div>
        </section>

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Services --> */}
        <section>
          <div>
            <div>
              <h6>why choose me</h6>
              <h2>Best Services for you</h2>
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempora corporis eveniet, doloribus impedit
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium
              </p>
            </div>

            <a href="#">Learn More</a>
          </div>

          <div>
            <div>
              <ImageRoot src={service1.src} />

              <h5>Wedding</h5>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>

            <div>
              <ImageRoot src={service2.src} />

              <h5>Company Profile</h5>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>

            <div>
              <figure>
                <ImageRoot src={service3.src} />
              </figure>

              <h5>Model Photoshoot</h5>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>

            <div>
              <figure>
                <ImageRoot src={service4.src} />
              </figure>

              <h5>Videography</h5>
              <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
            </div>
          </div>
        </section>

        {/* <!-- *-*-*-*-*-*-*-*-*-*-*-*-* Testimonials --> */}
        <section>
          <div>
            <div>
              <h6>testimonials</h6>
              <h2>what my cliens say</h2>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              corporis eveniet, doloribus impedit fuga eum accusamus
            </p>

            <a href="#">View Testimonials</a>
          </div>

          <div>
            <ImageRoot src={testimonial.src} />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              nisi delectus reprehenderit magni rerum recusandae vero aliquam,
              repudiandae in perspiciatis omnis, repellendus neque sapiente ab
              beatae explicabo tempora. Amet, ex.
            </p>

            <div>
              <ImageRoot src={client.src} />

              <h6>Jane Doe</h6>
              <p>CEO at XYZ</p>
            </div>
          </div>
        </section>

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
    </>
  );
}
