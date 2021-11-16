import { observer } from "mobx-react";
import {toJS} from 'mobx'
import React, { useState } from "react";
import ticketStore from "../../store/ticketStore";
import FlightCard from "./FlightCard";
import './MainScreen.scss'

const MainScreen: React.FC = observer(() => {
  const [limit, setLimit] = useState(4);
  const { filteredFlight } = ticketStore;
  const data = filteredFlight.slice(0, limit);
  console.log(toJS(filteredFlight))

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
      {!filteredFlight[0]&& <div className='no-data'> Нет данных </div>}     
      {filteredFlight[0]&& <button className='more-btn' onClick={() => setLimit(limit + 4)}>Показать еще</button> }
      </div>
    </div>
  );
});
export default MainScreen;
