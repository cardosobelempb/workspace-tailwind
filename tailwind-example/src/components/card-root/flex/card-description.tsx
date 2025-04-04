import { ReactNode } from "react";

type CardDecriptionProps = {
  children: ReactNode;
  className?: string;
};
export const CardDecription: React.FC<CardDecriptionProps> = (props) => {
  return (
    <>
      <p {...props} className={`text-base ${props.className}`}>
        {props.children}
      </p>
    </>
  );
};
