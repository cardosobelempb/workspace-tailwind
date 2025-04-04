import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: ReactNode;
};

export const ButtonRoot: React.FC<ButtonRootProps> = (props) => {
  switch (props.type) {
    case "submit":
      return (
        <div className="w-full">
          <button
            {...props}
            className={`w-full focus:outline-none rounded py-2 px-4 text-lg cursor-pointer hover:transition-all hover:duration-300 font-bold ${props.className}`}
            type="submit"
            onClick={props.onClick}
            value={props.value}
          >
            <span>{props.children}</span>
          </button>
        </div>
      );
    case "button":
      return (
        <div className="w-full">
          <button
            {...props}
            className={`w-full focus:outline-none rounded py-2 px-4 text-lg ${props.className}`}
            type="button"
            onClick={props.onClick}
            value={props.value}
          >
            <span>{props.children}</span>
          </button>
        </div>
      );
    default:
    case "button":
      return (
        <div className="w-full">
          <button
            {...props}
            className={`w-full focus:outline-none rounded py-2 px-4 text-lg ${props.className}`}
            type="button"
            onClick={props.onClick}
          >
            <span>{props.children}</span>
          </button>
        </div>
      );
  }
};
