const router = require("express").Router();
import passport from "passport";

router.get("/googel", passport.authenticate("google", {scope:["profile"]}));


router.get("/login/failed", (req,res){
    res.status(401).json({
        success : false,
        message: "failure",
    });
});

router.get("/login/success", (req,res){
    if (req.user) {res.status(200).json({
        success : true,
        message: "successfull",
        user:req.user,
        cookies :req.cookies
    });}
    
});



router.get("google/callback", passport.authenticate("google",{
successRedirect:"http://localhost:3000/",
failureRedirect: "/login/failed"

}));