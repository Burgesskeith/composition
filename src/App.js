import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Tickets from "./components/Tickets";
import TicketList from "./components/TicketList";
import Ticket from "./components/Ticket";
import DropField from "./components/utilities/DropField";
import TicketData from "./components/data/TicketData";
import AdjacentPage from "./components/AdjacentPage";

function App() {
  const [state, setState] = useState("Westpac Bank");
  const [data, setData] = useState(TicketData);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You chose " + state);
  };

  return (
    <>
      <div className="border-b mb-6">
        <NavBar />
      </div>
      <DropField
        state={state}
        handleSelect={handleChange}
        handleSubmit={handleSubmit}
      />
      <div>
        {state && (
          <Tickets>
            <TicketList data={data}>
              <div className="flex justify-start">
                <div className="w-1/2">
                  <Ticket company={state} handleChange={handleChange} />
                </div>
                <div className="w-1/2">
                  <AdjacentPage company={state} handleChange={handleChange} />
                </div>
              </div>
            </TicketList>
          </Tickets>
        )}
      </div>
    </>
  );
}

export default App;
