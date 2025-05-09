import { tourslist } from "@/app/assets/images/tune-forge";
import Image from "next/image";
import TuneForgeHeading from "./shared/tune-forge-heading";
import { FaTicket } from "react-icons/fa6";
import TuneForgeLink from "./shared/tune-forge-link";

function TuneForgeUpcomingTours() {
  return (
    <section className="container content flex flex-col gap-y-5">
      <TuneForgeHeading heading="Upcoming Tours" />

      <figure>
        <Image
          src={tourslist.src}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="rounded-none w-full"
        />
        <figcaption className="text-lg text-center py-5">
          The American Tour
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 gap-y-10">
        {/* <!-- Tours --> */}
        <div className="border-2 border-df-golden divide-y divide-df-golden ">
          <div className="grid grid-cols-[max-content_1fr_1fr] gap-x-3 p-5">
            <p className="text-2xl font-black">21 Dec</p>

            <div className="text-df-golden text-sm">
              <h6>Melbourne, AU</h6>
              <h6>Rod Laver Arena</h6>
            </div>

            <div className="flex gap-y-2 flex-col md:flex-row-reverse md:gap-x-2">
              <TuneForgeLink
                linkType="blue"
                title="VIP"
                href="#"
                icon={FaTicket}
                className=""
              />

              <TuneForgeLink
                linkType="golden"
                title="Buy Ticket"
                href="#"
                icon={FaTicket}
              />
            </div>
          </div>

          <div className="grid grid-cols-[max-content_1fr_1fr] gap-x-3 p-5">
            <p className="text-2xl font-black">10 Jan</p>

            <div className="text-df-golden text-sm">
              <h6>Washington, DC, USA</h6>
              <h6>Capital One Arena</h6>
            </div>

            <div className="flex gap-y-2 flex-col md:flex-row-reverse md:gap-x-2">
              <TuneForgeLink
                linkType="blue"
                title="VIP"
                href="#"
                icon={FaTicket}
              />

              <TuneForgeLink
                linkType="golden"
                title="Buy Ticket"
                href="#"
                icon={FaTicket}
              />
            </div>
          </div>

          <div className="grid grid-cols-[max-content_1fr_1fr] gap-x-3 p-5">
            <p className="text-2xl font-black">24 May</p>

            <div className="text-df-golden text-sm">
              <h6>Houston, TX, USA</h6>
              <h6>Arena Theatre</h6>
            </div>

            <div className="flex gap-y-2 flex-col md:flex-row-reverse md:gap-x-2">
              <TuneForgeLink
                linkType="blue"
                title="VIP"
                href="#"
                icon={FaTicket}
              />

              <TuneForgeLink
                linkType="golden"
                title="Buy Ticket"
                href="#"
                icon={FaTicket}
              />
            </div>
          </div>

          <div className="grid grid-cols-[max-content_1fr_1fr] gap-x-3 p-5">
            <p className="text-2xl font-black">28 Oct</p>

            <div className="text-df-golden text-sm">
              <h6>Chicago, IL, USA</h6>
              <h6>United Center</h6>
            </div>

            <div className="flex gap-y-2 flex-col md:flex-row-reverse md:gap-x-2">
              <TuneForgeLink
                linkType="blue"
                title="VIP"
                href="#"
                icon={FaTicket}
              />

              <TuneForgeLink
                linkType="golden"
                title="Buy Ticket"
                href="#"
                icon={FaTicket}
              />
            </div>
          </div>
        </div>

        {/* <!-- Newsletter --> */}
        <div className="flex flex-col *:flex *:flex-col gap-y-5 border-2 lg:border-5 lg:border-dashed border-df-golden p-6 lg:min-w-3xl self-center w-1/4 mx-auto">
          <h3 className="text-2xl uppercase text-center">
            Subscribe for free downloads <br />
            and band news updates
          </h3>
          <form className="gap-y-5 md:flex-row md:gap-x-5">
            <input
              className="px-2 py-3 bg-df-golden placeholder:text-white/30 md:grow"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="px-2 md:px-8 py-3 border-2 border-df-golden"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default TuneForgeUpcomingTours;
