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
          <section {...props} className={`grid ${props.className}`}>
            {props.children}
          </section>
        );
      case "article":
        return (
          <article
            {...props}
            className={`max-w-screen-2xl mx-auto grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  ${props.className}`}
          >
            {props.children}
          </article>
        );

      default:
        return (
          <section
            {...props}
            className={`max-w-screen-2xl mx-auto grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  ${props.className}`}
          >
            {props.children}
          </section>
        );
    }
  }
};
