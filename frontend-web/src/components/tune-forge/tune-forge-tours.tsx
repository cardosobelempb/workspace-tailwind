import { FaTicket } from "react-icons/fa6";
import TuneForgeLink from "./shared/tune-forge-link";

function TuneForgeTours() {
  return (
    <div className="border border-df-golden divide-y divide-df-golden *:p-4 sm:*:p-6 *:flex *:justify-between">
      <div className="">
        <p className="md:text-2xl font-black">21 Dec</p>

        <div className="text-df-golden text-xs md:text-xl">
          <h6>Melbourne, AU</h6>
          <h6>Rod Laver Arena</h6>
        </div>

        <div className="flex flex-col gap-2 sm:items-center sm:flex-row-reverse">
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

      <div className="">
        <p className="text-2xl font-black">10 Jan</p>

        <div className="text-df-golden text-xs md:text-xl">
          <h6>Washington, DC, USA</h6>
          <h6>Capital One Arena</h6>
        </div>

        <div className="flex flex-col gap-2 sm:items-center sm:flex-row-reverse">
          <TuneForgeLink linkType="blue" title="VIP" href="#" icon={FaTicket} />

          <TuneForgeLink
            linkType="golden"
            title="Buy Ticket"
            href="#"
            icon={FaTicket}
          />
        </div>
      </div>

      <div className="">
        <p className="text-2xl font-black">24 May</p>

        <div className="text-df-golden text-xs md:text-xl">
          <h6>Houston, TX, USA</h6>
          <h6>Arena Theatre</h6>
        </div>

        <div className="flex flex-col gap-2 sm:items-center sm:flex-row-reverse">
          <TuneForgeLink linkType="blue" title="VIP" href="#" icon={FaTicket} />

          <TuneForgeLink
            linkType="golden"
            title="Buy Ticket"
            href="#"
            icon={FaTicket}
          />
        </div>
      </div>

      <div className="">
        <p className="text-2xl font-black">28 Oct</p>

        <div className="text-df-golden text-xs md:text-xl">
          <h6>Chicago, IL, USA</h6>
          <h6>United Center</h6>
        </div>

        <div className="flex flex-col gap-2 sm:items-center sm:flex-row-reverse">
          <TuneForgeLink linkType="blue" title="VIP" href="#" icon={FaTicket} />

          <TuneForgeLink
            linkType="golden"
            title="Buy Ticket"
            href="#"
            icon={FaTicket}
          />
        </div>
      </div>
    </div>
  );
}

export default TuneForgeTours;
