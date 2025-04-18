import { contact } from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { BoxDefaultRoot } from "@/components/layout-root/box-default.root";
import { ContentDefaultRoot } from "@/components/layout-root/content-default.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";
import LinkDefaultRoot from "@/components/shared/link-default.root";

const ContentContact = () => {
  return (
    <ContentDefaultRoot className="bg-secondary text-text gap-y-10 lg:flex-row *:basis-full">
      <BoxDefaultRoot className="flex gap-y-8 flex-col *:gap-y-5 self-center">
        <BoxDefaultRoot>
          <HeadingRoot type="h6">lets talk</HeadingRoot>
          <HeadingRoot type="h2">Keep In Touch</HeadingRoot>
        </BoxDefaultRoot>

        <ParagraphRoot>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          corporis eveniet, doloribus impedit fuga eum accusamus Lorem ipsum
          dolor sit amet consectetur
        </ParagraphRoot>

        <LinkDefaultRoot className="self-start" href="#">
          Lets Chat
        </LinkDefaultRoot>
      </BoxDefaultRoot>

      <ImageRoot src={contact.src} />
    </ContentDefaultRoot>
  );
};

export default ContentContact;
