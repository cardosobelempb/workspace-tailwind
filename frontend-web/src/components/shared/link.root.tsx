import Link from "next/link";
import { FunctionComponent, ReactNode, AnchorHTMLAttributes } from "react";

interface LinkRootProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  colorClass?: "green" | "blue" | "orange" | "white" | "black" | "transparent";
}

const LinkRoot: FunctionComponent<LinkRootProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={`uppercase border-2 text-xs p-2 rounded sm:text-base sm:px-4 ${className}`}
      href="#"
    >
      {children}
    </Link>
  );
};

export default LinkRoot;
