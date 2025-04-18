import { CardDecription } from "@/components/card-root/flex/card-description";
import { CardRoot } from "@/components/card-root/flex/card.root";
import { CardTitle } from "@/components/card-root/flex/cart-title";
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
    <CardRoot className="bg-orange-200 ">
      <div className="flex justify-between gap-x-2.5">
        <div className="flex items-center gap-x-2.5">
          <p className="flex gap-x-0.5 text-xs">
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-orange-400 w-4 h-4 fill-orange-400" />
            <Star className="text-gray-400 w-4 h-4 fill-gray-400" />
          </p>

          <p className="text-sm font-bold">
            Rating: <span>{props.review.rating}.0</span>
          </p>
        </div>
        <p className="text-sm">{props.review.createdAt.toLocaleDateString()}</p>
      </div>

      <div className="space-y-2">
        <CardTitle>{props.review.title}</CardTitle>
        <CardDecription>{props.review.description}</CardDecription>
      </div>

      <div className="flex justify-between gap-x-2.5">
        <p className="flex items-center gap-x-1">
          <User className="text-gray-400 w-4 h-4 fill-gray-400" />
          {props.review.user.name}
        </p>
        <div className="flex gap-2">
          {props.review.reply <= 5 ? (
            <p className="flex items-center gap-x-2.5">
              <ThumbsUp className="text-blue-400 w-4 h-4 fill-blue-400" />
              {props.review.reply}
              <span>Reply</span>
            </p>
          ) : (
            <>
              <p className="flex items-center gap-x-2.5">
                0 <span>Reply</span>
              </p>
            </>
          )}
        </div>
      </div>
    </CardRoot>
  );
}

export default function FlexPage() {
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
    <>
      <h1 className="text-3xl lg:text-4xl font-bold text-white">
        Most recent reviews
      </h1>

      <section className="flex flex-wrap gap-5">
        {reviews.map((review) => (
          <CardItem key={review.id} review={review} />
        ))}
      </section>
    </>
  );
}
