import express from "express";
import bodyParser from "body-parser";
import router from "./routes/router.js";
import cors from "cors";

const app = express();
// cors help with the security stop 
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/', router)

const port = 8080;



const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
