import { ReactNode } from "react";

type ContainerRootProps = {
  children: ReactNode;
  className?: string;
};

export const ContainerRoot: React.FC<ContainerRootProps> = (props) => {
  return (
    <main {...props} className={`px-3 ${props.className}`}>
      {props.children}
    </main>
  );
};
