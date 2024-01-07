import React from 'react';
import './Main.css';
import { useState,useEffect } from 'react';
import CocktailCard from './Components/CocktailCard';

function Main() {
  const [search,setSearch] = useState("")
  const [drinking,setDrinking] = useState([])

  const getData = async ()=>{
    if(search.trim()===""){
      //dont make api call
     setDrinking([]);
     
    }
    try{
   const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    if(!response.ok){
      throw new Error("This is an error");
    }
const data= await response.json()
console.log(data)
setDrinking(data.drinks)
    }
    catch(err){
      console.log(err)
    }


  }

  useEffect(()=>{
    getData()
  },[])
 if(drinking.length===0){
   return <p>Loading...</p>
    
 }
  return (
    <div className="container">
      
      <h1>Choose your Drink </h1>
      <form onSubmit={(e)=>{e.preventDefault();getData()}}>
      <input 
      type="search" 
      placeholder="Enter your favourite drink"  
      onChange={(e)=> setSearch(e.target.value)}
      value={search}/>
      </form>


      
    

    {drinking.length> 0 &&(
    <div className="drinks">
        
{drinking.map((drink)=>
  (<CocktailCard key={drink.idDrink} drink={drink}/>))}

    </div>)}

</div>
)}

export default Main;
