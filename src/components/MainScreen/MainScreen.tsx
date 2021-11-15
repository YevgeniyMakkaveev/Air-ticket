import { observer } from "mobx-react";
import React, { useState } from "react";
import ticketStore from "../../store/ticketStore";
import FlightCard from "./FlightCard";

const MainScreen: React.FC = observer(() => {
  const [limit, setLimit] = useState(4);
  const { filteredFlight } = ticketStore;
  const data = filteredFlight.slice(0, limit);

  return (
    <div>
      {filteredFlight &&
        data.map((el) => (
          <FlightCard
            key={`${el.carrierUid}+${Math.random().toFixed(10)}`}
            {...el}
          />
        ))}
      {!filteredFlight[0] && "Нет данных"}
      <button onClick={() => setLimit(limit + 4)}>Жмякни меня</button>
    </div>
  );
});
export default MainScreen;
