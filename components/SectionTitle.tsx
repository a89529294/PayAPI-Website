import React from "react";

interface SectionTitleProps {
  text: string;
  color: string;
  size?: "small" | "price";
  extraClasses?: string;
}

function SectionTitle({ text, extraClasses, color, size }: SectionTitleProps) {
  let sizeClasses;
  if (size === "price") sizeClasses = "text-price sm:text-5xl";
  else if (size === "small") sizeClasses = "text-2xl sm:text-3xl";
  else sizeClasses = "text-3xl sm:text-5xl";
  return (
    <h1
      className={`${extraClasses} ${color} ${sizeClasses} tracking-tight font-display text-center  xl:text-left`}
    >
      {text}
    </h1>
  );
}

export default SectionTitle;
