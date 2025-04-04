import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { ContainerRoot } from "@/components/layout-root/grid/container.root";
import { ContentRoot } from "@/components/layout-root/grid/content.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";

import img1 from "@/app/assets/images/image_1.jpg";
import img2 from "@/app/assets/images/image_2.jpg";
import img3 from "@/app/assets/images/image_3.jpg";
import img4 from "@/app/assets/images/image_4.jpg";
import img5 from "@/app/assets/images/image_5.jpg";
import img6 from "@/app/assets/images/image_6.jpg";
import img7 from "@/app/assets/images/image_7.jpg";
import img8 from "@/app/assets/images/image_8.jpg";

/*sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4*/

export default function GridPage() {
  return (
    <ContainerRoot className="bg-gradient-to-r from-[#232526] to-[#414345] text-white">
      <ContentRoot type="section" className="">
        <HeadingRoot
          type="h1"
          className="text-2xl font-bold sm:text-3xl xl:text-5xl"
        >
          My Library
        </HeadingRoot>
        <ParagraphRoot className="sm:text-lg xl:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
          laudantium
        </ParagraphRoot>
      </ContentRoot>

      <ContentRoot
        type="section"
        className="gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
      >
        <ImageRoot src={img1.src} />
        <ImageRoot src={img2.src} />
        <ImageRoot src={img3.src} />
        <ImageRoot src={img4.src} />
        <ImageRoot src={img5.src} />
        <ImageRoot src={img6.src} />
        <ImageRoot src={img7.src} />
        <ImageRoot src={img8.src} />
      </ContentRoot>
    </ContainerRoot>
  );
}
