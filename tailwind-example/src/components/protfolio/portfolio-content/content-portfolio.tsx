import { portfolio1, portfolio2 } from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { BoxDefaultRoot } from "@/components/layout-root/box-default.root";
import { ContentDefaultRoot } from "@/components/layout-root/content-default.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";

export default function ContentPortfolio() {
  return (
    <ContentDefaultRoot className="text-text bg-secondary lg:flex-row-reverse">
      <BoxDefaultRoot className="lg:self-center *:space-y-2">
        <BoxDefaultRoot>
          <HeadingRoot type="h6">My Portfolio</HeadingRoot>
          <HeadingRoot type="h2">Recent Works</HeadingRoot>
        </BoxDefaultRoot>

        <BoxDefaultRoot>
          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            corporis eveniet, doloribus impedit fuga eum accusamus libero
            recusandae modi odio, a voluptatem necessitatibus? Eos, commodi!
          </ParagraphRoot>
          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            doloremque nesciunt quod sapiente voluptates? Natus nihil ab illum
            corrupti quos?
          </ParagraphRoot>
        </BoxDefaultRoot>
      </BoxDefaultRoot>

      <BoxDefaultRoot
        display="grid"
        className="gap-y-5 md:grid-cols-12 md:grid-rows-12 md:gap-0"
      >
        <ImageRoot
          classFigure="md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-11 md:transition-all md:hover:scale-110 md:grayscale md:hover:grayscale-0"
          src={portfolio1.src}
        />

        <ImageRoot
          classFigure="md:col-start-7 md:-col-end-1 md:row-start-3 md:-row-end-1 md:transition-transform md:hover:scale-110"
          src={portfolio2.src}
        />
      </BoxDefaultRoot>
    </ContentDefaultRoot>
  );
}
