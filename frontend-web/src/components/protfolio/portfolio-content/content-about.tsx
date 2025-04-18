import { abount } from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";
import { ChevronsRight } from "lucide-react";

export default function ContentAbount() {
  return (
    <section className="p-6 flex flex-col gap-10 bg-primary text-text relative md:p-16 lg:flex-row *:basis-full">
      <div className="space-y-5 xl:self-center">
        <div className="space-y-8 *:space-y-2 after lg:after:bg-accent lg:relative  lg:after:h-5 lg:after:w-3/4 lg:after:bottom-0 lg:pb-12">
          <div>
            <HeadingRoot type="h6" className="font-bold">
              About me
            </HeadingRoot>
            <HeadingRoot type="h2">Professional Photographer</HeadingRoot>
          </div>

          <div>
            <ParagraphRoot>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              corporis eveniet, doloribus impedit fuga eum accusamus libero
              recusandae modi odio, a voluptatem necessitatibus? Eos, commodi!
            </ParagraphRoot>
            <ParagraphRoot>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium doloremque nesciunt quod sapiente voluptates? Natus
              nihil ab illum corrupti quos?
            </ParagraphRoot>
          </div>
        </div>

        <div>
          <HeadingRoot type="h3" className="text-accent">
            My Awards
          </HeadingRoot>

          <ul className="space-y-1">
            <li className="space-x-2">
              <ChevronsRight className="inline-block stroke-accent" />
              <span>Award 1</span>
            </li>
            <li className="space-x-2">
              <ChevronsRight className="inline-block stroke-accent" />
              <span>Award 2</span>
            </li>
            <li className="space-x-2">
              <ChevronsRight className="inline-block stroke-accent" />
              <span>Award 3</span>
            </li>
          </ul>
        </div>
      </div>

      <ImageRoot classFigure="lg:max-w-[550px]" src={abount.src} />
    </section>
  );
}
