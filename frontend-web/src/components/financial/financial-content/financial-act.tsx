import { shieldGreen } from "@/app/assets/images/financial";
import Image from "next/image";

function FinacialAct() {
  return (
    <section className="default-container">
      <div
        className="default-content default-border bg-primary-green py-10 px-4 md:p-24 roundend-lg
      "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 bg-white p-10 relative roundend-lg">
          <figure className="w-32 h-32 md:absolute md:top-0 md:translate-y-[5%] md:-left-0 md:translate-x-[-50%]">
            <Image
              className=""
              src={shieldGreen.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </figure>
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 gap-2">
            <h2 className="text-2xl font-bold">Secure Your Future Today</h2>
            <p className="text-base font-semibold">
              Lorem ipsum dolor sit amet consectetur elit.
            </p>
          </div>

          <a
            className="border-2 border-primary-green text-xl text-center px-10 py-3"
            href="#"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinacialAct;
