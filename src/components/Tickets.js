import React, { useState } from "react";
import AdjacentPage from "./AdjacentPage";

const Tickets = ({ children }) => {
  const [bankdata, setBankdata] = useState();

  

  return (
    <>
      <div className="mx-auto text-center my-4 text-3xl mt-6 flex justify-around">
        The Main Tickets Page
      </div>
      <div className="ml-7 mb-6">
        We're placing all tickets in the list component below...
      </div>
      <div>
        <hr />
      </div>

      <div>{children}</div>
    </>
  );
};

export default Tickets;
