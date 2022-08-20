import './App.css'
import {useState} from 'react'
import {movies} from './data'
import MovieList from "./Component/MovieList"
import CustomNavbar from "./Component/CustomNavbar"
import AddMovie from "./Component/AddMovie"

function App() {
  const [films,setFilms]=useState(movies);
  const [caractere,setCaractere]=useState(' ');
  const [rate,setRate]=useState(0);
  const addFilm=(film)=>{
    setFilms([...films,film])
  }

  return (
    <div>
      <CustomNavbar setCaractere={setCaractere} setRate={setRate}/>
      <AddMovie addFilm={addFilm}/>
      <MovieList films={films} caractere={caractere} rate={rate} />
    </div>
  );
}

export default App;
