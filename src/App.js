import "./App.css";
import React, { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(1000);
  const [actions, setActions] = useState([]);
  const [clientIndex, setClientIndex] = useState(1);
  const [serverState, setServer] = useState('Сервер не запущен');
  const [clientState, setClient] = useState(`Клиент${clientIndex} не запущен`);

  const startServer = () => {
    setServer('Сервер запущен');
  };

  const startClient = () => {
    if (serverState==='Сервер не запущен') {
      setClient('Для начала запустите сервер')
      return;
    }
    setClientIndex(clientIndex+1);
    setClient(`Клиент ${clientIndex} запущен`);
    setInterval(() => changeBalance(clientIndex), 2000);
  };

  const changeBalance = (clientIndex) => {
    let amount = Math.floor(Math.random() * 100) + 1;
    amount *= Math.random() > 0.5 ? 1 : -1;
    setBalance(balance + amount);
    actions.push(`\n[Клиент${clientIndex}]Изменил баланс на ${amount}`);
    setActions(actions);
  };


  return (
    <div>
      <button onClick={startServer}>Запустить сервер</button>
      <button onClick={startClient}>Запустить клиент</button>
      <br />
      <br />
      <br />
      <br />
      <div>Server: {serverState}</div>
      <div>Client: {clientState}</div>
      <div>Balance: {balance}</div>
      {actions.map((action, divKey) => (
        <div key={divKey}>{action}</div>
      ))}
    </div>
  );
  
}

export default App;
