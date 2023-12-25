const Login = () => {
    return ( 
        <div className="login-container">
        <div className="login">
            <h1> Welcome to Login Page </h1>
            <form action="#">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username"/> <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="text" id="password"/><br />
                <a href="/forgotpassword"> Forgot password</a><br />
                <br />
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me pleaseeee</label><br />
                <br />
                <button type="submit">Login</button><br />
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