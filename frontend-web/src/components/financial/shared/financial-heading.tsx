interface FinacialHeadingProps {
  title: string;
  subtitle: string;
}
function FinacialHeading({ title, subtitle }: FinacialHeadingProps) {
  return (
    <div className="flex flex-col gap-y-5 md:gap-y-3 *:text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-base dark:text-primary-600">{subtitle}</p>
    </div>
  );
}

export default FinacialHeading;
