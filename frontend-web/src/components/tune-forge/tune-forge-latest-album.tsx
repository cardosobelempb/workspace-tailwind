import { album } from "@/app/assets/images/tune-forge";

import Image from "next/image";
import { FaDownload, FaMusic, FaPlay, FaShoppingCart } from "react-icons/fa";
import TuneForgeHeading from "./shared/tune-forge-heading";
import TuneForgeSocial from "./shared/tune-forge-social";
import TuneForgeCardLatestAlbum from "./shared/tune-forge-card-latest-album";
import TuneForgeLink from "./shared/tune-forge-link";

function TuneForgeLatestAlbum() {
  return (
    <section className="container content bg-df-blue flex flex-col gap-y-10">
      <div className="flex flex-col items-center gap-y-12">
        <TuneForgeHeading heading="Latest Album" />

        <div className="flex flex-col gap-y-4 justify-center">
          <div>
            <TuneForgeCardLatestAlbum title="Label" subTitle="Reload" />
            <TuneForgeCardLatestAlbum title="Released" subTitle="August 2027" />
            <TuneForgeCardLatestAlbum title="Genre" subTitle="Rock/Metal" />
            <TuneForgeCardLatestAlbum title="Styles" subTitle="Revival" />
          </div>

          <TuneForgeSocial />
        </div>
      </div>

      <div className="border border-df-golden grid grid-cols-[1fr]">
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

        <div className="divide-y divide-df-golden *:p-4 md:*:px-6 *:flex *:justify-between *:gap-x-2 *:items-center">
          <div className="">
            <div className="grid grid-cols-[min-content_1fr] grid-rows-2 gap-x-2 md:gap-x-4">
              <FaPlay className="w-4 h-4 md:w-8 md:h-8 text-[8px] col-start-1 col-end-2 row-start-1 row-end-3 pt-1.5 md:text-base md:p-2" />
              <h6 className="text-sm text-df-golden md:text-xl">Love Alive</h6>
              <h6 className="text-sm text-df-golden md:text-xl">Reload</h6>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <TuneForgeLink
                linkType="golden"
                title="Download"
                href="#"
                icon={FaDownload}
                className="self-center"
              />
            </div>
          </div>

          <div className="p-4 md:px-6">
            <div className="grid grid-cols-[min-content_1fr] grid-rows-2 gap-x-2 md:gap-x-4">
              <FaPlay className="w-4 h-4 md:w-8 md:h-8 text-[8px] col-start-1 col-end-2 row-start-1 row-end-3 pt-1.5 md:text-base md:p-2" />
              <h6 className="text-sm text-df-golden md:text-xl">Hope</h6>
              <h6 className="text-sm text-df-golden md:text-xl">Reload</h6>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <TuneForgeLink
                linkType="golden"
                title="Lyrics"
                href="#"
                icon={FaMusic}
                className="self-center"
              />
              <TuneForgeLink
                linkType="golden"
                title="Purchase"
                href="#"
                icon={FaShoppingCart}
                className="self-center"
              />
            </div>
          </div>

          <div className="p-4 md:px-6">
            <div className="grid grid-cols-[min-content_1fr] grid-rows-2 gap-x-2 md:gap-x-4">
              <FaPlay className="w-4 h-4 md:w-8 md:h-8 text-[8px] col-start-1 col-end-2 row-start-1 row-end-3 pt-1.5 md:text-base md:p-2" />
              <h6 className="text-sm text-df-golden md:text-xl">Bounce Out</h6>
              <h6 className="text-sm text-df-golden md:text-xl">Reload</h6>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <TuneForgeLink
                linkType="golden"
                title="Download"
                href="#"
                icon={FaDownload}
                className="self-center"
              />
            </div>
          </div>

          <div className="p-4 md:px-6">
            <div className="grid grid-cols-[min-content_1fr] grid-rows-2 gap-x-2 md:gap-x-4">
              <FaPlay className="w-4 h-4 md:w-8 md:h-8 text-[8px] col-start-1 col-end-2 row-start-1 row-end-3 pt-1.5 md:text-base md:p-2" />
              <h6 className="text-sm text-df-golden md:text-xl">Headspace</h6>
              <h6 className="text-sm text-df-golden md:text-xl">Reload</h6>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <TuneForgeLink
                linkType="golden"
                title="Download"
                href="#"
                icon={FaDownload}
                className="self-center"
              />
            </div>
          </div>

          <div className="p-4 md:px-6">
            <div className="grid grid-cols-[min-content_1fr] grid-rows-2 gap-x-2 md:gap-x-4">
              <FaPlay className="w-4 h-4 md:w-8 md:h-8 text-[8px] col-start-1 col-end-2 row-start-1 row-end-3 pt-1.5 md:text-base md:p-2" />
              <h6 className="text-sm text-df-golden md:text-xl">Tomorrow</h6>
              <h6 className="text-sm text-df-golden md:text-xl">Reload</h6>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <TuneForgeLink
                linkType="golden"
                title="Lyrics"
                href="#"
                icon={FaMusic}
                className="self-center"
              />
              <TuneForgeLink
                linkType="golden"
                title="Purchase"
                href="#"
                icon={FaShoppingCart}
                className="self-center"
              />
            </div>
          </div>

          <div className="p-4 md:px-6">
            <div className="grid grid-cols-[min-content_1fr] grid-rows-2 gap-x-[10px] md:gap-x-4">
              <FaPlay className="w-4 h-4 md:w-8 md:h-8 text-[8px] col-start-1 col-end-2 row-start-1 row-end-3 pt-1.5 md:text-base md:p-2" />
              <h6 className="text-sm text-df-golden md:text-xl">
                Falling Apart
              </h6>
              <h6 className="text-sm text-df-golden md:text-xl">Reload</h6>
            </div>

            <div className="flex gap-x-2 md:gap-x-4">
              <TuneForgeLink
                linkType="golden"
                title="Download"
                href="#"
                icon={FaDownload}
                className="self-center"
              />

              <TuneForgeLink
                linkType="golden"
                title="Purchase"
                href="#"
                icon={FaShoppingCart}
                className="self-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TuneForgeLatestAlbum;
