import { skills } from "@/app/assets/images/portifolio";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { ImageRoot } from "@/components/image-root/image.root";
import { FlexBoxRoot } from "@/components/layout-root/flex/box.root";
import { FlexContentRoot } from "@/components/layout-root/flex/flex-content.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";

export default function ContentSkills() {
  return (
    <FlexContentRoot
      type="section"
      className="bg-primary text-text lg:flex-row-reverse xl:space-y-10"
    >
      <FlexBoxRoot className="lg:self-center space-y-5 ">
        <div className="*:space-y-2">
          <HeadingRoot type="h6">My Skills</HeadingRoot>
          <HeadingRoot type="h2">
            I am experienced in the following fields
          </HeadingRoot>
        </div>

        <div className="*:space-y-2">
          <ParagraphRoot>
            Lorem ipsum dolor recusandae modi odio, a voluptatem Eos, commodi!
          </ParagraphRoot>

          <ParagraphRoot>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            doloremque nesciunt
          </ParagraphRoot>
        </div>

        <div className="space-y-5 *:space-y-2 xl:space-y-8">
          <div>
            <HeadingRoot type="h5" className="text-accent">
              Photography
            </HeadingRoot>
            <div className="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[95%] before:bg-accent z-10 before:-z-10 pl-4">
              95%
            </div>
          </div>

          <div>
            <HeadingRoot type="h5" className="text-accent">
              Design Thinking
            </HeadingRoot>
            <div className="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[90%] before:bg-accent z-10 before:-z-10 pl-4">
              90%
            </div>
          </div>

          <div>
            <HeadingRoot type="h5" className="text-accent">
              Videography
            </HeadingRoot>
            <div className="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[80%] before:bg-accent z-10 before:-z-10 pl-4">
              80%
            </div>
          </div>

          <div>
            <HeadingRoot type="h5" className="text-accent">
              Social Innovation
            </HeadingRoot>
            <div className="h-6 w-full rounded-full bg-secondary relative before before:top-0 before:left-0 before:h-6 before:w-[85%] before:bg-accent z-10 before:-z-10 pl-4">
              85%
            </div>
          </div>
        </div>
      </FlexBoxRoot>
      <FlexBoxRoot className="lg:max-w-[550px] before xl:before xl:relative xl:before:h-full xl:before:w-5 xl:before:top-0 xl:before:left-0 xl:before:bg-accent xl:pl-20">
        <ImageRoot src={skills.src} />
      </FlexBoxRoot>
    </FlexContentRoot>
  );
}
