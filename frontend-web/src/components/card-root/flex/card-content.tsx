import { ReactNode } from "react";

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export const CardContent: React.FC<CardContentProps> = (props) => {
  return (
    <div
      className={`p-5 rounded flex flex-col gap-y-6 grow basis-[300px] ${props.className}`}
    >
      {props.children}
    </div>
  );
};
