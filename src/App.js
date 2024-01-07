import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Main from "./Main.js";
import DrinkIngredients from './Components/DrinkIngredients.js';

export default function App() {
  return (
    
      <Router>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/:idDrink" element={<DrinkIngredients/>}/>

        </Routes>
      </Router>

  
  );
}
