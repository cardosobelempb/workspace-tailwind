import { ReactNode } from "react";

type BoxRootProps = {
  children: ReactNode;
  className?: string;
};

export const BoxRoot: React.FC<BoxRootProps> = (props) => {
  return (
    <div
      {...props}
      className={`rounded flex flex-col basis-[300px] grow ${props.className}`}
    >
      {props.children}
    </div>
  );
};
