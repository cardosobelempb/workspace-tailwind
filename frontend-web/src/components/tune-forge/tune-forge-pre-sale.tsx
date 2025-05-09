import { presale } from "@/app/assets/images/tune-forge";
import TuneForgeCardLatestAlbum from "./shared/tune-forge-card-latest-album";
import TuneForgeHeading from "./shared/tune-forge-heading";
import TuneForgeLink from "./shared/tune-forge-link";

function TuneForgePresale() {
  return (
    <section
      className="container content flex flex-col"
      style={{
        background: `linear-gradient(to top, rgba(10 33 78 / 0.90), rgba(10 33 78 /0.4) 90%), 
        url(${presale.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <TuneForgeHeading heading="pre-sale - upcoming tour" />
      <div className="flex flex-col gap-y-5">
        <TuneForgeCardLatestAlbum
          title="Pre-Sale Tour 1 :"
          subTitle="07/2 - 09/2"
        />

        <TuneForgeCardLatestAlbum
          title="Pre-Sale Tour 2 :"
          subTitle="14/2 - 16/2"
        />

        <p className="text-xl mb-5 text-center">
          All pre-sales begin 12am local and end 6pm local time.
        </p>
      </div>

      <TuneForgeLink
        linkType="blue"
        title="Check for more info"
        href="#"
        className="self-center border-df-golden uppercase py-4 px-8 text-xl"
      />
    </section>
  );
}

export default TuneForgePresale;
