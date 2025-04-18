import { InputRoot } from "@/components/form/input.root";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { BoxRoot } from "@/components/layout-root/grid/box.root";
import { ContainerRoot } from "@/components/layout-root/grid/container.root";
import { ContentRoot } from "@/components/layout-root/grid/content.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";

export default function GridPage() {
  return (
    <ContainerRoot className="pt-5">
      <ContentRoot
        type="section"
        className="md:border-2 md:border-purple-600/20 md:p-8 md:rounded"
      >
        <BoxRoot className="space-y-2">
          <HeadingRoot
            type="h2"
            className="sm:text-lg text-purple-600 font-bold text-center"
          >
            Newsletter
          </HeadingRoot>
          <HeadingRoot
            type="h1"
            className="text-2xl sm:text-4xl font-bold text-center"
          >
            Subscribe to our Newsletter
          </HeadingRoot>
          <ParagraphRoot className="text-lg text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
            tempore? Dicta libero quo similique ipsa!
          </ParagraphRoot>
        </BoxRoot>
        <BoxRoot className="">
          <form className="w-full grid gap-6 p-5 shadow-md rounded sm:w-3/4 md:grid-cols-[1fr_min-content] mx-auto">
            <InputRoot
              className="border-2 border-purple-600/20 placeholder:text-purple-600/40 "
              type="email"
              placeholder="Your Email Address"
            />
            <InputRoot
              className=" bg-purple-600 text-white border-2 border-transparent hover:bg-transparent hover:text-purple-600 hover:border-2 hover:border-purple-600/20 "
              type="submit"
              value="Subscribe"
            />
          </form>
        </BoxRoot>
      </ContentRoot>
    </ContainerRoot>
  );
}
