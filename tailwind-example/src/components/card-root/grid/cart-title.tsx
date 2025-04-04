import { ReactNode } from "react";

type CardTitleProps = {
  children: ReactNode;
  className?: string;
};
export const CardTitle: React.FC<CardTitleProps> = (props) => {
  return (
    <>
      <h2 className={`text-xl font-bold ${props.className}`}>
        {props.children}
      </h2>
    </>
  );
};
