import React from "react";

const Ticket = ({ company }) => {
  return (
    <>
      <div className="mt-8 ml-6">
        <div className="text-2xl ">
          My Company is - <strong>{company}</strong>
        </div>
        <div className="mb-8">
          <p>The data above is passed through children to this ticket page</p>
          <p>
            When you choose a bank from the drop down list the state changes in
            the App component
          </p>
          <p>
            It's then passed down through children to the ticketList where the
            company prop is used.
          </p>
          <hr />
        </div>
        I'm a Ticket
      </div>
    </>
  );
};

export default Ticket;
