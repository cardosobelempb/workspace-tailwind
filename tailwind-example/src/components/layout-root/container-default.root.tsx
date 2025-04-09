import { ReactNode } from "react";

type ContainerDefaultRootProps = {
  children: ReactNode;
  className?: string;
  type: "flex" | "grid";
};

export const ContainerDefaultRoot: React.FC<ContainerDefaultRootProps> = (
  props
) => {
  switch (props.type) {
    case "flex":
      return (
        <main
          {...props}
          className={`max-w-screen-2xl mx-auto flex flex-col gap-y-10 md:gap-y-12 ${props.className}`}
        >
          {props.children}
        </main>
      );
    case "grid":
      return (
        <main
          {...props}
          className={`max-w-screen-2xl mx-auto  flex flex-col gap-y-10 md:gap-y-12 ${props.className}`}
        >
          {props.children}
        </main>
      );

    default:
      return (
        <main
          {...props}
          className={`flex flex-col gap-y-10 md:gap-y-12 ${props.className}`}
        >
          {props.children}
        </main>
      );
  }
};
