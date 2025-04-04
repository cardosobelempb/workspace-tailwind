"use client";

import { showcase } from "@/app/assets/images/portifolio";
import { ImageRoot } from "@/components/image-root/image.root";
import { Dribbble, Facebook, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export default function PortfolioHeader() {
  const [navbar, setNavibar] = useState(true);
  const [hamburge, setHamburge] = useState(false);

  const handleOpenHamburge = () => {
    console.log(open);
    setNavibar(!navbar);
    setHamburge(!hamburge);
  };

  return (
    <header className="p-6 bg-primary text-text relative md:p-16">
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

        <a href="#">Book Now</a>
      </nav>

      <section>
        <div>
          <div>
            <h6>Professional Photographer</h6>
            <h1>John Doe</h1>
          </div>

          <div>
            <ul>
              <li>
                <Facebook />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Dribbble />
              </li>
              <li>
                <Youtube />
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sodales at nunc quis semper. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Fusce
            </p>

            <a href="#">View Portfolio</a>
          </div>
        </div>

        <ImageRoot src={showcase.src} />
      </section>
    </header>
  );
}
