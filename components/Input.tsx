import React from "react";

interface InputProps {
  extraClasses?: string;
}

const Input = ({ extraClasses }: InputProps) => (
  <input
    type="text"
    className={`w-full h-12 px-6 rounded-3xl bg-white placeholder:font-body placeholder:font-bold placeholder:text-velvet-rope/50 shadow-2xl ${extraClasses}`}
    placeholder="Enter email address"
  />
);

export default Input;
