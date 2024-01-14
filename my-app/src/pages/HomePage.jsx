import React, { useState } from "react";
import INput from "../components/Input";
import RecipeIngredients from "../components/RecipeIngredients";
import axios from "axios";
import NutritionTable from "../components/NutritionalTable";
import ButtonSizes from "../components/ReactComponents";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function HomePage() {
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
    updateIngridients([]);

  }

  console.log(apiRes);

  return (

    <div className="homePage">
      <h1 className="homePageTitle" >Food Nutrition Calculator </h1>
      <h2 className="homePageH2Title">recipe</h2>

<div className="centering">
      <div className="ingredients ">
        {arrayOfIngredience.map((ingridient, index) => {
          return (<RecipeIngredients  delete={handleDelete} key={index} id={index} innerText={ingridient} />
          );
        })}
      </div>
 </div>

      <div className="centering">
        <div className="imputPlusButtons">
          <div>
            <INput handleClickInApp={addToArray} />
          </div>

          <div className="getRecipieButtonDiv" >
            <button className="getRecipieButton" onClick={makeRecipeReq} >Get recipe nutritions</button>

          </div>
        </div>
      </div>
<div className="nutriTable">
      <NutritionTable apiRes={apiRes} />
      </div>
    </div>




  );
}


export default HomePage;