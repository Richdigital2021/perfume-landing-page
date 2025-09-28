import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition ${className}`}
    >
      {text}
    </button>
  );
};
