import logo from './logo.svg';
import "./App.css";
import Header from './Component/Header';
import { Blance } from './Component/Blance';
import {IncomeExpence} from "./Component/IncomeExpence";
import {List } from "./Component/List";

function App() {
  return (
    <div className='container'>
    <Header/>
    <Blance/>
    <IncomeExpence/>
    <List/>
      
    </div>
  );
}

export default App;
