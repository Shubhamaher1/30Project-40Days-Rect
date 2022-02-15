import logo from './logo.svg';
import "./App.css";
import Header from './Component/Header';
import { Blance } from './Component/Blance';
import {IncomeExpence} from "./Component/IncomeExpence";
import {List } from "./Component/List";
import {Tranjaction} from "./Component/Tranjaction.jsx";

import {GlobalProvider} from "./Context/GlobelState";

function App() {
  return (
    <GlobalProvider className='container'>
    <Header/>
    <Blance/>
    <IncomeExpence/>
    <List/>
    <Tranjaction/>
      
    </GlobalProvider>
  );
}

export default App;
