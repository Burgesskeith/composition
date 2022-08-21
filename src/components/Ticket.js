import React from "react";

const Ticket = ({ company }) => {
  return (
    <>
      <div className="mt-8 ml-6">
        <div className="text-2xl mb-2">Ticket Page</div>
        <div className="text-lg">
          My Company is - <strong>{company}</strong>
        </div>
        <div className="mb-8">
          <p>
            The data above is passed directly to this ticket page bypassing
            intermediate pages
          </p>
          <p>
            When you choose a bank from the drop down list the state changes in
            the App component but reflects 4 levels deep without prop drilling.
          </p>

          <hr />
        </div>
      </div>
    </>
  );
};

export default Ticket;
