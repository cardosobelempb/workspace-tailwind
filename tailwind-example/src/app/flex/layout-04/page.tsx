import { ImageRoot } from "@/components/image-root/image.root";
import { ContainerRoot } from "@/components/layout-root/grid/container.root";
import { ContentRoot } from "@/components/layout-root/grid/content.root";
import { Star } from "lucide-react";
import Img01 from "./images/image_1.jpg";
import Img02 from "./images/image_2.jpg";
import Img03 from "./images/image_3.jpg";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";
import { BoxRoot } from "@/components/layout-root/grid/box.root";

export default function FlexPage() {
  return (
    <ContainerRoot className="bg-sky-900 text-white">
      <ContentRoot
        type="section"
        className="*:text-center flex-col lg:w-3/4 mx-auto -space-y-4"
      >
        <HeadingRoot className="text-purple-400" type="h6">
          Testimonials
        </HeadingRoot>
        <HeadingRoot type="h1">What our clients say</HeadingRoot>
        <ParagraphRoot>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam fuga,
          eligendi obcaecati blanditiis, earum ab nisi beatae dolorem ipsum quod
          odio. Quasi, a? Iure tempore nam debitis reiciendis, corporis
          cupiditate.
        </ParagraphRoot>
      </ContentRoot>
      <ContentRoot type="section">
        <BoxRoot className="p-8 gap-y-4 border border-blue-300 ">
          <div className="flex gap-0.5">
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-gray-400 w-4 h-4 fill-gray-400" />
          </div>

          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
            architecto delectus, voluptatum nisi tempora, beatae doloribus
            possimus eaque, minima recusandae consectetur animi enim ad.
          </ParagraphRoot>

          <div className="flex gap-x-5">
            <ImageRoot className="w-12 h-12 rounded-full" src={Img01.src} />
            <div>
              <HeadingRoot type="h5">Jane Doe</HeadingRoot>
              <span>Founder LAL</span>
            </div>
          </div>
        </BoxRoot>
        <BoxRoot className="p-8 space-y-4 border border-blue-300">
          <div className="flex gap-0.5">
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-gray-400 w-4 h-4 fill-gray-400" />
          </div>

          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
            architecto delectus, voluptatum nisi tempora, beatae doloribus
            possimus eaque, minima recusandae consectetur animi enim ad.
          </ParagraphRoot>

          <div className="flex gap-x-5">
            <ImageRoot className="w-12 h-12 rounded-full" src={Img02.src} />
            <div>
              <HeadingRoot type="h5">Jane Doe</HeadingRoot>
              <span>Founder LAL</span>
            </div>
          </div>
        </BoxRoot>
        <BoxRoot className="p-8 gap-y-4 border border-blue-300">
          <div className="flex gap-0.5">
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-gray-400 w-4 h-4 fill-gray-400" />
          </div>

          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
            architecto delectus, voluptatum nisi tempora, beatae doloribus
            possimus eaque, minima recusandae consectetur animi enim ad.
          </ParagraphRoot>

          <div className="flex gap-x-5">
            <ImageRoot className="w-12 h-12 rounded-full" src={Img03.src} />
            <div>
              <HeadingRoot type="h5">Jane Doe</HeadingRoot>
              <span>Founder LAL</span>
            </div>
          </div>
        </BoxRoot>
      </ContentRoot>
    </ContainerRoot>
  );
}
