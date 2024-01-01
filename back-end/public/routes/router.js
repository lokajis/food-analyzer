import express from "express";
import axios from "axios";
import 'dotenv/config'
// import { Clerk, ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';


const router = express.Router()


// const clerk = new Clerk(process.env.CLERK_BACKEND_API_KEY);


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


// router.post('/getIngredients', ClerkExpressRequireAuth(), async (req, res) => {
//     const userId = req.auth.userId;
//     console.log("Authenticated User ID:", userId);

//     try {
//         const recipe = req.body.post;
//         console.log("these are the ingredients :", recipe);
//         data = {
//             title: 'some recipe',
//             ingr: recipe
//         };
//         const response = await axios.post(apiUrl, data, { headers: getPostRequestHeaders(), params });
//         const wantedContent = response.data.totalNutrients;
//         console.log("Nutrition Data:", wantedContent);
//         res.status(200).send({ message: 'Data received successfully', data: wantedContent });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });



export default router;