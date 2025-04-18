import { ReactNode } from "react";

type BoxRootProps = {
  children: ReactNode;
  className?: string;
};

export const BoxRoot: React.FC<BoxRootProps> = (props) => {
  return (
    <div {...props} className={`${props.className}`}>
      {props.children}
    </div>
  );
};
