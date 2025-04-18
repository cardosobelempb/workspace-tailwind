import Image from "next/image";

import img1 from "@/app/assets/images/image_1.jpg";
import img2 from "@/app/assets/images/image_2.jpg";
import img3 from "@/app/assets/images/image_3.jpg";
import img4 from "@/app/assets/images/image_4.jpg";
import img5 from "@/app/assets/images/image_5.jpg";
import img6 from "@/app/assets/images/image_6.jpg";
import img7 from "@/app/assets/images/image_7.jpg";
import img8 from "@/app/assets/images/image_8.jpg";

export default function FlexPage() {
  return (
    <main className="flex flex-col gap-y-6 max-w-screen-2xl bg-gradient-to-r from-[#232526] to-[#414345] text-white">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-bold sm:text-3xl xl:text-5xl">
          My Library
        </h1>
        <p className="sm:text-lg xl:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
          laudantium
        </p>
      </div>

      <section className="flex gap-4 flex-wrap *:basis-[330px] *:grow">
        <figure className="">
          <Image
            src={img1.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
        <figure className="">
          <Image
            src={img2.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
        <figure className="relative">
          <Image
            src={img3.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
        <figure>
          <Image
            src={img4.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
        <figure>
          <Image
            src={img5.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
        <figure>
          <Image
            src={img6.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
        <figure>
          <Image
            src={img7.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
        <figure>
          <Image
            src={img8.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
      </section>
    </main>
  );
}
