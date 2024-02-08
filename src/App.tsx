import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Car from './pages/car/Car';
import Road from './pages/road/Road';
import Movie from './pages/movie/Movie';
import Error from './pages/error/Error';
import Laboratory from './pages/laboratory/Laboratory';

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
