import { ReactNode } from "react";

type CardRootProps = {
  children: ReactNode;
  className?: string;
};

export const CardRoot: React.FC<CardRootProps> = (props) => {
  return (
    <div
      className={`p-5 rounded flex flex-col gap-y-6 grow basis-[300px] ${props.className}`}
    >
      {props.children}
    </div>
  );
};
