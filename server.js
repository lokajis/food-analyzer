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

// Serve home page to the user
app.get("/", (req, res) => {
  res.render("index.ejs", { Recipe: "Recipe", pageTitle: "Awaiting for data" });
});

// Get the recipe from the user
app.post("/submitRecipe", async (req, res) => {

  try {
    const recipe = req.body.data.recipe;
    console.log("these are the ingridients :", recipe);
    data = {
      title: 'some recipe',
      ingr: recipe
    };
    const response = await axios.post(apiUrl, data, { headers: getPostRequestHeaders(), params });
    const wantedContent = response.data.totalNutrients;
    console.log(wantedContent);


    console.log(wantedContent);
    res.json(wantedContent);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
