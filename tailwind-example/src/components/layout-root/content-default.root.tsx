import { ReactNode } from "react";

type ContentDefaultRootProps = {
  children: ReactNode;
  className?: string;
  display?: "flex" | "grid";
};

export const ContentDefaultRoot: React.FC<ContentDefaultRootProps> = ({
  display = "flex",
  ...props
}) => {
  const flex =
    display === "flex"
      ? "flex flex-col lg:flex-col xl:flex-row gap-5 lg:gap-10 p-6 lg:p-16 *:basis-full"
      : "";
  const grid =
    display === "grid"
      ? "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 lg:gap-10 p-6 lg:p-16"
      : "";
  return (
    <section {...props} className={`${flex} ${grid} ${props.className}`}>
      {props.children}
    </section>
  );
};
