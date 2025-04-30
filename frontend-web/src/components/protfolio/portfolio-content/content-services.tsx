import {
  service1,
  service2,
  service3,
  service4,
} from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { BoxDefaultRoot } from "@/components/layout-root/box-default.root";
import { ContentDefaultRoot } from "@/components/layout-root/content-default.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";
import LinkDefaultRoot from "@/components/shared/link.root";

const ContentServices = () => {
  return (
    <ContentDefaultRoot className="text-text lg:flex-row-reverse">
      <BoxDefaultRoot className="lg:self-center space-y-5 *:space-y-2">
        <BoxDefaultRoot>
          <HeadingRoot type="h6">why choose me</HeadingRoot>
          <HeadingRoot type="h2">Best Services for you</HeadingRoot>
        </BoxDefaultRoot>

        <BoxDefaultRoot>
          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            corporis eveniet, doloribus impedit
          </ParagraphRoot>
          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          </ParagraphRoot>
        </BoxDefaultRoot>

        <LinkDefaultRoot href="#">Learn More</LinkDefaultRoot>
      </BoxDefaultRoot>

      <BoxDefaultRoot className="grid gap-5 *:flex *:flex-col *:gap-y-5 *:items-center *:border-2 *:border-accent *:rounded *:p-8 sm:grid-cols-2">
        <BoxDefaultRoot className="">
          <ImageRoot classFigure="h-20 w-20" src={service1.src} />

          <HeadingRoot type="h5" className="text-accent">
            Wedding
          </HeadingRoot>
          <ParagraphRoot className="text-center">
            Lorem ipsum dolor sit amet adipisicing elit.
          </ParagraphRoot>
        </BoxDefaultRoot>

        <BoxDefaultRoot>
          <ImageRoot classFigure="h-20 w-20" src={service2.src} />

          <HeadingRoot type="h5" className="text-accent">
            Company Profile
          </HeadingRoot>
          <ParagraphRoot className="text-center">
            Lorem ipsum dolor sit amet adipisicing elit.
          </ParagraphRoot>
        </BoxDefaultRoot>

        <BoxDefaultRoot>
          <ImageRoot classFigure="h-20 w-20" src={service3.src} />

          <HeadingRoot type="h5" className="text-accent">
            Model Photoshoot
          </HeadingRoot>
          <ParagraphRoot className="text-center">
            Lorem ipsum dolor sit amet adipisicing elit.
          </ParagraphRoot>
        </BoxDefaultRoot>

        <BoxDefaultRoot>
          <ImageRoot classFigure="h-20 w-20" src={service4.src} />

          <HeadingRoot type="h5" className="text-accent">
            Videography
          </HeadingRoot>
          <ParagraphRoot className="text-center">
            Lorem ipsum dolor sit amet adipisicing elit.
          </ParagraphRoot>
        </BoxDefaultRoot>
      </BoxDefaultRoot>
    </ContentDefaultRoot>
  );
};

export default ContentServices;
