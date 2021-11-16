import React from 'react';
import { observer } from 'mobx-react';
import './App.scss';
import SideBar from '../SideBar';
import MainScreen from '../MainScreen';

const App: React.FC = observer(() => (
    <div className="App">
        <SideBar/>
        <MainScreen/>
    </div>
  ))

export default App;
