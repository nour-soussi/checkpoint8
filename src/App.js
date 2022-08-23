import { useState } from 'react';
import './App.css';
import{ movies } from'./Data'; 
import List from './Component/List';
import CustomNavbar from './Component/CustomNavbar';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Details from './Component/Details'

function App() {
  const[Films,setFilms]=useState(movies);
  const[Caracter,setCaracter]=useState('');
  const[Rate,setRate]=useState(0);
  return (
    <div>
      <CustomNavbar setCaracter={setCaracter} setRate={setRate}/>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<List Films={Films} Caracter={Caracter} Rate={Rate}/>}> </Route>
      <Route path="/Details/:id" element={<Details Films={Films}/>}> </Route>
    </Routes>
  </BrowserRouter>
    </div>
    );
}


export default App;