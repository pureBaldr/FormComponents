import {
  bgHoverColorMix,
  bgMix,
  borderColorMix,
  mixClass,
  textColorMix,
  textHoverColorMix,
} from "helpers/P7mixClass";

interface Props {
  onClick?: any;
  className?: string;
  bg?: string;
  color?: string;
  hoverColor?: string;
  spacing?: string;
  type?: "submit" | "reset" | "button";
  outline?: boolean;
}
export const Button: React.FC<Props> = ({
  hoverColor = "",
  color = "white",
  bg = "primary",
  onClick,
  children,
  spacing = "sm",
  className = "",
  type = "submit",
  outline = false,
}) => (
  <button
    type={type}
    className={mixClass({
      "border cursor-pointer transition duration-75 ease-in-out rounded-lg uppercase font-medium shadow-['8px 0px 0px 0px rgba(66, 68, 90, 1)']":
        true,
      ...textHoverColorMix(hoverColor),
      ...textColorMix(!outline ? color : bg),
      ...bgMix(!outline ? bg : ""),
      ...bgHoverColorMix(hoverColor ? hoverColor : bg),
      ...borderColorMix(bg),
      "px-6 py-3": spacing === "sm",
      "px-8 py-4": spacing === "lg",

      [className]: true,
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
