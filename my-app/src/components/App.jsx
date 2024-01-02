import React, { useState } from "react";
import INput from "./Input";
import RecipeIngredients from "./RecipeIngredients";
import axios from "axios";
import NutritionTable from "./NutritionalTable";
import ButtonSizes from "./ReactComponents";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Login from "../pages/LoginPage";

function App() {
  const [arrayOfIngredience, updateIngridients] = useState([]);
  const [apiRes, updateApiRes] = useState("");


  function addToArray(input) {
    updateIngridients(oldArray => {
      return (
        [...oldArray, input]
      );
    })
  }

  function handleDelete(event) {
    const id = parseInt(event.target.id);

    updateIngridients(OldArray => {
      return OldArray.filter((ingredient, index) => {
        return index !== id;
      });
    });

  }
  function makeRecipeReq() {
    const post = arrayOfIngredience;

    axios.post('http://localhost:8080/getIngredients', { post: post })
      .then(response => updateApiRes(response.data.data))
      .catch(err => console.log(err))
    // updateIngridients([]);

  }

  console.log(apiRes);

  return (
    <div className="flex justify-center pt-20" >
      <div >

      <Login />

      {/* <h1 className="text-3xl text-center" >Food Nutrition Calculator </h1>
      <h2 className="text-center">recipe</h2>
<div className="flex justify-center  ">
      <div className="flex-col  ">
      {arrayOfIngredience.map((ingridient, index) => {
        return (<RecipeIngredients delete={handleDelete} key={index} id={index} innerText={ingridient} />
        );
      })}
</div></div>


<div className="flex justify-center " ><INput  handleClickInApp={addToArray} /></div>
      

     <div className="flex justify-center pt-5" ><ButtonSizes  onClick={makeRecipeReq} text="Get recipe nutritions" /></div>  

      <NutritionTable apiRes={apiRes} /> */}
    </div>
    </div>
  );
}

export default App;
