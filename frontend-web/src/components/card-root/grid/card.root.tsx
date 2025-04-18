import { ReactNode } from "react";

type CardRootProps = {
  children: ReactNode;
  className?: string;
};

export const CardRoot: React.FC<CardRootProps> = (props) => {
  return (
    <div className={`grid gap-5  ${props.className}`}>{props.children}</div>
  );
};
