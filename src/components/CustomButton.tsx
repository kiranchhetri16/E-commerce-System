import { Link } from "react-router-dom";
import type { CSSProperties } from "react";

interface CustomButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  to,
  onClick,
  children,
  variant = "primary",
  icon,
  className = "",
  style,
  type = "button",
}) => {
  const baseClass =
    "w-fit px-4 py-2.5 rounded-[5px] flex items-center gap-2.5 text-sm cursor-pointer leading-5 transition delay-150 border";

  const styles =
    variant === "primary"
      ? "bg-primary font-primary text-muted-foreground border-secondary hover:bg-secondary-20 hover:text-secondary"
      : "bg-secondary-20 font-primary text-secondary border-transparent hover:border-secondary";

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`${baseClass} ${styles} ${className}`}
        style={style}
      >
        {children} {icon && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${styles} ${className}`}
      style={style}
    >
      {children} {icon && <span>{icon}</span>}
    </button>
  );
};

export default CustomButton;