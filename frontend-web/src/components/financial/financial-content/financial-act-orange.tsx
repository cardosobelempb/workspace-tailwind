import { shieldYellow } from "@/app/assets/images/financial";
import Image from "next/image";

function FinacialActOrange() {
  return (
    <section className="default-container ">
      <div
        className="default-content default-border bg-primary-orange dark:bg-transparent py-8 px-4 sm:px-12 2xl:my-8 2xl:roundend-2xl 
      "
      >
        <div className="flex flex-col md:w-2xl md:relative gap-y-8 rounded bg-primary-300 dark:text-primary-900 p-8 md:dark:border md:dark:border-primary-orange shadow-md shadow-bg-primary-orange md:mx-auto md:flex-row items-center justify-center md:justify-around md:gap-x-6 dark:bg-transparent">
          <figure className="size-24 md:absolute md:top-2/4 md:-translate-y-2/4 md:-left-12">
            <Image
              className=""
              src={shieldYellow.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </figure>
          <div className="">
            <h2 className="text-2xl font-bold dark:text-primary-300">
              Secure Your Future Today
            </h2>
            <p className="text-base font-semibold dark:text-primary-600">
              Lorem ipsum dolor sit amet consectetur elit.
            </p>
          </div>

          <a
            className="border border-primary-orange text-xl text-center px-6 md:px-5 py-2 dark:text-primary-300"
            href="#"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinacialActOrange;
