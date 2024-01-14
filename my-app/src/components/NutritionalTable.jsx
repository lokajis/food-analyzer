import React from 'react';



function NutritionTable(props) {

    return (
        <table className="border-separate border-spacing-2  border-slate-500" >
            <tbody >
                <tr>

                    <th > {props.apiRes ? "Nutrient" : null}</th>
                    <th>{props.apiRes ? "Label" : null} </th>
                    <th>{props.apiRes ? "Quantity" : null} </th>
                    <th>{props.apiRes ? "Unit" : null} </th>
                </tr>
                {Object.keys(props.apiRes).map((nutrientKey) => {
                    const nutrient = props.apiRes[nutrientKey];
                    return (
                        <tr key={nutrientKey}>
                            <td>{nutrientKey}</td>
                            <td>{nutrient.label}</td>
                            <td>{nutrient.quantity}</td>
                            <td>{nutrient.unit}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default NutritionTable;
