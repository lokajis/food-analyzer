import React, { useState } from "react";
import ButtonSizes from "./ReactComponents";
import { TextFieldHiddenLabel } from "./ReactComponents";

function Input(props) {
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
            {/* <TextFieldHiddenLabel  onChange={handleChange} value={input} name="recipieIngredients" type="text" /> */}
            <input className=" h-1 mt-3.5    rounded-[7px] border border-blue-gray-200 bg-transparent  py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" onChange={handleChange} value={input} name="recipieIngredients" type="text" />
            {/* <button onClick={handleClick} >Add to list</button>  */}
            <ButtonSizes onClick={handleClick} text="Add to list" />


        </div>
    );
}

export default Input;