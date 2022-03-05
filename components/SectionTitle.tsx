import React from "react";

interface SectionTitleProps {
  text: string;
  color: string;
  extraClasses?: string;
}

function SectionTitle({ text, extraClasses, color }: SectionTitleProps) {
  return (
    <h1
      className={`${extraClasses} ${color} text-3xl tracking-tight font-display text-center sm:text-5xl xl:text-left`}
    >
      {text}
    </h1>
  );
}

export default SectionTitle;
