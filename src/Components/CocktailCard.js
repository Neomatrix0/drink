import React from 'react'
import { Link } from 'react-router-dom';

function CocktailCard({drink}) {
  return (
    <>
    <Link to={`/${drink.idDrink}`}>
    <div className="meal">
      <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
      <div className="meal-info">
      <h2>{drink.strDrink}</h2>
      </div>
    </div>
    </Link>
    </>
  )
}

export default CocktailCard;
