import { ReactNode } from "react";

type FooterDefaultRootProps = {
  children: ReactNode;
  className?: string;
  display?: "flex" | "grid";
};

export const FooterDefaultRoot: React.FC<FooterDefaultRootProps> = ({
  display = "flex",
  ...props
}) => {
  const flex =
    display === "flex"
      ? "flex flex-col lg:flex-col xl:flex-row gap-5 lg:gap-10 p-6 lg:p-16 *:basis-full 2xl:rounded"
      : "";
  const grid =
    display === "grid"
      ? "grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 lg:gap-10 p-6 lg:p-16 2xl:rounded"
      : "";
  return (
    <footer {...props} className={`${flex} ${grid} ${props.className}`}>
      {props.children}
    </footer>
  );
};
