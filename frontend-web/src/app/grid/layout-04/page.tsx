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
import { ArticleRoot } from "@/components/article-root/article.root";

export default function GridPage() {
  return (
    <ContainerRoot className="bg-sky-900 text-white py-3">
      <ContentRoot type="section" className="py-5">
        <BoxRoot className="grid gap-y-5 *:text-center">
          <HeadingRoot className="text-purple-400" type="h6">
            Testimonials
          </HeadingRoot>
          <HeadingRoot type="h1">What our clients say</HeadingRoot>
          <ParagraphRoot>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            fuga, eligendi obcaecati blanditiis, earum ab nisi beatae dolorem
            ipsum quod odio. Quasi, a? Iure tempore nam debitis reiciendis,
            corporis cupiditate.
          </ParagraphRoot>
        </BoxRoot>
      </ContentRoot>
      <ContentRoot type="section" className="grid gap-2.5">
        <ArticleRoot className="grid p-8 gap-y-4 border border-blue-300 rounded">
          <BoxRoot className="flex gap-0.5">
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-gray-400 w-4 h-4 fill-gray-400" />
          </BoxRoot>

          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
            architecto delectus, voluptatum nisi tempora, beatae doloribus
            possimus eaque, minima recusandae consectetur animi enim ad.
          </ParagraphRoot>

          <BoxRoot className="grid">
            <ImageRoot
              classFigure="col-start-1 col-end-2 row-start-1 row-end-2  w-12 h-12 rounded-full"
              classImage="rounded-full"
              src={Img01.src}
            />

            <BoxRoot className="ml-16 col-start-1 col-end-2 row-span-1 row-end-2">
              <HeadingRoot type="h5">Jane Doe</HeadingRoot>
              <span>Founder LAL</span>
            </BoxRoot>
          </BoxRoot>
        </ArticleRoot>
        <ArticleRoot className="grid p-8 space-y-4 border border-blue-300 rounded">
          <BoxRoot className="flex gap-0.5">
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-gray-400 w-4 h-4 fill-gray-400" />
          </BoxRoot>

          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
            architecto delectus, voluptatum nisi tempora, beatae doloribus
            possimus eaque, minima recusandae consectetur animi enim ad.
          </ParagraphRoot>

          <BoxRoot className="grid">
            <ImageRoot
              classFigure="col-start-1 col-end-2 row-start-1 row-end-2 w-12 h-12 rounded-full"
              classImage="rounded-full"
              src={Img02.src}
            />
            <BoxRoot className="ml-16 col-start-1 col-end-2 row-span-1 row-end-2">
              <HeadingRoot type="h5">Jane Doe</HeadingRoot>
              <span>Founder LAL</span>
            </BoxRoot>
          </BoxRoot>
        </ArticleRoot>
        <ArticleRoot className="grid p-8 gap-y-4 border border-blue-300 rounded">
          <BoxRoot className="flex gap-0.5">
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-gray-400 w-4 h-4 fill-gray-400" />
          </BoxRoot>

          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
            architecto delectus, voluptatum nisi tempora, beatae doloribus
            possimus eaque, minima recusandae consectetur animi enim ad.
          </ParagraphRoot>

          <BoxRoot className="grid">
            <ImageRoot
              classFigure="col-start-1 col-end-2 row-start-1 row-end-2 w-12 h-12 rounded-full"
              classImage="rounded-full"
              src={Img03.src}
            />
            <BoxRoot className="ml-16 col-start-1 col-end-2 row-span-1 row-end-2">
              <HeadingRoot type="h5">Jane Doe</HeadingRoot>
              <span>Founder LAL</span>
            </BoxRoot>
          </BoxRoot>
        </ArticleRoot>
      </ContentRoot>
    </ContainerRoot>
  );
}
