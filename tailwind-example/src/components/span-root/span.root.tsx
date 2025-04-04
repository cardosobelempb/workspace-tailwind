import { ReactNode } from "react";

type BoxRootProps = {
  children: ReactNode;
  className?: string;
};

export const SpanRoot: React.FC<BoxRootProps> = (props) => {
  return (
    <span {...props} className={`text-[10px] ${props.className}`}>
      {props.children}
    </span>
  );
};
