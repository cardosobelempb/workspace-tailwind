import { ReactNode } from "react";

type ContentRootProps = {
  children: ReactNode;
  className?: string;
  type: "section" | "article";
};
export const ContentRoot: React.FC<ContentRootProps> = (props) => {
  {
    switch (props.type) {
      case "section":
        return (
          <section
            {...props}
            className={`flex flex-wrap gap-5 ${props.className}`}
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
