import { tourslist } from "@/app/assets/images/tune-forge";
import Image from "next/image";
import TuneForgeHeading from "./shared/tune-forge-heading";
import TuneForgeNewsletter from "./tune-forge-newsletter";
import TuneForgeTours from "./tune-forge-tours";

function TuneForgeUpcomingTours() {
  return (
    <section className="container content flex flex-col gap-y-5">
      <TuneForgeHeading heading="Upcoming Tours" />

      <figure className="space-y-4">
        <Image
          src={tourslist.src}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="rounded-none w-full"
        />
        <figcaption className="text-lg text-center">
          The American Tour
        </figcaption>
      </figure>

      <div className="grid grid-cols-1 gap-y-10">
        {/* <!-- Tours --> */}
        <TuneForgeTours />
        {/* <!-- Newsletter --> */}
        <TuneForgeNewsletter />
      </div>
    </section>
  );
}

export default TuneForgeUpcomingTours;
