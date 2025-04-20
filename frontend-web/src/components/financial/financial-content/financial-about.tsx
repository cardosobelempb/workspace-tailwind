import { about, aboutDesign, tick } from "@/app/assets/images/financial";
import { ImageRoot } from "@/components/image-root/image.root";

function FinancialAbount() {
  return (
    <section>
      <div>
        <h2>A New Take on Finance</h2>
        <p>
          We are a team of passionate people whose goal is to improve everyone's
          life through disruptive products. We build great products to solve
          your business problems.
        </p>
      </div>

      <div>
        <div>
          <div>
            <h3>More About Us</h3>
            <p>Great for individuals and Businesses.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              perspiciatis mollitia ratione delectus vitae repellat, sequi aut
              voluptatibus adipisci natus corporis maiores .
            </p>
          </div>

          <div>
            <div>
              <ImageRoot src={tick.src} />

              <h4>Comprehensive Finance</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
              <ImageRoot src={tick.src} />
              <h4>Support is just a call away</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>

            <div>
              <ImageRoot src={tick.src} />
              <h4>Say goodbye to paperwork</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <ImageRoot src={about.src} />
        <ImageRoot src={aboutDesign.src} />
      </div>
    </section>
  );
}

export default FinancialAbount;
