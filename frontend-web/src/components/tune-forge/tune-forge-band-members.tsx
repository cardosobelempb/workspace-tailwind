import { members1, members2, members3 } from "@/app/assets/images/tune-forge";
import TuneForgeCardMember from "./shared/tune-forge-card-member";
import TuneForgeHeading from "./shared/tune-forge-heading";

function TuneForgeBandMembers() {
  return (
    <section className="container content flex flex-col">
      <TuneForgeHeading heading="Band Members" />

      <div className="grid sm:grid-cols-3 gap-y-6 sm:gap-8">
        <TuneForgeCardMember
          src={members1.src}
          name="Joe Jade"
          description="Lead Vocalist"
        />

        <TuneForgeCardMember
          src={members2.src}
          name="John Smith"
          description="Lead Guitarist"
        />

        <TuneForgeCardMember
          src={members3.src}
          name="Jeremy James"
          description="Lead Drummer"
        />
      </div>
    </section>
  );
}

export default TuneForgeBandMembers;
