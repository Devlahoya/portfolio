import React from "react";

const CoursesTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-blue-500"
    : "text-black border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-2 py-2 text-lg cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default CoursesTag;
