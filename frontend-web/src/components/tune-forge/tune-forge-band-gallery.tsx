import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
} from "@/app/assets/images/tune-forge";
import Image from "next/image";
import TuneForgeHeading from "./shared/tune-forge-heading";

function TuneForgeBandGallery() {
  return (
    <section className="container content flex flex-col">
      <TuneForgeHeading heading="Band Gallery" />

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 gap-5">
        <figure className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2">
          <Image
            src={gallery1.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-none"
          />
        </figure>

        <figure className="md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4">
          <Image
            src={gallery2.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-none"
          />
        </figure>

        <figure className="md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">
          <Image
            src={gallery3.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-none"
          />
        </figure>

        <figure className="md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
          <Image
            src={gallery4.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-none"
          />
        </figure>

        <figure className="md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-5">
          <Image
            src={gallery5.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-none"
          />
        </figure>

        <figure className="md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-2">
          <Image
            src={gallery6.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-none"
          />
        </figure>

        <figure className="md:col-start-1 md:col-end-4 md:row-start-5 md:row-end-7">
          <Image
            src={gallery7.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-full rounded-none"
          />
        </figure>

        <figure className="md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5">
          <Image
            src={gallery8.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-none"
          />
        </figure>

        <figure className="md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-5">
          <Image
            src={gallery9.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="rounded-none"
          />
        </figure>
      </div>
    </section>
  );
}

export default TuneForgeBandGallery;
