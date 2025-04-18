import Link from "next/link";
import { FunctionComponent, ReactNode, AnchorHTMLAttributes } from "react";

interface LinkDefaultRootProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

const LinkDefaultRoot: FunctionComponent<LinkDefaultRootProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={`uppercase border-2 border-accent text-xs p-2 rounded sm:text-base sm:px-4 ${className}`}
      href="#"
    >
      {children}
    </Link>
  );
};

export default LinkDefaultRoot;
