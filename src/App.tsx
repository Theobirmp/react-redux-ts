import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { State } from './state/reducers';
import { useDispatch } from 'react-redux';
import { ActionCreators } from './state';
import { bindActionCreators } from 'redux';

function App() {
  const state=useSelector(((state:State)=>state.bank))
  const dispatch=useDispatch()
  const {depositMoney,widthdrawMoney,bankrupt} = bindActionCreators(ActionCreators,dispatch)
  
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>depositMoney(1000)}>depositMoney</button>
      <button onClick={()=>widthdrawMoney(500)}>widthdrawMoney</button>
      <button onClick={()=>bankrupt()}>bankrupt</button>
    </div>
  );
}

export default App;
