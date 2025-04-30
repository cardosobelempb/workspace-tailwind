type TColor =
  | "text-primary-green"
  | "bg-primary-green"
  | "text-primary-blue"
  | "bg-primary-blue"
  | "text-primary-orange"
  | "bg-primary-orange"
  | "text-white"
  | "bg-white"
  | "text-white"
  | "text-primary-900"
  | "bg-primary-900"
  | "transparent";

export interface IColorProps {
  text?: TColor;
  bg?: TColor;
  link?: {
    text?: TColor;
    bg?: TColor;
  };
}

export const colorClass: IColorProps = {
  text: "text-primary-green",
  bg: "bg-primary-green",
  link: {
    text: "bg-primary-green",
    bg: "bg-primary-green",
  },
};
