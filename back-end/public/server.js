import express from "express";
import bodyParser from "body-parser";
import router from "./routes/router.js";
import cors from "cors";
import cookieSession from "cookie-session"; // Importing cookie-session
import passport from "passport"; // Assuming you're using passport, you need to import it as well
// import "./passport.js"


const app = express();
app.use(cookieSession({
    name:"session",
    keys:["myPrivateKey"],
    maxAge:24*60*60*100
}));

app.use(passport.initialize());
app.use(passport.session());

// cors help with the security stop 
app.use(cors(
    {
        origin:"http://localhost:3000",
        methods:"GET,POST,PUT,DELETE",
        credentials: true,
    }
));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/', router)

const port = 8080;



const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
