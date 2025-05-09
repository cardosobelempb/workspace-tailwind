import { footer } from "@/app/assets/images/tune-forge";
import TuneForgeHeading from "./shared/tune-forge-heading";
import TuneForgeCardFooter from "./shared/tune-forge-card-footer";

function TuneForgeFooter() {
  return (
    <footer
      className="container content flex flex-col"
      style={{
        background: `linear-gradient(to top, rgba(10 33 78 / 0.90), rgba(10 33 78 /0.4) 90%), 
        url(${footer.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <TuneForgeHeading heading="Stay in Touch" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <TuneForgeCardFooter
          email="booking@tuneforge.com"
          title="Booking"
          name="Jack Doe"
        />

        <TuneForgeCardFooter
          email="press@tuneforge.com"
          title="Press"
          name="Jack Doe"
        />

        <TuneForgeCardFooter
          email="info@tuneforge.com"
          title="Info"
          name="Julianna Doe"
        />
      </div>
    </footer>
  );
}

export default TuneForgeFooter;
