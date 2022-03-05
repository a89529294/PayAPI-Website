import React from "react";

interface SectionBodyTextProps {
  children: string;
  color: string;
  extraClasses?: string;
}

function SectionBodyText({
  children,
  color,
  extraClasses,
}: SectionBodyTextProps) {
  return (
    <p className={`font-body leading-7 mx-6 ${color} ${extraClasses}`}>
      {children}
    </p>
  );
}

export default SectionBodyText;