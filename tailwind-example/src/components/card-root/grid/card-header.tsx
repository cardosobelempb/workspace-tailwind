import { ReactNode } from "react";

type CardHeaderProps = {
  children: ReactNode;
  className?: string;
};

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
  return (
    <header className={`w-full ${props.className}`}>{props.children}</header>
  );
};
