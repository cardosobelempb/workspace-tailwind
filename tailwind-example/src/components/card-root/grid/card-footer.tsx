import { ReactNode } from "react";

type CardFooterProps = {
  children: ReactNode;
  className?: string;
};

export const CardFooter: React.FC<CardFooterProps> = (props) => {
  return (
    <header className={`w-full ${props.className}`}>{props.children}</header>
  );
};
