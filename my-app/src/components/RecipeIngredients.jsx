import React, { Fragment } from "react";




function RecipeIngredients(props) {


    return (
        <Fragment>

        <div   className="ingredient">
            <input className="checkBox"  type="checkbox" id={props.id} onClick={props.delete} />
            <label  > {props.innerText}</label>

        </div>
        </Fragment>
    );
}




export default RecipeIngredients;