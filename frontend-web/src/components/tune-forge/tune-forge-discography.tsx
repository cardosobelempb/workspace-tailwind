import {
  discography1,
  discography2,
  discography3,
  discography4,
} from "@/app/assets/images/tune-forge";
import TuneForgeCardDiscography from "./shared/tune-forge-card-discography";
import TuneForgeHeading from "./shared/tune-forge-heading";

function TuneForgeDiscography() {
  return (
    <section className="container content flex flex-col">
      <TuneForgeHeading heading="Discography" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-10">
        <TuneForgeCardDiscography title="Reload" src={discography1.src} />
        <TuneForgeCardDiscography title="Set me free" src={discography2.src} />
        <TuneForgeCardDiscography title="Limitless" src={discography3.src} />
        <TuneForgeCardDiscography title="Dawn" src={discography4.src} />
      </div>
    </section>
  );
}

export default TuneForgeDiscography;
