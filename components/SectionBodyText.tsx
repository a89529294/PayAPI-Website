import React from "react";

interface SectionBodyTextProps {
  children: string;
  color: string;
  extraClasses?: string;
  noWidth?: boolean;
}

function SectionBodyText({
  children,
  color,
  extraClasses,
  noWidth,
}: SectionBodyTextProps) {
  return (
    <p
      className={`font-body leading-7 ${
        noWidth ? "" : "w-80"
      } ${color} ${extraClasses}`}
    >
      {children}
    </p>
  );
}

export default SectionBodyText;
