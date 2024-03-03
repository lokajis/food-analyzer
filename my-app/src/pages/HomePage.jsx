import React, { useState } from "react";
import INput from "../components/Input";
import RecipeIngredients from "../components/RecipeIngredients";
import axios from "axios";
import NutritionTable from "../components/NutritionalTable";


function HomePage() {
  const [arrayOfIngredience, updateIngridients] = useState([]);
  const [apiRes, updateApiRes] = useState("");
  //make the loading appear and disappear
const [loading,setLoading]= useState(false);
//make the recipe title appear and disappear
const [recipieTitle, setRecipieTitle] = useState(false);


  function addToArray(input) {
    updateIngridients(oldArray => {
      return (
        [...oldArray, input]
      );
    })

    //set recipie title when there is a recipie list
input ? setRecipieTitle(true) : setRecipieTitle(false);
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
  // setup  loading
setLoading(true);

    axios.post('http://localhost:8080/getIngredients', { post: post })
      .then(
        response => updateApiRes(response.data.data))
      .catch(err => console.log(err))
    updateIngridients([]);

//setup loading

setTimeout(() => {
 setLoading(false);
}, 1000);

// turn recipie title off
setRecipieTitle(false);
  }

  console.log(apiRes);

  return (

    <div className="homePage">
      <div className="h1Div">    
          <h1 className="homePageTitle" >Food Nutrition Calculator </h1>
</div>
{      recipieTitle ?  <h2 className="homePageH2Title">recipe</h2> : null }
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
      { loading ? <div className="loadinDIV"> <h1 className='loading'>Loading...</h1>  </div> : console.log("that") }

<div className="nutriTable">
      <NutritionTable apiRes={apiRes} loading={loading} />
      </div>
    </div>




  );
}


export default HomePage;