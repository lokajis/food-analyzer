import express from "express";
import axios from "axios";
import 'dotenv/config'

const router = express.Router()



function getPostRequestHeaders() {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
}


const api_key = process.env.FOOD_API_KEY;
const api_id = process.env.FOOD_API_ID;
const apiUrl = "https://api.edamam.com/api/nutrition-details";

const params = {
    app_id: api_id,
    app_key: api_key
};


let data = {
    title: 'some recipe',
    ingr: ""
};




router.post('/getIngredients', async (req, res) => {

    try {
        const recipe = req.body.post;
        console.log("these are the ingridients :", recipe);
        data = {
            title: 'some recipe',
            ingr: recipe
        };
        const response = await axios.post(apiUrl, data, { headers: getPostRequestHeaders(), params });
        const wantedContent = response.data.totalNutrients;
        console.log(wantedContent);


        console.log("this is the:", wantedContent);
        res.status(200).send({ message: 'Data received successfully', data: wantedContent });


    } catch (error) {
        res.status(500).send('Internal Server Error');
    }

});



export default router;