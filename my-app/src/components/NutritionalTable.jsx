import React, { Fragment } from 'react';



function NutritionTable(props) {

    return (
        <Fragment>
            {/* add example barr */}
            {props.loading ? null :
            props.apiRes ? null :
            <div className='exampleFood'> <h3>For example</h3>
                    <li>1 cup orange juice</li>
                    <li>2 tablespoons olive oil</li>
                    <li>2 carrots</li>
                </div> } 

            <table className="table" >
                <tbody >
                    <tr >

                        <th > {props.apiRes ? "Nutrient" : null}</th>
                        <th>{props.apiRes ? "Label" : null} </th>
                        <th>{props.apiRes ? "Quantity" : null} </th>
                        <th>{props.apiRes ? "Unit" : null} </th>
                    </tr>
                    {Object.keys(props.apiRes).map((nutrientKey) => {
                        const nutrient = props.apiRes[nutrientKey];
                        return (
                            <tr key={nutrientKey}>
                                <td className="tableSpacing">{nutrientKey}</td>
                                <td className="tableSpacing">{nutrient.label}</td>
                                <td className="tableSpacing leftPadding">{Math.round(nutrient.quantity * 100) / 100}</td>
                                <td className="tableSpacing">{nutrient.unit}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Fragment>

    );
}

export default NutritionTable;
