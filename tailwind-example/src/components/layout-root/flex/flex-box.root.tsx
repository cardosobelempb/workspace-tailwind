import { ReactNode } from "react";

type BoxDefaultRootProps = {
  children: ReactNode;
  className?: string;
};

export const BoxFlexRoot: React.FC<BoxDefaultRootProps> = (props) => {
  return (
    <div
      {...props}
      className={`rounded flex flex-col basis-[300px] grow ${props.className}`}
    >
      {props.children}
    </div>
  );
};
