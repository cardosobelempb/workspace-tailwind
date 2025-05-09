import { countdown } from "@/app/assets/images/tune-forge";
import TuneForgeHeading from "./shared/tune-forge-heading";

function TuneForgeCountdown() {
  return (
    <section
      className="container content flex flex-col justify-center items-center"
      style={{
        background: `linear-gradient(to top, rgba(10 33 78 / 0.90), rgba(10 33 78 /0.4) 90%), 
        url(${countdown.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
      <TuneForgeHeading heading="Upcoming Tour" />

      <p>Friday to Sunday Aug 18 to 20, 2027</p>
    </section>
  );
}

export default TuneForgeCountdown;
