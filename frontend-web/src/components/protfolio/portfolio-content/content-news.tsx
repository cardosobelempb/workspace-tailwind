import { news1, news2 } from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { BoxDefaultRoot } from "@/components/layout-root/box-default.root";
import { ContentDefaultRoot } from "@/components/layout-root/content-default.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";
import LinkDefaultRoot from "@/components/shared/link.root";
import { ChevronsRight } from "lucide-react";

const ContentNews = () => {
  return (
    <ContentDefaultRoot className="text-text gap-y-8 xl:flex-row-reverse">
      <BoxDefaultRoot className="space-y-5 md:self-center">
        <BoxDefaultRoot>
          <HeadingRoot type="h6">news</HeadingRoot>
          <HeadingRoot type="h2">Across the world of Photography</HeadingRoot>
        </BoxDefaultRoot>

        <ParagraphRoot>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          corporis eveniet, doloribus impedit fuga eum accusamus Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ab corrupti sapiente illo
          sint animi inventore
        </ParagraphRoot>

        <LinkDefaultRoot href="#">View News</LinkDefaultRoot>
      </BoxDefaultRoot>

      <BoxDefaultRoot className="grid gap-y-5 sm:grid-cols-2 sm:grid-rows-[min-content] sm:gap-x-5">
        <BoxDefaultRoot className="grid sm:grid-rows-subgrid sm:row-span-5 bg-secondary p-6 space-y-5 rounded-lg shadow-lg shadow-primary border-t-2 border-t-accent">
          <ImageRoot classFigure="rounded-lg" src={news1.src} />
          <HeadingRoot className="font-bold" type="h3">
            Model Photoshoot
          </HeadingRoot>
          <HeadingRoot type="h6" isEffect={false} className="text-accent">
            Dec 24, 2027
          </HeadingRoot>
          <ParagraphRoot>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            consectetur obcaecati ut nihil placeat.
          </ParagraphRoot>
          <LinkDefaultRoot
            className="space-x-2 justify-self-start group"
            href="#"
          >
            <span>Read More</span>
            <ChevronsRight className="inline-block stroke-accent group-hover:translate-x-2 transition-transform" />
          </LinkDefaultRoot>
        </BoxDefaultRoot>

        <BoxDefaultRoot className="grid sm:grid-rows-subgrid sm:row-span-5 bg-secondary p-6 space-y-5 rounded-lg shadow-lg shadow-primary border-t-2 border-t-accent">
          <ImageRoot classFigure="rounded-lg" src={news2.src} />
          <HeadingRoot className="font-bold" type="h3">
            Company Profile
          </HeadingRoot>
          <HeadingRoot type="h6" isEffect={false} className="text-accent">
            Jan 24, 2028
          </HeadingRoot>
          <ParagraphRoot>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            consectetur obcaecati ut nihil placeat.
          </ParagraphRoot>
          <LinkDefaultRoot
            className="space-x-2 justify-self-start group"
            href="#"
          >
            <span>Read More</span>
            <ChevronsRight className="inline-block stroke-accent group-hover:translate-x-2 transition-transform" />
          </LinkDefaultRoot>
        </BoxDefaultRoot>
      </BoxDefaultRoot>
    </ContentDefaultRoot>
  );
};

export default ContentNews;
