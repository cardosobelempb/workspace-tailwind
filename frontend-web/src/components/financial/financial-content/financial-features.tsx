import {
  businessFinance,
  carFinance,
  homeFinance,
  lifeFinance,
  otherFinance,
  travelFinance,
} from "@/app/assets/images/financial";
import Image from "next/image";

function FinancialFeatures() {
  return (
    <section className="default-container ">
      <div className="default-content default-border bg-primary-300 dark:bg-primary-900">
        <div className="flex flex-col gap-y-5 md:gap-y-3 *:text-center">
          <h2 className="text-2xl font-bold">
            Different Finances for Different Needs
          </h2>
          <p className="dark:text-primary-500">
            Lorem ipsum dolor sit amet elit adipisicing elit.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center gap-y-4 bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900 *:text-center">
            <figure className="">
              <Image
                className="size-28 rounded-full bg-primary-blue/10 p-4 dark:bg-transparent"
                src={homeFinance.src}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </figure>

            <h4 className="text-lg font-semibold text-primary-900 dark:text-white">
              Home Finance
            </h4>

            <p className="dark:text-primary-500">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col items-center gap-y-4 bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900 *:text-center">
            <figure className="">
              <Image
                className="size-28 rounded-full bg-primary-orange/10 p-4 dark:bg-transparent"
                src={carFinance.src}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </figure>

            <h4 className="text-lg font-semibold text-primary-900 dark:text-white">
              Car Finance
            </h4>

            <p className="dark:text-primary-500">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col items-center gap-y-4 bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900 *:text-center">
            <figure className="">
              <Image
                className="size-28 rounded-full bg-primary-blue/10 p-4 dark:bg-transparent"
                src={lifeFinance.src}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </figure>

            <h4 className="text-lg font-semibold text-primary-900 dark:text-white">
              Life Finance
            </h4>

            <p className="dark:text-primary-500">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col items-center gap-y-4 bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900 *:text-center">
            <figure className="">
              <Image
                className="size-28 rounded-full bg-primary-orange/10 p-4 dark:bg-transparent"
                src={businessFinance.src}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </figure>

            <h4 className="text-lg font-semibold text-primary-900 dark:text-white">
              Business Finance
            </h4>

            <p className="dark:text-primary-500">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col items-center gap-y-4 bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900 *:text-center">
            <figure className="">
              <Image
                className="size-28 rounded-full bg-primary-blue/10 p-4 dark:bg-transparent"
                src={travelFinance.src}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </figure>

            <h4 className="text-lg font-semibold text-primary-900 dark:text-white">
              Travel Finance
            </h4>

            <p className="dark:text-primary-500">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col items-center gap-y-4 bg-white rounded px-4 py-8 dark:border-2 dark:border-primary-500 dark:bg-primary-900 *:text-center">
            <figure className="">
              <Image
                className="size-28 rounded-full bg-primary-orange/10 p-4 dark:bg-transparent"
                src={otherFinance.src}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                priority
              />
            </figure>

            <h4 className="text-lg font-semibold text-primary-900 dark:text-white">
              Other Finance
            </h4>

            <p className="dark:text-primary-500">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialFeatures;
