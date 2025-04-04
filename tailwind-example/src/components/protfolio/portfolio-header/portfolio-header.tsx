"use client";

import { showcase } from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";
import { Dribbble, Facebook, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export default function PortfolioHeader() {
  const [navbar, setNavibar] = useState(true);
  const [hamburge, setHamburge] = useState(false);

  const handleOpenHamburge = () => {
    setNavibar(!navbar);
    setHamburge(!hamburge);
  };

  return (
    <header className="p-6 bg-primary text-text relative md:space-y-16">
      <nav className={`p-2 flex justify-between items-center`}>
        <a className="text-accent" href="#">
          JD
        </a>

        <ul
          className={`nav sm:flex-row sm:scale-y-100 sm:backdrop-blur-0 sm:static sm:p-2 sm:bg-transparent ${
            navbar ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <li className="m-2">
            <a
              className="nav--link sm:hover:text-accent sm:before:bg-accent"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="m-2">
            <a
              className="nav--link sm:hover:text-accent sm:before:bg-accent"
              href="#"
            >
              about
            </a>
          </li>
          <li className="m-2">
            <a
              className="nav--link sm:hover:text-accent sm:before:bg-accent"
              href="#"
            >
              Services
            </a>
          </li>
          <li className="m-2">
            <a
              className="nav--link sm:hover:text-accent sm:before:bg-accent"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>

        <div
          onClick={handleOpenHamburge}
          className={`hamburger sm:hidden ${hamburge ? "open" : "close"}`}
        ></div>

        <a
          className="uppercase border-2 border-accent text-xs p-2 rounded sm:text-base sm:px-4"
          href="#"
        >
          Book Now
        </a>
      </nav>

      <section className="flex flex-col gap-10 lg:flex-row lg:*:basis-full lg:gap-x-24 xl:gap-x-12">
        <div className="flex flex-col gap-y-5 lg:gap-y-12 xl:self-center xl:gap-y-24">
          <div className="space-y-2 lg:space-y-4">
            <h6 className="text-sm pl-6 uppercase relative before before:h-1 before:w-4 before:top-2/4 before:-translate-y-2/4 before:left-0 lg:text-lg">
              Professional Photographer
            </h6>
            <HeadingRoot type="h1">John Doe</HeadingRoot>
          </div>

          <div className="flex flex-col gap-y-5 lg:gap-y-8 xl:pl-16 before xl:before xl:relative xl:before:h-full xl:before:w-5 xl:before:top-0 xl:before:left-0 xl:before:bg-accent">
            <ul className="flex gap-x-4">
              <li className="hover:text-accent transition-colors cursor-pointer">
                <Facebook />
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                <Twitter />
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                <Dribbble />
              </li>
              <li className="hover:text-accent transition-colors cursor-pointer">
                <Youtube />
              </li>
            </ul>

            <ParagraphRoot>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sodales at nunc quis semper. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Fusce
            </ParagraphRoot>

            <a
              className="uppercase p-2 sm:px-4 border-2 border-accent self-start rounded text-xs sm:text-base"
              href="#"
            >
              View Portfolio
            </a>
          </div>
        </div>

        <ImageRoot src={showcase.src} />
      </section>
    </header>
  );
}
