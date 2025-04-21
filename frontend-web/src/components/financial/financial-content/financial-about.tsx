import { about, aboutDesign, tick } from "@/app/assets/images/financial";
import Image from "next/image";

function FinancialAbount() {
  return (
    <section className="default-container">
      <div className="default-content default-border *:flex *:flex-col *:gap-y-5 md:*:gap-y-2">
        <div>
          <h2 className="text-2xl font-bold md:text-center">
            A New Take on Finance
          </h2>
          <p className="md:w-2/4 md:mx-auto md:text-center dark:text-primary-500">
            We are a team of passionate people whose goal is to improve
            everyone's life through disruptive products. We build great products
            to solve your business problems.
          </p>
        </div>

        <div className="md:flex-row-reverse md:*:basis-2/4">
          <div className="flex flex-col gap-y-8 md:self-center">
            <div className="flex flex-col gap-y-3">
              <h3 className="text-xl font-semibold text-primary-blue">
                More About Us
              </h3>
              <p className="text-primary-orange">
                Great for individuals and Businesses.
              </p>
              <p className="dark:text-primary-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                perspiciatis mollitia ratione delectus vitae repellat, sequi aut
                voluptatibus adipisci natus corporis maiores .
              </p>
            </div>

            <div className="flex flex-col gap-y-5 md:gap-y-10">
              <div className="grid gap-y-2 md:grid-cols-[85px_1fr] md:grid-rows-[2,auto] md:gap-x-4">
                <figure className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
                  <Image
                    className="w-20 h-20 rounded-full"
                    src={tick.src}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                </figure>

                <h4 className="text-lg font-semibold text-primary-orange md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
                  Comprehensive Finance
                </h4>
                <p className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 dark:text-primary-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="grid gap-y-2 md:grid-cols-[85px_1fr] md:grid-rows-[2,auto] md:gap-x-4">
                <figure className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
                  <Image
                    className="w-20 h-20 rounded-full"
                    src={tick.src}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                </figure>
                <h4 className="text-lg font-semibold text-primary-orange md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
                  Support is just a call away
                </h4>
                <p className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 dark:text-primary-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="grid gap-y-2 md:grid-cols-[85px_1fr] md:grid-rows-[2,auto] md:gap-x-4">
                <figure className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
                  <Image
                    className="w-20 h-20 rounded-full"
                    src={tick.src}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                  />
                </figure>
                <h4 className="text-lg font-semibold text-primary-orange md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
                  Say goodbye to paperwork
                </h4>
                <p className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 dark:text-primary-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <figure className="relative">
            <Image
              className="md:[transform:rotateY(0.5turn)]"
              src={about.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
            <Image
              className="absolute left-0 top-1/4 -z-10 hidden md:block h-96 w-1/3 dark:hidden"
              src={aboutDesign.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default FinancialAbount;
