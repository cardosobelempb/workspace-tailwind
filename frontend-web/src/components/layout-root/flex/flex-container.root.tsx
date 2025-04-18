import { ReactNode } from "react";

type FlexContainerRootProps = {
  children: ReactNode;
  className?: string;
};

export const FlexContainerRoot: React.FC<FlexContainerRootProps> = (props) => {
  return (
    <main
      {...props}
      className={`flex flex-col gap-y-10 md:gap-y-12 ${props.className}`}
    >
      {props.children}
    </main>
  );
};
