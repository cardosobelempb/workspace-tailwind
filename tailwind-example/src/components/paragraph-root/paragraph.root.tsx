import { ReactNode } from "react";

type ParagraphRootProps = {
  children: ReactNode;
  className?: string;
};
export const ParagraphRoot: React.FC<ParagraphRootProps> = (props) => {
  return (
    <>
      <p
        {...props}
        className={`text-base sm:text-lg xl:text-xl ${props.className}`}
      >
        {props.children}
      </p>
    </>
  );
};
