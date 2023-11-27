import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import 'dotenv/config'

const app = express();
const port = 8080;

const api_key = process.env.FOOD_API_KEY
const api_id = process.env.FOOD_API_ID
const apiUrl = "https://api.edamam.com/api/nutrition-details";
const params = {
  app_id: api_id,
  app_key: api_key
};

let data = {
  title: 'some recipe',
  ingr: ""
};




app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function getPostRequestHeaders() {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
}





// get main page
app.get("/", (req, res) => {



  res.render("index.ejs", { content: "Awaiting for data" });
});




// send to api for responce

app.post("/sent", async (req, res) => {
  try {

    const listArray = req.body.net;
    console.log("Received listArray:", listArray);

    data = {
      title: 'some recipe',
      ingr: listArray
    };
    // console.log(data);
    const responce = await axios.post(apiUrl, data, { headers: getPostRequestHeaders(), params });
    // console.log(responce);
    const wantedContent = responce.data.totalNutrients;
    // console.log("your looking for thisssss :", wantedContent);

    const nutritionInfo = {

      energy: wantedContent.ENERC_KCAL.quantity,
      fat: wantedContent.FAT.quantity,
      carbs: wantedContent.CHOCDF.quantity,
      saturatedFat: wantedContent.FASAT.quantity,
      protein: wantedContent.PROCNT.quantity,
      fiber: wantedContent.FIBTG.quantity
    }
    console.log("the nutrition info is :", nutritionInfo);

    res.status(200).json({
      content: JSON.stringify(nutritionInfo)
    });
  } catch (error) {
    console.log("the error is :", error);
    res.status(500).json({ content: "low quality inserted data" });
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
