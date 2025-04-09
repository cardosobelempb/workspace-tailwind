import { ReactNode } from "react";

type FlexBoxRootProps = {
  children: ReactNode;
  className?: string;
};

export const FlexBoxRoot: React.FC<FlexBoxRootProps> = (props) => {
  return (
    <div
      {...props}
      className={`rounded flex flex-col basis-[300px] grow ${props.className}`}
    >
      {props.children}
    </div>
  );
};
