import { ReactNode } from "react";

type FlexContentRootProps = {
  children: ReactNode;
  className?: string;
  type: "section" | "article";
};

export const FlexContentRoot: React.FC<FlexContentRootProps> = (props) => {
  {
    switch (props.type) {
      case "section":
        return (
          <section
            {...props}
            className={`flex flex-wrap gap-5 lg:gap-10 p-6 lg:p-16 ${props.className}`}
          >
            {props.children}
          </section>
        );
      case "article":
        return (
          <article
            {...props}
            className={`flex flex-wrap gap-5 ${props.className}`}
          >
            {props.children}
          </article>
        );

      default:
        return (
          <section
            {...props}
            className={`flex flex-wrap gap-5 ${props.className}`}
          >
            {props.children}
          </section>
        );
    }
  }
};
