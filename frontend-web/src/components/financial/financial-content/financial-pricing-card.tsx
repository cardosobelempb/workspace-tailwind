import LinkRoot from "@/components/shared/link.root";
export interface FinancialPricingCardProps {
  title: string;
  price: string;
  features: string[];
  className?: string;
  colorClass?: "green" | "blue" | "orange" | "white" | "black" | "transparent";
}

function FinancialPringinCard(props: FinancialPricingCardProps) {
  const colorClass = {
    green: "green",
    blue: "blue",
    orange: "orange",
    white: "white",
    black: "900",
    transparent: "transparent",
  };

  return (
    <div
      className={`flex flex-col gap-y-8 p-8 
      dark:border-primary-${colorClass[props.colorClass || "green"]} 
      dark:shadow-primary-${colorClass[props.colorClass || "green"]}
      bg-${colorClass[props.colorClass || "white"]}
      dark:border-2 dark:shadow-md dark:bg-primary-900 ${props.className}`}
    >
      <h6 className={` text-xl uppercase self-center text-primary-blue`}>
        {props.title}
      </h6>
      <h5
        className={`rounded-full size-20 flex items-center justify-center bg-primary-${
          colorClass[props.colorClass || "green"]
        }`}
      >
        <sup
          className={`text-primary-${
            colorClass[props.colorClass || "green"]
          } text-xl `}
        >
          $
        </sup>
        {props.price}
      </h5>
      <ul>
        {props.features.map((feature, index) => (
          <li className={`text-primary-900 dark:text-white`} key={index}>
            <span
              className={`text-primary-${
                colorClass[props.colorClass || "green"]
              }`}
            ></span>
            {feature}
          </li>
        ))}
      </ul>
      <LinkRoot
        className={`px-5 py-2 border-2 text-center 
         text-primary-${colorClass[props.colorClass || "green"]}${
          props.className
        } dark:border-primary-${colorClass[props.colorClass || "green"]} `}
        href="#"
      >
        Choose Plan
      </LinkRoot>
    </div>
  );
}

export default FinancialPringinCard;
