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
    <div className="relative z-10 pl-5 pb-6">
      <figure className="tf_before before:top-0 before:left-0 before:bg-df-golden before:w-full before:h-full before:rounded-0 before:-z-1">
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

      <div className="flex flex-col">
        <h6 className="text-lg font-bold text-df-blue mt-6 uppercase">
          {name}
        </h6>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TuneForgeCardMember;
