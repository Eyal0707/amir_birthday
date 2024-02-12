import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import "./Animations.css"
import Car from './pages/car/Car';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Laboratory from './pages/laboratory/Laboratory';
import Movie from './pages/movie/Movie';
import Road from './pages/road/Road';
import Nafis from './pages/nafis/Nafis';
import Greece from './pages/greece/Greece';

function App() {
  const [isInteracted, setIsInteracted] = useState(false);
  return (
    <>
      {
        isInteracted
          ? <>
            <BrowserRouter>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/car" element={<Car />} />
                <Route path="/road" element={<Road />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/laboratory" element={<Laboratory />} />
                <Route path="/nafis" element={<Nafis />} />
                <Route path="/greece" element={<Greece />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </BrowserRouter>
          </>
          : <div className="barrier" onClick={() => setIsInteracted(true)}>
            <h1>פתח רק אם אתה אמיר מוכ אהבל</h1>
            <p>לחץ בכל מקום כדי להתחיל</p>
            <p>(sound on)</p>
          </div>
      }
    </>
  );
}

export default App;
