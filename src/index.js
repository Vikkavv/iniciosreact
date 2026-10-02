import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros/SumarNumeros';
import SaludoPadre from './components/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas';
import Contador from './components/Contador';
import Car from './components/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {false && <>
      <SumarNumeros n1={45} n2={3}/>
      <SumarNumeros n1={423} n2={312}/>
      <SaludoPadre/>
      <PadreMatematicas/>
      <Contador/>
    </>}

    <Car marca="Mercedes" modelo="AMG" velocidadMax={250} aceleracion={30}/>
    <Car marca="BMW" modelo="X5" velocidadMax={200} aceleracion={35}/>
    <Car marca="Kia" modelo="Picanto" velocidadMax={120} aceleracion={12}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
