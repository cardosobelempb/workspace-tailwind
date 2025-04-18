import { CardDecription } from "@/components/card-root/grid/card-description";
import { CardTitle } from "@/components/card-root/grid/cart-title";
import { HeadingRoot } from "@/components/heading-root/heading.root";
import { BoxRoot } from "@/components/layout-root/grid/box.root";
import { ContainerRoot } from "@/components/layout-root/grid/container.root";
import { ContentRoot } from "@/components/layout-root/grid/content.root";
import { ParagraphRoot } from "@/components/paragraph-root/paragraph.root";
import { faker } from "@faker-js/faker";
import { Star, ThumbsUp, User } from "lucide-react";

type User = {
  name: string;
};

type ReviewItem = {
  id: string;
  rating: number;
  createdAt: Date;
  title: string;
  description: string;
  reply: number;
  user: User;
};

type Review = {
  review: ReviewItem;
};

function CardItem(props: Review) {
  return (
    <BoxRoot className="bg-orange-200 grid grid-cols-1 gap-5 p-5">
      <div className="grid gap-x-2.5 grid-cols-[max-content_max-content_1fr]">
        <div className="col-span-2 grid grid-cols-subgrid items-center">
          <div className="flex">
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-gray-400 w-4 h-4 fill-gray-400" />
          </div>

          <ParagraphRoot className="">
            Rating: <span>{props.review.rating}.0</span>
          </ParagraphRoot>
        </div>
        <ParagraphRoot className="grid justify-end">
          {props.review.createdAt.toLocaleDateString()}
        </ParagraphRoot>
      </div>

      <div className="grid gap-x-2">
        <CardTitle>{props.review.title}</CardTitle>
        <CardDecription>{props.review.description}</CardDecription>
      </div>

      <div className="grid gap-x-2.5 grid-cols-[1fr_max-content] items-center">
        <div className="grid grid-cols-[max-content_1fr] gap-x-1 items-center">
          <User className="text-gray-900 w-6 h-6 fill-gray-900" />
          <span>{props.review.user.name}</span>
        </div>
        <div className="grid gap-0.5">
          {props.review.reply <= 5 ? (
            <div className="grid grid-cols-[1fr_max-content_max-content] gap-x-1 h-7 items-center">
              <ThumbsUp className="text-blue-400 w-7 h-7 fill-blue-400 self-end" />
              <ParagraphRoot className="">{props.review.reply}</ParagraphRoot>
              <span>Reply</span>
            </div>
          ) : (
            <div className="flex">
              <ParagraphRoot className="self-end">0</ParagraphRoot>
              <span>Reply</span>
            </div>
          )}
        </div>
      </div>
    </BoxRoot>
  );
}

export default function GridPage() {
  const reviews: ReviewItem[] = [
    {
      id: faker.string.uuid(),
      rating: faker.number.int({ min: 1.0, max: 5.0 }),
      title: faker.book.title(),
      description: faker.commerce.productDescription(),
      reply: faker.number.int({ min: 0.0, max: 5.0 }),
      createdAt: faker.date.anytime(),
      user: { name: faker.person.fullName() },
    },
    {
      id: faker.string.uuid(),
      rating: faker.number.int({ min: 1.0, max: 5.0 }),
      title: faker.book.title(),
      description: faker.commerce.productDescription(),
      reply: faker.number.int({ min: 0.0, max: 5.0 }),
      createdAt: faker.date.anytime(),
      user: { name: faker.person.fullName() },
    },
    {
      id: faker.string.uuid(),
      rating: faker.number.int({ min: 1.0, max: 5.0 }),
      title: faker.book.title(),
      description: faker.commerce.productDescription(),
      reply: faker.number.int({ min: 0.0, max: 5.0 }),
      createdAt: faker.date.anytime(),
      user: { name: faker.person.fullName() },
    },
    {
      id: faker.string.uuid(),
      rating: faker.number.int({ min: 1.0, max: 5.0 }),
      title: faker.book.title(),
      description: faker.commerce.productDescription(),
      reply: faker.number.int({ min: 0.0, max: 5.0 }),
      createdAt: faker.date.anytime(),
      user: { name: faker.person.fullName() },
    },
  ];

  return (
    <ContainerRoot className=" bg-orange-400 py-6 space-y-6">
      <ContentRoot type="section">
        <BoxRoot>
          <HeadingRoot type="h1" className="text-white">
            Most recent reviews
          </HeadingRoot>
        </BoxRoot>
      </ContentRoot>

      <ContentRoot type="section" className="grid gap-3">
        {reviews.map((review) => (
          <CardItem key={review.id} review={review} />
        ))}
      </ContentRoot>
    </ContainerRoot>
  );
}
