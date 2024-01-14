import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import 'dotenv/config'
import session from "express-session";
import router from "./routes/nutrition.js";

import nutritionRouter from "./routes/nutrition.js";

const app = express();

// Install middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/', router);

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: true
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());



const User =  ({
    email: String,
    password: String,
    googleId: String,
    secret: String
  });
  

// passport.use(User.createStrategy());





// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/NutriLog",
    // userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  }
));


//Routing


// app.get("/", function(req, res){
//     res.redirect("http://localhost:3000/")
//   });
  
  app.get("/auth/google",
    // passport.authenticate('google', { scope: ["profile"] })
  );
  
  app.get("/auth/google/NutriLog",
    passport.authenticate('google', { failureRedirect: "/login" }),
    function(req, res) {
      // Successful authentication, redirect to NutriLog.
      res.redirect("/");
    });
  
  app.get("/login", function(req, res){
    res.render("login");
  });
  
  app.get("/register", function(req, res){
    res.render("register");
  });
  
  app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
  });
  
  app.get('/auth/google/NutriLog', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

  app.post("/login", function(req, res){
  
  });
  


const port = 8080;

const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
