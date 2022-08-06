import React from "react";

const Tickets = ({ children }) => {
  return (
    <>
      <div className="mx-auto text-center my-4 text-3xl">
        The Main Tickets Page
      </div>
      <div>
        <hr />
      </div>
      <div>{children}</div>
    </>
  );
};

export default Tickets;
