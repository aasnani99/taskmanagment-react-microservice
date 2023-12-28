import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dataInput, setDataInput]=useState(""); 
	const submitThis=(event)=>{
        event.preventDefault();
	    const info = { email:email, password:password }; 
	    setDataInput([info]);
    }
    
    return ( 
        <div className="login-container">
        <div className="login">
            <h1> Welcome to Login Page </h1>
            <form action="" onSubmit={submitThis}> 
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" value={ email }  onChange={(e) => setEmail(e.target.value)}/> <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={ password }  onChange={(e) => setPassword(e.target.value)}/><br />
                <a href="/forgotpassword"> Forgot password</a><br />
                <br />
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label><br />
                <br />
                <Link to="/todo"><button type="submit">Login </button><br /></Link>
                <br />
            </form>
            <div className="social-login">
                <button class="facebook-login">Login with facebook</button>
                <button class="google-login">Login with google</button>
            </div>
            <p>Not a member? <a href="/signup">Sign up</a></p>
        </div>
        </div>
     );
}
 
export default Login;