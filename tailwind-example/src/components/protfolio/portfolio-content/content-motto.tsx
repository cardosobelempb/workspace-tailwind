import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";

export default function ContentMotto() {
  return (
    <section className="p-6 bg-secondary text-text md:p-16 2xl:rounded">
      <div
        className="p-2 flex flex-col gap-y-5 lg:w-3/4 lg:mx-auto lg:relative after
        lg:after:h-2 lg:after:w-1/6 lg:after:-bottom-6 lg:after:left-2/4 lg:after:bg-accent lg:after:rounded-full lg:after:-translate-x-2/4
      "
      >
        <blockquote cite="https://www.azquotes.com/author/8044-Martin_Luther_King_Jr/tag/brother">
          <ParagraphRoot className="before before:-ml-3 before:content-['\201C'] before:bg-transparent after after:content-['\201D'] after:bg-transparent text-center">
            Weve learned to fly the air like birds, weve learned to swim the
            seas like fish, and yet we havent learned to walk the earth as
            brothers and sisters.
          </ParagraphRoot>
        </blockquote>
        <ParagraphRoot className="text-center">
          — Martin Luther King, Jr., <cite>Love</cite>
        </ParagraphRoot>
      </div>
    </section>
  );
}
