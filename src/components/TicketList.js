import React from "react";

const TicketList = ({ children, data }) => {
  const handleClick = (e) => {
    alert(e.target.innerText);
  };
  const listItems = data.map((item) => (
    <>
      <ul>
        <li
          className="hover:text-green-600 hover:underline hover:cursor-pointer"
          onClick={handleClick}
          key={item.name}
        >
          {item.name}: ${item.amount}
        </li>
      </ul>
    </>
  ));
  return (
    <>
      <div className="mb-4 text-2xl pl-6">TicketList Page</div>
      <div className="mb-4 pl-12">{listItems}</div>
      <hr />
      <div>{children}</div>
    </>
  );
};

export default TicketList;
