interface FinancialPricingCardProps {
  title: string;
  price: string;
  features: string[];
  color?: "green" | "blue" | "orange";
  className?: string;
}
function FinancialPringinCard({
  features,
  price,
  title,
  color,
  className,
}: FinancialPricingCardProps) {
  return (
    <div
      className={`bg-white dark:text-primary-900 rounded-lg p-5 flex flex-col items-center gap-y-5 ${className}`}
    >
      <h6 className={`text-xl uppercase text-primary-${color}`}>{title}</h6>
      <h5
        className={`text-2xl font-bold text-primary-600 bg-primary-${color}/50 size-28 rounded-full flex items-center justify-center gap-x-1`}
      >
        <sup className={`text-primary-${color} text-xl`}>$</sup>
        {price}
      </h5>
      <ul>
        {features.map((feature, index) => (
          <li className={``} key={index}>
            <span className={`text-primary-${color}`}></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        className={`px-5 py-2 border-2 border-primary-${color} dark:text-primary-900`}
        href="#"
      >
        Choose Plan
      </a>
    </div>
  );
}

export default FinancialPringinCard;
