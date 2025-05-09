import { upcomingtour } from "@/app/assets/images/tune-forge";
import TuneForgeHeading from "./shared/tune-forge-heading";
import { FaTicket } from "react-icons/fa6";

function TumeForgeUniqueMusic() {
  return (
    <section
      className="container content bg-df-blue flex flex-col gap-y-10"
      style={{
        background: `linear-gradient(to top, rgba(10 33 78 / 0.90), rgba(10 33 78 /0.4) 90%), 
        url(${upcomingtour.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <div className="flex flex-col gap-y-5">
        <TuneForgeHeading heading="A different kind of music" />

        <p className="text-lg/7 lg:text-2xl font-semibold text-center lg:w-2/4 lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          tempora nobis aliquam voluptates iusto assumenda excepturi itaque,
          commodi autem, blanditiis debitis repellendus quas placeat soluta
          atque cumque maxime vitae nihil.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center *:p-4 *:border-2">
        <div className="bg-df-golden border-2 border-df-blue md:p-6 text-center *:text-df-blue md:col-auto">
          <h6 className="text-lg mb-3 font-bold">Where</h6>
          <p>890 Fifth Avenue, Manhattan</p>
          <p>New York City</p>
        </div>

        <div className="border-df-blue border-df-golden md:p-6 text-center bg-df-blue *:text-df-golden md:col-auto">
          <h6 className="text-lg mb-3 font-bold ">When</h6>
          <p>Friday to Sunday</p>
          <p>Aug 18 to 20, 2027</p>
        </div>

        <button className="bg-df-blue py-6 border-white flex items-center w-full justify-center gap-x-3 sm:col-span-2 lg:col-auto">
          <FaTicket className="" /> Buy a Ticket
        </button>
      </div>
    </section>
  );
}

export default TumeForgeUniqueMusic;
