import { afterBlue, afterPink } from "@/app/assets/images/financial";
import Image from "next/image";

function FinancialProcess() {
  return (
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

          <figure className="">
            <Image
              className=""
              src={afterBlue.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </figure>

          <div>
            <p>2</p>
            <h4>Step Two</h4>

            <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
          </div>

          <figure className="">
            <Image
              className=""
              src={afterPink.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </figure>

          <div>
            <p>3</p>
            <h4>Step Three</h4>

            <p>Lorem ipsum dolor, sit amet adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialProcess;
