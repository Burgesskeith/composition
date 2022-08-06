import React from "react";

const Tickets = ({ children }) => {
  return (
    <>
      <div className="mx-auto text-center my-4 text-3xl mb-6">
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
