import TuneForgeBandGallery from "@/components/tune-forge/tune-forge-band-gallery";
import TuneForgeBandMembers from "@/components/tune-forge/tune-forge-band-members";
import TuneForgeCountdown from "@/components/tune-forge/tune-forge-countdown";
import TuneForgeDiscography from "@/components/tune-forge/tune-forge-discography";
import TuneForgeFooter from "@/components/tune-forge/tune-forge-footer";
import TuneForgeHeader from "@/components/tune-forge/tune-forge-header";
import TuneForgeLatestAlbum from "@/components/tune-forge/tune-forge-latest-album";
import TuneForgePresale from "@/components/tune-forge/tune-forge-pre-sale";
import TumeForgeUniqueMusic from "@/components/tune-forge/tune-forge-unique-music";
import TuneForgeUpcomingTours from "@/components/tune-forge/tune-forge-upcoming-tours";

function TuneForgePage() {
  return (
    <>
      <TuneForgeHeader />

      <main>
        {/* <!-- --------------------- Latest Album --> */}
        <TuneForgeLatestAlbum />

        {/* <!-- --------------------- Unique Music --> */}
        <TumeForgeUniqueMusic />

        {/* <!-- --------------------- Discography --> */}
        <TuneForgeDiscography />

        {/* <!-- --------------------- Countdown --> */}
        <TuneForgeCountdown />

        {/* <!-- --------------------- Band Members --> */}
        <TuneForgeBandMembers />

        {/* <!-- --------------------- Upcoming Tours --> */}
        <TuneForgeUpcomingTours />

        {/* <!-- --------------------- Pre-sale --> */}
        <TuneForgePresale />

        {/* <!-- --------------------- Gallery --> */}
        <TuneForgeBandGallery />
      </main>

      {/* <!-- --------------------- Footer --> */}
      <TuneForgeFooter />
    </>
  );
}

export default TuneForgePage;
