import LinkRoot from "@/components/shared/link.root";
import { Check } from "lucide-react";
import FinacialHeading from "../shared/financial-heading";

function FinacialPricing() {
  return (
    <section className="default-container">
      <div className="default-content default-border bg-primary-300 dark:bg-primary-900">
        <FinacialHeading title="Pricing" subtitle="No Hidden Fees" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className={`flex flex-col gap-y-10 p-8 dark:border-primary-green dark:shadow-primary-green bg-white dark:border-2 dark:shadow-md dark:bg-primary-900 rounded-md`}
          >
            <h6 className={` text-xl uppercase self-center text-primary-green`}>
              Basic
            </h6>
            <h5
              className={`rounded-full size-28 flex items-center justify-center bg-primary-green/40 self-center gap-x-1 text-2xl p-12 font-bold text-primary-600 dark:text-white`}
            >
              <sup className={`text-primary-green`}>$</sup>
              9.99
            </h5>
            <ul className="flex flex-col gap-y-4 *:flex *:items-center *:gap-x-4 *:text-primary-900 *:text-xl *:font-bold *:dark:text-white">
              <li className={` `}>
                <Check className="text-primary-green p-3 size-10 text-sm bg-primary-green/40 rounded-full" />
                Feature 1
              </li>
              <li className={` `}>
                <Check className="text-primary-green p-3 size-10 text-sm bg-primary-green/40 rounded-full" />
                Feature 2
              </li>
              <li className={` `}>
                <Check className="text-primary-green p-3 size-10 text-sm bg-primary-green/40 rounded-full" />
                Feature 3
              </li>
              <li className={` `}>
                <Check className="text-primary-green p-3 size-10 text-sm bg-primary-green/40 rounded-full" />
                Feature 4
              </li>
            </ul>
            <LinkRoot
              className={`px-5 py-3 text-base font-bold border-2 text-center text-primary-900 border-primary-green dark:text-white`}
              href="#"
            >
              Choose Plan
            </LinkRoot>
          </div>

          <div
            className={`flex flex-col justify-between gap-y-8 p-8 dark:border-primary-orange dark:shadow-primary-orange bg-white dark:border-2 dark:shadow-md dark:bg-primary-900 rounded-md lg:scale-110`}
          >
            <h6
              className={` text-xl uppercase self-center text-primary-orange`}
            >
              Professional
            </h6>
            <h5
              className={`rounded-full size-28 flex items-center justify-center bg-primary-orange/40 self-center gap-x-1 font-bold text-2xl text-primary-600 p-12 dark:text-white`}
            >
              <sup className={`text-primary-orange`}>$</sup>
              12.99
            </h5>
            <ul className="flex flex-col gap-y-4 *:flex *:items-center *:gap-x-4 *:text-primary-900 *:text-xl *:font-bold *:dark:text-white">
              <li className={``}>
                <Check className="text-primary-orange p-3 size-10 text-sm bg-primary-orange/40 rounded-full" />
                Feature 1
              </li>
              <li className={``}>
                <Check className="text-primary-orange p-3 size-10 text-sm bg-primary-orange/40 rounded-full" />
                Feature 2
              </li>
              <li className={``}>
                <Check className="text-primary-orange p-3 size-10 text-sm bg-primary-orange/40 rounded-full" />
                Feature 3
              </li>
              <li className={``}>
                <Check className="text-primary-orange p-3 size-10 text-sm bg-primary-orange/40 rounded-full" />
                Feature 4
              </li>
            </ul>
            <LinkRoot
              className={`px-5 py-3 border-2 text-base font-bold text-center text-primary-900 dark:border-primary-orange border-primary-orange dark:text-white`}
              href="#"
            >
              Choose Plan
            </LinkRoot>
          </div>

          <div
            className={`flex flex-col gap-y-8 p-8 dark:border-primary-blue dark:shadow-primary-blue bg-white dark:border-2 dark:shadow-md dark:bg-primary-900 rounded-md sm:flex-row sm:col-span-2 sm:justify-between sm:items-center lg:flex-col lg:col-span-1 lg:items-start`}
          >
            <h6 className={` text-xl uppercase self-center text-primary-blue`}>
              Premium
            </h6>
            <h5
              className={`rounded-full size-28 flex items-center justify-center bg-primary-blue/40 self-center text-2xl font-bold gap-x-1 text-primary-600 p-12 dark:text-white`}
            >
              <sup className={`text-primary-blue`}>$</sup>
              19.99
            </h5>
            <ul className="flex flex-col gap-y-4 *:flex *:items-center *:gap-x-4 *:text-primary-900 *:text-xl *:font-bold *:dark:text-white">
              <li className={``}>
                <Check className="text-primary-blue p-3 size-10 text-sm bg-primary-blue/40 rounded-full" />
                Feature 1
              </li>
              <li className={``}>
                <Check className="text-primary-blue p-3 size-10 text-sm bg-primary-blue/40 rounded-full" />
                Feature 2
              </li>
              <li className={``}>
                <Check className="text-primary-blue p-3 size-10 text-sm bg-primary-blue/40 rounded-full" />
                Feature 3
              </li>
              <li className={``}>
                <Check className="text-primary-blue p-3 size-10 text-sm bg-primary-blue/40 rounded-full" />
                Feature 4
              </li>
            </ul>
            <LinkRoot
              className={`px-5 py-3 border-2 text-base text-center text-primary-900 border-primary-blue dark:border-primary-blue dark:text-white font-bold lg:self-stretch`}
              href="#"
            >
              Choose Plan
            </LinkRoot>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinacialPricing;
