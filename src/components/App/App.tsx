import React from 'react';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import './App.scss';
import ticketStore from '../../store/ticketStore';
import SideBar from '../SideBar';
import MainScreen from '../MainScreen';





const App: React.FC = observer(() => {

  // console.log( Array.from(new Set(ticketStore.allFlight.map((el) => el.transferNumber))))

  // ticketStore.testThat()

  console.log(toJS(ticketStore.allFlight))

  return (
    <div className="App">
        <SideBar/>
        <MainScreen/>
    </div>
  );
})

export default App;
