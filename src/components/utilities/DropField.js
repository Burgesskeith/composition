import React from "react";
import StdButton from "./StdButton";
import { FaAngleRight } from "react-icons/fa";

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
        {/* If there's a value for state show the button */}
        {state && (
          <StdButton size="sm" textColor="white" bgColor="red-600">
            <div className="flex items-center">
              <div>
                <p>Click Me</p>
              </div>
              <div className="ml-2">
                <span clasName="pb-2"></span>
              </div>
            </div>
          </StdButton>
        )}
      </div>
    </form>
  );
};

export default DropField;
