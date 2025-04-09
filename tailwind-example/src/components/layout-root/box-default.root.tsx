import { ReactNode } from "react";

type BoxDefaultRootProps = {
  children: ReactNode;
  className?: string;
  display?: "flex" | "grid";
  type?: "div" | "article";
};

export const BoxDefaultRoot: React.FC<BoxDefaultRootProps> = ({
  display,
  ...props
}) => {
  const flex = display === "flex" ? "flex flex-col" : "";
  const grid = display === "grid" ? "grid" : "";
  switch (props.type) {
    case "article":
      return (
        <div
          {...props}
          className={`rounded ${flex} ${grid}  ${props.className}`}
        >
          {props.children}
        </div>
      );
    default:
      return (
        <div
          {...props}
          className={`rounded ${display === "flex" ? flex : grid} ${
            props.className
          }`}
        >
          {props.children}
        </div>
      );
  }
};
