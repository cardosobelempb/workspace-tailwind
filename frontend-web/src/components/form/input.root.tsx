import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

type LabelRootProps = LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string;
  children: ReactNode;
};

type InputRootProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: LabelRootProps;
};

export const InputRoot: React.FC<InputRootProps> = (props) => {
  switch (props.type) {
    case "submit":
      return (
        <div className="w-full">
          {props.label && (
            <label>
              <span>{props.children}</span>
              <input
                {...props}
                className={`w-full focus:outline-none rounded py-2 px-4 text-lg cursor-pointer hover:transition-all hover:duration-300 font-bold ${props.className}`}
                type="submit"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
              />
            </label>
          )}

          <input
            {...props}
            className={`w-full focus:outline-none rounded py-2 px-4 text-lg cursor-pointer hover:transition-all hover:duration-300 font-bold ${props.className}`}
            type="submit"
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      );
    case "email":
      return (
        <div className="w-full">
          {props.label && (
            <label>
              <span>{props.children}</span>
              <input
                {...props}
                className={`w-full focus:outline-none rounded py-2 px-4 text-lg ${props.className}`}
                type="email"
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
              />
            </label>
          )}

          <input
            {...props}
            className={`w-full focus:outline-none rounded py-2 px-4 text-lg ${props.className}`}
            type="email"
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      );
    default:
    case "email":
      return (
        <div className="w-full">
          {props.label && (
            <label>
              <span>{props.children}</span>
              <input
                {...props}
                className={`w-full focus:outline-none rounded py-2 px-4 text-lg ${props.className}`}
                type="email"
                placeholder={props.placeholder}
                onChange={props.onChange}
              />
            </label>
          )}

          <input
            {...props}
            className={`w-full focus:outline-none rounded py-2 px-4 text-lg  ${props.className}`}
            type="text"
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      );
  }
};
