import React from "react";




function RecipeIngredients(props) {


    return (
        <div className="shadow-sm" >
            <input type="checkbox" id={props.id} onClick={props.delete} />
            <label > {props.innerText}</label>

        </div>
    );
}




export default RecipeIngredients;