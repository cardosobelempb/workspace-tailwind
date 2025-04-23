import { quote, testimonial } from "@/app/assets/images/financial";
import Image from "next/image";

function FinacialTestimonial() {
  return (
    <section className="default-container">
      <div className="default-content default-border md:flex-row md:gap-x-12 md:*:basis-2/4">
        <div className="flex flex-col gap-y-5 md:self-center">
          <figure className="w-10 h-10">
            <Image
              className=""
              src={quote.src}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </figure>
          <p className="font-semibold xl:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et aperiam
            ipsum doloremque tempore blanditiis, velit nulla quam amet pariatur.
            Vero expedita in harum maiores nostrum dolor, libero veritatis
            excepturi eveniet.
          </p>

          <div className="flex flex-col gap-2">
            <h5 className="text-lg text-primary-blue font-bold">Jane Doe</h5>
            <p className="text-lg font-semibold">
              Legal Consultant, XYZ Corps.
            </p>
          </div>
        </div>

        <figure className="justify-self-center">
          <Image
            className=""
            src={testimonial.src}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </figure>
      </div>
    </section>
  );
}

export default FinacialTestimonial;
