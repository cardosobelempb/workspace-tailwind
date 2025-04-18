import { ReactNode } from "react";

type BoxRootProps = {
  children: ReactNode;
  className?: string;
};

export const ArticleRoot: React.FC<BoxRootProps> = (props) => {
  return (
    <article {...props} className={`${props.className}`}>
      {props.children}
    </article>
  );
};
