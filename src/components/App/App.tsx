import React from 'react';
import { observer } from 'mobx-react';
import getCompanies from '../../units/getCompanies';
import './App.css';
import ticketStore from '../../store/ticketStore';





const App: React.FC = observer(() => {

  ticketStore.testThat()

  console.log(getCompanies(ticketStore.allFlight))

  return (
    <div className="App">

    </div>
  );
})

export default App;
