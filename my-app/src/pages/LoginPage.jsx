import google from "../images/google.png"
import github from "../images/github.png"
import facebook from "../images/facebook.png"


function Login (){
return(
    <div className="login">
<h1 className="loginTitle">Choose a Login Method</h1>
<div className="wrapper">

<div className="left">
    <div className="logginButton google">
     <img src={google} alt="" className="icon" />   
     Google
    </div>
    <div className="logginButton facebook">
     <img src={facebook} alt="" className="icon" />   
     Facebook
    </div>
    <div className="logginButton github"> 
     <img src={github} alt="" className="icon" />   
     Github
    </div>
</div>
<div className="center">
    <div className="line" />
    <div className="or">OR</div>
</div>

<div className="right">
<input type="text" placeholder="Username" />
<input type="text" placeholder="Password" />
<button className="submit">Login</button>
</div>

</div>
    </div>
);
}
export default Login;