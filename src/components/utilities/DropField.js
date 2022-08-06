import React from "react";
import StdButton from "./StdButton";

const DropField = ({ state, handleSelect, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <select
          value={state}
          onChange={handleSelect}
          type="select"
          className="flex border py-2 px-6 rounded mx-auto mb-12 shadow-lg"
        >
          <option value="Westpac Bank">Westpac Bank</option>
          <option value="CBA">CBA</option>
          <option value="National Australia Bank">
            National Australia Bank
          </option>
          <option value="ANZ">ANZ</option>
        </select>
      </div>
      <div className="flex justify-around">
        <StdButton size="sm" textColor="white" bgColor="red-600">
          <p>Click Me</p>
        </StdButton>
      </div>
    </form>
  );
};

export default DropField;
