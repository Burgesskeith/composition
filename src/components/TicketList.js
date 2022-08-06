import React from "react";

const TicketList = ({ children }) => {
  return (
    <>
      <div className="mb-4 text-2xl pl-6">Here's a list of tickets</div>
      <div className="mb-4 pl-12">
        <ul>
          <li>Ticket 1</li>
          <li>Ticket 2</li>
          <li>Ticket 3</li>
          <li>Ticket 4</li>
        </ul>
      </div>
      <hr />
      <div>{children}</div>
    </>
  );
};

export default TicketList;
