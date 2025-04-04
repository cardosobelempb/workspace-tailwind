import { ReactNode } from "react";

type HeadingRootProps = {
  children: ReactNode;
  className?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
export const HeadingRoot: React.FC<HeadingRootProps> = (props) => {
  {
    switch (props.type) {
      case "h1":
        return (
          <h1
            {...props}
            className={`text-2xl font-bold sm:text-3xl xl:text-5xl ${props.className}`}
          >
            {props.children}
          </h1>
        );
      case "h2":
        return (
          <h2 {...props} className={`text-xl font-bold ${props.className}`}>
            {props.children}
          </h2>
        );
      case "h6":
        return (
          <h2 {...props} className={`text-lg font-semibold ${props.className}`}>
            {props.children}
          </h2>
        );
      case "h5":
        return (
          <h2 {...props} className={`font-bold ${props.className}`}>
            {props.children}
          </h2>
        );

      default:
        return (
          <h1
            {...props}
            className={`text-2xl font-bold sm:text-3xl xl:text-5xl ${props.className}`}
          >
            {props.children}
          </h1>
        );
    }
  }
};
