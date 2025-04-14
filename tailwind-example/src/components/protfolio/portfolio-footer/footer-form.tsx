import {
  contact1,
  contact2,
  contact3,
  contact4,
  form,
} from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { BoxDefaultRoot } from "@/components/layout-root/box-default.root";
import { FooterDefaultRoot } from "@/components/layout-root/footer-default.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";

const FooterForm = () => {
  return (
    <FooterDefaultRoot display="flex" className="text-text">
      <BoxDefaultRoot className="flex flex-col  gap-y-5">
        <ImageRoot src={form.src} />

        <form className="grid gap-y-5 *:px-2 *:py-5 *:rounded *:outline-none h-full">
          <input
            className="bg-accent  placeholder:text-text/80 font-bold"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-accent  placeholder:text-text/80 font-bold"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="bg-accent  paceholder:text-text/80 h-40 font-bold"
            placeholder="Message"
          ></textarea>
          <input
            className="border-2 border-accent font-bold cursor-pointer hover:bg-accent"
            type="submit"
            value="Submit"
          />
        </form>
      </BoxDefaultRoot>

      <BoxDefaultRoot className="flex flex-col gap-y-5 xl:gap-y-10 lg:self-center *:space-y-2">
        <BoxDefaultRoot>
          <HeadingRoot type="h6">lets talk</HeadingRoot>
          <HeadingRoot type="h2">Keep In Touch</HeadingRoot>
        </BoxDefaultRoot>

        <ParagraphRoot>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          corporis eveniet, doloribus impedit fuga eum accusamus Lorem
        </ParagraphRoot>

        <BoxDefaultRoot className="grid md:grid-cols-2 md:grid-rows-2 gap-x-5 gap-y-2">
          <BoxDefaultRoot className="grid grid-cols-[128px_1fr] grid-rows-2 gap-x-5 gap-y-2">
            <ImageRoot
              classFigure="w-32 h-32 col-start-1 col-end-2 row-start-1 row-end-3 self-start"
              src={contact1.src}
            />

            <HeadingRoot
              className="grid col-start-2 col-end-3 row-start-1 row-end-2 text-accent self-end"
              type="h6"
              isEffect={false}
            >
              Phone Number
            </HeadingRoot>
            <ParagraphRoot className="col-start-2 col-end-3 row-start-2 row-end-3 mt-3">
              123-234-1234
            </ParagraphRoot>
          </BoxDefaultRoot>

          <BoxDefaultRoot className="grid grid-cols-[128px_1fr] grid-rows-2 gap-x-5 gap-y-2">
            <ImageRoot
              classFigure="w-32 h-32 col-start-1 col-end-2 row-start-1 row-end-3"
              src={contact2.src}
            />

            <HeadingRoot
              className="col-start-2 col-end-3 row-start-1 row-end-2 text-accent self-end"
              type="h6"
              isEffect={false}
            >
              Email address
            </HeadingRoot>
            <ParagraphRoot className="col-start-2 col-end-3 row-start-2 row-end-3 mt-3">
              cool@cool.com
            </ParagraphRoot>
          </BoxDefaultRoot>

          <BoxDefaultRoot className="grid grid-cols-[128px_1fr] grid-rows-2 gap-x-5 gap-y-2">
            <ImageRoot
              classFigure="w-32 h-32 col-start-1 col-end-2 row-start-1 row-end-3"
              src={contact3.src}
            />

            <HeadingRoot
              className="col-start-2 col-end-3 row-start-1 row-end-2 text-accent self-end"
              type="h6"
              isEffect={false}
            >
              Websites
            </HeadingRoot>
            <ParagraphRoot className="col-start-2 col-end-3 row-start-2 row-end-3 mt-3">
              www.cool.com
            </ParagraphRoot>
          </BoxDefaultRoot>

          <BoxDefaultRoot className="grid grid-cols-[128px_1fr] grid-rows-2 gap-x-5 gap-y-2">
            <ImageRoot
              classFigure="w-32 h-32 col-start-1 col-end-2 row-start-1 row-end-3"
              src={contact4.src}
            />
            <HeadingRoot
              className="col-start-2 col-end-3 row-start-1 row-end-2 text-accent self-end"
              type="h6"
              isEffect={false}
            >
              Address
            </HeadingRoot>
            <ParagraphRoot className="col-start-2 col-end-3 row-start-2 row-end-3 mt-3">
              177A Bleecker Street, NY
            </ParagraphRoot>
          </BoxDefaultRoot>
        </BoxDefaultRoot>
      </BoxDefaultRoot>
    </FooterDefaultRoot>
  );
};

export default FooterForm;
