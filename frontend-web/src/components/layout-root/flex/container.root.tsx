import { ReactNode } from "react";

type ContainerRootProps = {
  children: ReactNode;
  className?: string;
};

export const ContainerRoot: React.FC<ContainerRootProps> = (props) => {
  return (
    <main
      {...props}
      className={`flex flex-col gap-y-6 md:gap-y-12 ${props.className}`}
    >
      {props.children}
    </main>
  );
};
