import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 8080;

let ingr = [];

const apiUrl = "https://api.edamam.com/api/nutrition-details";
const params = {
  app_id: 'f15df3f1',
  app_key: 'dfd3f80927e04659fbf1cc50e4c962e2'
};
const data = {
  title: 'some recipe',
  ingr
};


const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


function zeroingArrey (){let end =ingr.length ;
  ingr.splice(0,end);
}








// get main page
app.get("/", (req, res) => {



  res.render("index.ejs", { content: "Awaiting for data" });
});







// add new ingredients
app.post("/add", async (req, res) => {

  const bodyIngr = req.body.ingr1;
  ingr.push(bodyIngr);
console.log(apiUrl, data, { headers, params });

  res.redirect("/");
});







// send to api for responce

app.post("/sent", async (req, res) => {
 try{ 
  const title = req.body.title;

 zeroingArrey();
  


  const responce = await axios.post(apiUrl, data, { headers, params });

  const wantedContent = responce.data.totalDaily;

  console.log(title, ingr1, wantedContent);
  const energy = wantedContent.ENERC_KCAL.quantity;
  const fat = wantedContent.FAT.quantity;
  const carbs = wantedContent.CHOCDF.quantity;
  const saturatedFat =  wantedContent.FASAT.quantity;
  const protein = wantedContent.PROCNT.quantity;
  const fiber = wantedContent.FIBTG.quantity;

  // console.log("the energy levels are:",energy);
  // console.log("the fat levels are:",fat);
  // console.log("the carb levels are:",carbs);
  // console.log("the saturatedFat levels are:",saturatedFat);
  // console.log("the protein levels are:",protein);
  // console.log("the fiber levels are:",fiber);

  res.render("index.ejs", { content: energy });
  }catch (error) {
    console.log(error)
  res.redirect("/");
}});








app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
