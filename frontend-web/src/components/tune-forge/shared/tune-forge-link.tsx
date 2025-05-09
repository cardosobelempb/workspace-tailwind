import { IconType } from "react-icons";

interface TuneForgeLinkProps {
  title: string;
  icon?: IconType;
  textColor?: string; // Ex: 'text-white'
  bgColor?: string; // Ex: 'bg-blue-500'
  borderColor?: string; // Ex: 'border-blue-500'
  href: string;
  className?: string;
  classIcon?: string;
  linkType: "blue" | "golden" | "border-blue-blue" | "border-golden-white";
}

function TuneForgeLink({
  title,
  icon: Icon,
  href,
  className = "",
  linkType,
}: TuneForgeLinkProps) {
  switch (linkType) {
    case "golden":
      return (
        <a
          className={`px-3 py-1 md:px-6 bg-df-golden text-sm md:text-lg flex items-center gap-x-3 text-df-blue md:gap-x-4 md:border-2 md:border-white rounded-none ${className}`}
          href={href}
        >
          {Icon && <Icon className="md:text-white" />}
          {title}
        </a>
      );

    case "blue":
      return (
        <a
          className={`px-3 py-1 md:px-6 text-sm md:text-lg flex items-center gap-x-3 md:gap-x-4 border-2 rounded-none  ${
            className ? className : "text-white border-white"
          }`}
          href={href}
        >
          {Icon && <Icon className="md:text-white" />}
          {title}
        </a>
      );

    default:
      break;
  }
}

export default TuneForgeLink;
