import { Link } from "react-router-dom";
import  avatar  from "../images/avatar.jpeg";
function Navbar ({user}){
    return (

        <div className="navbar">
<span className="logo" ><Link className="link" to="/" >Nutrilog</Link></span>

{
user ?  (

<ul className="list">
<li className="listItem"><img src={avatar} alt="" className="avatar" />
</li>
<li className="listItem">A NAME</li>
<li className="listItem">Logout</li>
</ul>)  : (<Link className="link" to="/login">Login</Link>)

}
        </div>
    );
}

export default Navbar ;
