import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Tickets from "./components/Tickets";
import TicketList from "./components/TicketList";
import Ticket from "./components/Ticket";
import DropField from "./components/utilities/DropField";

function App() {
  const [state, setState] = useState(null);

  const handleSelect = (e) => {
    setState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You chose " + state);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <DropField
        state={state}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
      />
      <div>
        {state && (
          <Tickets>
            <TicketList>
              <Ticket company={state} />
            </TicketList>
          </Tickets>
        )}
      </div>
    </>
  );
}

export default App;
