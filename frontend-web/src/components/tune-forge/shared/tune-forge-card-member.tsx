import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface TuneForgeCardMemberProps {
  src: string | StaticImport;
  name: string;
  description: string;
}
function TuneForgeCardMember({
  src,
  name,
  description,
}: TuneForgeCardMemberProps) {
  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 relative">
      <figure className="space-y-5 bg-df-golden pl-4 pb-20">
        <Image
          src={src}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="rounded-none z-10"
        />
      </figure>

      <div className="flex flex-col absolute left-4 bottom-4">
        <h6 className="text-xl font-bold text-df-slate mt-6 uppercase">
          {name}
        </h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TuneForgeCardMember;
