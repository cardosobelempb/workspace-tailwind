import { showcase, showcaseDesign } from "@/app/assets/images/financial";
import { ImageRoot } from "@/components/image-root/image.root";
import { FinacialModeToggle } from "@/components/shared/financial-mode-toggle";
import { MapPin } from "lucide-react";

const FinancialHeader = () => {
  return (
    <header className="dark:bg-primaty-900">
      <div className="duration-200 2xl:max-w-screen-2xl 2xl:mx-auto flex flex-col gap-y-12 px-4 py-8 sm:py-20 sm:px-8 lg:px-12 2xl:rounded-2xl 2xl:my-8 2xl:border 2xl:border-primary-blue">
        <nav className="flex flex-col gap-5 *:flex *:flex-col *:gap-y-2 *:text-center sm:justify-between sm:items-start sm:gap-x-5 md:flex-row md:w-5/6 2xl:w-auto *:items-center *:justify-center *:gap-x-3 ">
          <div className="sm:flex-row">
            <a className="py-2 text-2xl font-bold" href="#">
              FNX
            </a>
            <p>Individual</p>
            <p>Business</p>
          </div>

          <div className="sm:flex-row-reverse">
            <a href="#" className="flex  gap-x-2">
              <MapPin /> <span>Location</span>
            </a>

            <p className="text-primary-500">1-500-123-4567</p>

            <a
              className="border-2 border-primary-900 px-6 py-2 text-lg dark:border-white"
              href="#"
            >
              Login
            </a>
          </div>
        </nav>

        {/* <!-- -------------------------- Dark Mode --> */}

        <FinacialModeToggle />

        {/* <!-- -------------------------- Showccase --> */}
        <section className="grid items-center gap-y-8 md:grid-cols-2">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-4xl font-bold md:text-7xl">
              The Future of Finance
            </h1>
            <p className="text-lg">The best way to invest your money</p>
            <a
              className="bg-primary-green px-6 py-2 text-center text-lg text-white shadow-md shadow-primary-green/50 transition duration-200 ease-in-out hover:bg-primary-green/80 hover:shadow-lg sm:self-start"
              href="#"
            >
              {" "}
              Get Started{" "}
            </a>
          </div>

          <ImageRoot src={showcase.src} />

          <ImageRoot
            classFigure="absolute -z-10 h-96 w-32 hidden md:block dark:hidden"
            src={showcaseDesign.src}
          />
        </section>
      </div>
    </header>
  );
};

export default FinancialHeader;
