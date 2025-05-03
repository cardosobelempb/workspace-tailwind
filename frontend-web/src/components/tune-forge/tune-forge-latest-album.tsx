import { album } from "@/app/assets/images/tune-forge";

import {
  FaAmazon,
  FaApple,
  FaCloud,
  FaDownload,
  FaGooglePlay,
  FaMusic,
  FaPlay,
  FaShoppingCart,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import TuneForgeHeading from "./shared/tune-forge-heading";

function TuneForgeLatestAlbum() {
  return (
    <section className="container p-4 sm:p-8 md:p-12 lg:p-16 bg-df-blue flex flex-col gap-y-10">
      <div className="flex flex-col items-center gap-y-12">
        <TuneForgeHeading />

        <div className="flex flex-col gap-y-4 justify-center">
          <div>
            <p className="text-center text-xl">
              <span className="uppercase pr-6 relative tf_after after:bottom-0.5 after:left-0 after:h-2 after:w-3/4 after:bg-df-golden/60 after:-z-[1] z-[1]">
                Label
              </span>
              <span className="border-b-2 border-dotted">Reload</span>
            </p>
            <p className="text-center text-xl">
              <span className="uppercase pr-6 relative tf_after after:bottom-0.5 after:left-0 after:h-2 after:w-3/4 after:bg-df-golden/60 after:-z-[1] z-[1]">
                Released
              </span>
              <span className="border-b-2 border-dotted">August 2027</span>
            </p>
            <p className="text-center text-xl">
              <span className="uppercase pr-6 relative tf_after after:bottom-0.5 after:left-0 after:h-2 after:w-3/4 after:bg-df-golden/60 after:-z-[1] z-[1]">
                Genre
              </span>
              <span className="border-b-2 border-dotted">Rock/Metal</span>
            </p>
            <p className="text-center text-xl">
              <span className="uppercase pr-6 relative tf_after after:bottom-0.5 after:left-0 after:h-2 after:w-3/4 after:bg-df-golden/60 after:-z-[1] z-[1]">
                Styles
              </span>
              <span className="border-b-2 border-dotted">Revival</span>
            </p>
          </div>

          <ul className="flex gap-x-4 justify-center *:bg-df-slate/60 *:size-8 ">
            <li>
              <a href="#">
                <div className=" p-2 stroke-white border border-white transition-colors hover:bg-df-golden/60">
                  <FaApple color="#FFFFFF" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className=" p-2 stroke-white border border-white transition-colors hover:bg-df-golden/60">
                  <FaGooglePlay color="#FFFFFF" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className=" p-2  stroke-white border border-white transition-colors hover:bg-df-golden/60">
                  <FaAmazon color="#FFFFFF" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className=" p-2  stroke-white border border-white transition-colors hover:bg-df-golden/60">
                  <FaCloud color="#FFFFFF" />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className=" p-2  stroke-white border border-white transition-colors hover:bg-df-golden/60">
                  <FaSpotify color="#FFFFFF" />
                </div>
              </a>
            </li>

            <li>
              <a href="#">
                <div className=" p-2 stroke-white border border-white transition-colors hover:bg-df-golden/60">
                  <FaYoutube color="#FFFFFF" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <figure>
          <Image
            src={album.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>

        <div>
          <div>
            <div>
              <FaPlay />
              <h6>Love Alive</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaDownload />
                Download
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Hope</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaMusic />
                Lyrics
              </a>
              <a href="#">
                <FaShoppingCart />
                Purchase
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Bounce Out</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaDownload />
                Download
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Headspace</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaDownload />
                Download
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Tomorrow</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaMusic />
                Lyrics
              </a>
              <a href="#">
                <FaShoppingCart />
                Purchase
              </a>
            </div>
          </div>

          <div>
            <div>
              <FaPlay />
              <h6>Falling Apart</h6>
              <h6>Reload</h6>
            </div>

            <div>
              <a href="#">
                <FaDownload />
                Download
              </a>
              <a href="#">
                <FaShoppingCart />
                Purchase
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TuneForgeLatestAlbum;
