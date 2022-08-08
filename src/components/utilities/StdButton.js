// Standard button needs to be placed in the component with

import React from "react";

const StdButton = ({ textColor, bgColor, children }) => {
  return (
    <>
      <button
        className={`bg-${bgColor} text-${textColor} border py-2 px-8 rounded hover:opacity-90 hover:shadow-lg text-lg font-bold`}
      >
        {children}
      </button>
    </>
  );
};

export default StdButton;
