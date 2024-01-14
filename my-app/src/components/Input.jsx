import React, { useState } from "react";
import ButtonSizes from "./ReactComponents";
import { TextFieldHiddenLabel } from "./ReactComponents";

function INput(props) {
    const [input, updateInput] = useState("");

    function handleChange(event) {
        const { name, value } = event.target;
        updateInput(value);
    }


    function handleClick() {

        props.handleClickInApp(input);
        updateInput("");
    }

    return (
        <div class="flex justify-around ">
            <div className="inputHomePage"><input className= ""  onChange={handleChange} value={input} name="recipieIngredients" type="text" />
             <button className="inputButtonHomePage" onClick={handleClick} >Add to list</button> 
            </div> 
        </div>
    );
}

export default INput;