import React from "react";

interface TextProps {
  content: string; // The text content
  size?: "sm" | "md" | "lg" | "xl"; // Text size
  color?: string; // Tailwind color class (e.g., "text-gray-500")
  weight?: "light" | "normal" | "medium" | "bold"; // Font weight
  align?: "left" | "center" | "right" | "justify"; // Text alignment
  className?: string; // Additional custom classes
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

const Text: React.FC<TextProps> = ({
  content,
  size = "md",
  color = "text-black",
  weight = "normal",
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={`${sizeClasses[size]} ${color} ${weightClasses[weight]} text-${align} ${className}`}
    >
      {content}
    </div>
  );
};

export default Text;