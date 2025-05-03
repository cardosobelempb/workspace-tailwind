"use client";

import { showcase } from "@/app/assets/images/tune-forge";
import { useState } from "react";

function TuneForgeHeader() {
  const [open, setOpen] = useState(true);

  const handleNavOpen = () => {
    setOpen(!open);
  };
  return (
    <header
      className="container content h-screen grid gap-y-6 sm:grid-rows-[min-content_ifr]"
      style={{
        background: `linear-gradient(to top, rgba(10 33 78 / 0.90), rgba(10 33 78 /0.4) 90%), 
        url(${showcase.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <nav className="flex justify-between">
        <a
          className="text-df-golden relative after after:h-[2px] after:w-1/4 after:bg-df-blue after:bottom-2.5 self-start after:left-2/4 after:-translate-x-2/4 after:-rotate-45 after:rounded"
          href="#"
        >
          TuneForge
        </a>

        <ul
          className={`fixed top-0 left-0 h-screen w-screen bg-df-golden flex flex-col gap-5 justify-center items-center scale-y-0 nav ${
            open ? "tf_nav.open" : "scale-y-100"
          } transition-transform duration-300 ease-in-out origin-bottom sm:static sm:scale-y-100 sm:flex-row sm:h-fit sm:w-auto sm:bg-transparent sm:p-0 z-30`}
        >
          <li className="relative after after:transition after:h-2 after:w-3 after:bg-df-blue after:bottom-1/4 after:-right-6 after:animate-spin before before:transition before:h-2 before:w-3 before:bg-df-blue before:bottom-2/4 before:-right-6 before:animate-spinrev after:opacity-0 hover:after:opacity-100 before:opacity-0 hover:before:opacity-100 sm:after:bg-df-golden sm:before:bg-df-golden sm:after:right-0 sm:after:-bottom-2 sm:before:left-0 sm:before:-bottom-2">
            <a
              className="text-lg transition-colors hover:text-df-blue sm:hover:text-df-golden lg:text-2xl"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="relative after after:transition after:h-2 after:w-3 after:bg-df-blue after:bottom-1/4 after:-right-6 after:animate-spin before before:transition before:h-2 before:w-3 before:bg-df-blue before:bottom-2/4 before:-right-6 before:animate-spinrev after:opacity-0 hover:after:opacity-100 before:opacity-0 hover:before:opacity-100 sm:after:bg-df-golden sm:before:bg-df-golden sm:after:right-0 sm:after:-bottom-2 sm:before:left-0 sm:before:-bottom-2">
            <a
              className="text-lg transition-colors hover:text-df-blue sm:hover:text-df-golden lg:text-2xl"
              href="#"
            >
              About
            </a>
          </li>
          <li className="relative after after:transition after:h-2 after:w-3 after:bg-df-blue after:bottom-1/4 after:-right-6 after:animate-spin before before:transition before:h-2 before:w-3 before:bg-df-blue before:bottom-2/4 before:-right-6 before:animate-spinrev after:opacity-0 hover:after:opacity-100 before:opacity-0 hover:before:opacity-100 sm:after:bg-df-golden sm:before:bg-df-golden sm:after:right-0 sm:after:-bottom-2 sm:before:left-0 sm:before:-bottom-2">
            <a
              className="text-lg transition-colors hover:text-df-blue sm:hover:text-df-golden lg:text-2xl"
              href="#"
            >
              Discography
            </a>
          </li>
          <li className="relative after after:transition after:h-2 after:w-3 after:bg-df-blue after:bottom-1/4 after:-right-6 after:animate-spin before before:transition before:h-2 before:w-3 before:bg-df-blue before:bottom-2/4 before:-right-6 before:animate-spinrev after:opacity-0 hover:after:opacity-100 before:opacity-0 hover:before:opacity-100 sm:after:bg-df-golden sm:before:bg-df-golden sm:after:right-0 sm:after:-bottom-2 sm:before:left-0 sm:before:-bottom-2">
            <a
              className="text-lg transition-colors hover:text-df-blue sm:hover:text-df-golden lg:text-2xl"
              href="#"
            >
              Band
            </a>
          </li>
          <li className="relative after after:transition after:h-2 after:w-3 after:bg-df-blue after:bottom-1/4 after:-right-6 after:animate-spin before before:transition before:h-2 before:w-3 before:bg-df-blue before:bottom-2/4 before:-right-6 before:animate-spinrev after:opacity-0 hover:after:opacity-100 before:opacity-0 hover:before:opacity-100 sm:after:bg-df-golden sm:before:bg-df-golden sm:after:right-0 sm:after:-bottom-2 sm:before:left-0 sm:before:-bottom-2">
            <a
              className="text-lg transition-colors hover:text-df-blue sm:hover:text-df-golden lg:text-2xl"
              href="#"
            >
              Tours
            </a>
          </li>
          <li className="relative after after:transition after:h-2 after:w-3 after:bg-df-blue after:bottom-1/4 after:-right-6 after:animate-spin before before:transition before:h-2 before:w-3 before:bg-df-blue before:bottom-2/4 before:-right-6 before:animate-spinrev after:opacity-0 hover:after:opacity-100 before:opacity-0 hover:before:opacity-100 sm:after:bg-df-golden sm:before:bg-df-golden sm:after:right-0 sm:after:-bottom-2 sm:before:left-0 sm:before:-bottom-2">
            <a
              className="text-lg transition-colors hover:text-df-blue sm:hover:text-df-golden lg:text-2xl"
              href="#"
            >
              Gallery
            </a>
          </li>
          <li className="relative after after:transition after:h-2 after:w-3 after:bg-df-blue after:bottom-1/4 after:-right-6 after:animate-spin before before:transition before:h-2 before:w-3 before:bg-df-blue before:bottom-2/4 before:-right-6 before:animate-spinrev after:opacity-0 hover:after:opacity-100 before:opacity-0 hover:before:opacity-100 sm:after:bg-df-golden sm:before:bg-df-golden sm:after:right-0 sm:after:-bottom-2 sm:before:left-0 sm:before:-bottom-2">
            <a
              className="text-lg transition-colors hover:text-df-blue sm:hover:text-df-golden lg:text-2xl"
              href="#"
            >
              News
            </a>
          </li>
          <li className="relative after after:transition after:h-2 after:w-3 after:bg-df-blue after:bottom-1/4 after:-right-6 after:animate-spin before before:transition before:h-2 before:w-3 before:bg-df-blue before:bottom-2/4 before:-right-6 before:animate-spinrev after:opacity-0 hover:after:opacity-100 before:opacity-0 hover:before:opacity-100 sm:after:bg-df-golden sm:before:bg-df-golden sm:after:right-0 sm:after:-bottom-2 sm:before:left-0 sm:before:-bottom-2">
            <a
              className="text-lg transition-colors hover:text-df-blue sm:hover:text-df-golden lg:text-2xl"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>

        <div
          onClick={handleNavOpen}
          className={`hamburger_tf ${
            open ? "close__tf" : "open__tf"
          } sm:hidden flex flex-col gap-y-2.5 justify-center items-center z-50`}
        >
          <div className="h-[2px] w-full bg-white transition-transform"></div>
          <div className={`h-[2px] w-full bg-white transition-opacity `}></div>
          <div className="h-[2px] w-full bg-white transition-transform"></div>
        </div>
      </nav>

      <section>
        <h1>Welcome to TuneForge</h1>

        <p>
          The official hub of <span>TuneForge</span> where the beats are
          <span>fresh</span>, the vibe is <span>electric</span>, and the
          <span>music</span> never stops.
        </p>
      </section>
    </header>
  );
}

export default TuneForgeHeader;
