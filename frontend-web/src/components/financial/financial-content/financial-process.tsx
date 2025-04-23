import { afterBlue, afterPink } from "@/app/assets/images/financial";
import Image from "next/image";

function FinancialProcess() {
  return (
    <section className="default-container">
      <div className="default-content default-border">
        <div className="flex flex-col gap-y-5 md:gap-y-3 *:text-center">
          <h2 className="text-2xl font-bold">Simplified Process</h2>
          <p className="text-base dark:text-primary-500">
            Easy as One, Two, Three
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center gap-y-4 bg-primary-green/50 p-12 rounded dark:border-2 dark:border-primary-green/50 *:text-center dark:bg-transparent">
            <p className="size-12 rounded-full bg-primary-green/50 flex flex-col items-center justify-center text-lg font-bold dark:border-2 dark:border-primary-green/50 dark:bg-transparent">
              1
            </p>
            <h4 className="text-xl font-semibold text-primary-900 dark:text-white">
              Step One
            </h4>

            <p className="text-center dark:text-primary-600">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>

          <figure className="justify-self-center">
            <Image
              className="object-scale-down rotate-90 md:rotate-0"
              src={afterBlue.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </figure>

          <div className="flex flex-col items-center gap-y-4 bg-primary-blue/50 p-12 rounded dark:border-2 dark:border-primary-blue/50 *:text-center dark:bg-transparent">
            <p className="size-12 rounded-full bg-primary-blue/50 flex flex-col items-center justify-center text-lg font-bold dark:border-2 dark:border-primary-blue/50 dark:bg-transparent">
              2
            </p>
            <h4 className="text-xl font-semibold text-primary-900 dark:text-white">
              Step Two
            </h4>

            <p className="text-center dark:text-primary-600">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>

          <figure className="justify-self-center">
            <Image
              className="object-scale-down rotate-90 md:rotate-0"
              src={afterPink.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </figure>

          <div className="flex flex-col items-center gap-y-4 bg-primary-orange/50 p-12 rounded dark:border-2 dark:border-primary-orange/50 *:text-center dark:bg-transparent">
            <p className="size-12 rounded-full bg-primary-orange/50 flex flex-col items-center justify-center text-lg font-bold dark:border-2 dark:border-primary-orange/50 dark:bg-transparent">
              3
            </p>
            <h4 className="text-xl font-semibold text-primary-900 dark:text-white">
              Step Three
            </h4>

            <p className="text-center dark:text-primary-600">
              Lorem ipsum dolor, sit amet adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialProcess;
