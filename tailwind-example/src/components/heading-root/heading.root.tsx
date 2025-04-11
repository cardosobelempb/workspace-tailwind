import { ReactNode } from "react";

type HeadingRootProps = {
  children: ReactNode;
  className?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isEffect?: boolean;
};
export const HeadingRoot: React.FC<HeadingRootProps> = ({
  isEffect = true,
  ...props
}) => {
  {
    switch (props.type) {
      case "h1":
        return (
          <h1
            {...props}
            className={`text-5xl font-bold sm:text-3xl xl:text-7xl ${props.className}`}
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
      case "h3":
        return (
          <h3
            {...props}
            className={`text-lg font-semibold lg:text-xl ${props.className}`}
          >
            {props.children}
          </h3>
        );
      case "h6":
        return (
          <h6
            className={`text-sm uppercase ${
              isEffect
                ? "pl-6 relative before before:h-1 before:w-4 before:top-2/4 before:-translate-y-2/4 before:left-0 lg:text-lg"
                : ""
            } ${props.className}`}
          >
            {props.children}
          </h6>
        );
      case "h5":
        return (
          <h5 {...props} className={`font-bold ${props.className}`}>
            {props.children}
          </h5>
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
