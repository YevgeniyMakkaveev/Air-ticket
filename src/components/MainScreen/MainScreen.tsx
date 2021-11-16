import { observer } from "mobx-react";
import React, { useState } from "react";
import ticketStore from "../../store/ticketStore";
import FlightCard from "./FlightCard";
import './MainScreen.scss'

const MainScreen: React.FC = observer(() => {
  const [limit, setLimit] = useState(4);
  const { filteredFlight } = ticketStore;
  const data = filteredFlight.slice(0, limit);

  return (
    <div>
      <div className='content-wrap'>
      {filteredFlight &&
        data.map((el) => (
          <FlightCard
            key={`${el.carrierUid}+${Math.random().toFixed(10)}`}
            {...el}
          />
        ))}
      {!filteredFlight[0] && "Нет данных"}
      <div className='btn-wrap'>
       <button className='more-btn' onClick={() => setLimit(limit + 4)}>Показать еще</button> 
      </div>
      </div>
    </div>
  );
});
export default MainScreen;
