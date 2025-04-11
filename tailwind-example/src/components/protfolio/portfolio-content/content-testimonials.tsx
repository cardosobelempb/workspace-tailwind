import { client, testimonial } from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { BoxDefaultRoot } from "@/components/layout-root/box-default.root";
import { ContentDefaultRoot } from "@/components/layout-root/content-default.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";
import LinkDefaultRoot from "@/components/shared/link-default.root";

const ContentTestimonials = () => {
  return (
    <ContentDefaultRoot className="bg-secondary text-text xl:space-y-10 *:space-y-8">
      <BoxDefaultRoot className="lg:self-center">
        <BoxDefaultRoot>
          <HeadingRoot type="h6">testimonials</HeadingRoot>
          <HeadingRoot type="h2">what my cliens say</HeadingRoot>
        </BoxDefaultRoot>

        <ParagraphRoot>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          corporis eveniet, doloribus impedit fuga eum accusamus
        </ParagraphRoot>

        <LinkDefaultRoot href="#">View Testimonials</LinkDefaultRoot>
      </BoxDefaultRoot>

      <BoxDefaultRoot className="">
        <BoxDefaultRoot className="flex flex-col gap-y-5">
          <ImageRoot classFigure="h-10 w-12 self-end" src={testimonial.src} />

          <ParagraphRoot className="p-8 text-primary rounded border-2 border-transparent after after:bg-accent after:h-full after:w-full relative after:top-0 after:left-0 after:rounded after:-z-[1] z-[1] after:scale-y-100 after:transition-transform hover:after:scale-y-0 hover:text-text hover:border hover:border-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nisi
            delectus reprehenderit magni rerum recusandae vero aliquam,
            repudiandae in perspiciatis omnis, repellendus neque sapiente ab
            beatae explicabo tempora. Amet, ex.
          </ParagraphRoot>
        </BoxDefaultRoot>

        <BoxDefaultRoot className="grid grid-cols-2 grid-rows-2 justify-self-start space-x-3 ">
          <ImageRoot
            classFigure="size-28 border-4 border-accent rounded-full p-2 lg-p-1 row-span-2 animate-bounce mt-5"
            classImage="rounded-full object-top "
            src={client.src}
          />

          <HeadingRoot
            isEffect={false}
            className="col-start-2 col-end-4 row-start-1 row-end-2 flex items-end text-accent"
            type="h6"
          >
            Jane Doe
          </HeadingRoot>
          <ParagraphRoot className="col-start-2 col-end-4 row-start-2 row-end-3">
            CEO at XYZ
          </ParagraphRoot>
        </BoxDefaultRoot>
      </BoxDefaultRoot>
    </ContentDefaultRoot>
  );
};

export default ContentTestimonials;
