import Image from "next/image";
import TuneForgeSocial from "./tune-forge-social";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaChevronRight } from "react-icons/fa";

interface TuneForgeCardDiscographyProps {
  src: string | StaticImport;
  title: string;
}

function TuneForgeCardDiscography({
  src,
  title,
}: TuneForgeCardDiscographyProps) {
  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <h6 className="text-xl font-bold text-df-golden uppercase">{title}</h6>
        <a
          className="space-x-1 group flex items-center justify-start gap-x-2 w-1/3"
          href="#"
        >
          <span className="text-lg">View Album</span>
          <FaChevronRight className="text-sm text-df-golden group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <figure>
        <Image
          src={src}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="rounded-none"
        />
      </figure>

      <TuneForgeSocial className="self-start" />
    </div>
  );
}

export default TuneForgeCardDiscography;
