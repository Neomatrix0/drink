import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';

export default function DrinkIngredients(){
    const {idDrink} = useParams()
    const [drinkData,setDrinkdata] = useState({})
    const [ingredients,setIngredients] = useState([])

useEffect(()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data.drinks[0]);
        if (data.drinks && data.drinks.length > 0) {
            setDrinkdata(data.drinks[0]);
          
        } else {
            // Handle the case when no drinks are found
            console.log("No drinks found");
            setDrinkdata({});
            setIngredients([]);
        }
    })

},[idDrink]);


function getIngredients(drink){
    console.log(drink);
    const ingredients = [];
    for(let i=1; i<= 15;i++){
        if(drink[`strIngredient${i}`]){
            ingredients.push( `${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`]}`);
        }else{
            break;
        }}
        
        return ingredients;
    }

   console.log(getIngredients(drinkData));



  return (
     <div className="container">
    
     <div className="single-drink">
        <img src={drinkData.strDrinkThumb} alt={drinkData.strDrink}/>
        <h1>{drinkData.strDrink}</h1>
        <p>{drinkData.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>
            {getIngredients(drinkData).map((ingredient)=>(
                <li key={ingredient}>{ingredient}</li>

            ))}
        </ul>
     </div>
     </div>
  )
}
