import React from "react";
import DropField from "./utilities/DropField";

const AdjacentPage = ({ company, handleChange }) => {
  return (
    <>
      <div className="border-l">
        <div className="text-2xl mt-10 ml-6">Adjacent Page</div>
        <div className="mx-6">
          <div>
            Here's where we display some state that was set in the Main Tickets
            page
          </div>
          <div>
            I too can see <span className="text-xl font-bold">{company}</span>
          </div>
          <div className="my-4">
            I can change the state(bank) from down the component list here too
          </div>
        </div>

        <div>
          <DropField state={company} handleSelect={handleChange} />
        </div>
      </div>
    </>
  );
};

export default AdjacentPage;
