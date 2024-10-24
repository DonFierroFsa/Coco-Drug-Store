import React from "react";

export default function CustomButton({ text, type = "", onClick = null }) {
  return (
    <button
      type={type}
      className="min-w-max rounded-md border-b-4 border-l-2 border-r-2 border-dashed border-roseRed border-l-transparent border-r-transparent bg-customBlue px-4 text-xl font-semibold outline-double outline-4 outline-offset-1 outline-lightRed duration-150 hover:scale-110 hover:border-lightOrange hover:text-lightYellow hover:brightness-150 active:scale-105 active:border-l-0 active:border-r-0 active:brightness-75"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
