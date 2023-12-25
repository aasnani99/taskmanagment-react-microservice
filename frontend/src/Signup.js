const Singnup = () => {
    return ( 
        <div className="signup">
            <h1>Signup page</h1>
            <form action="#">
                <label htmlFor="firstname">First Name: </label>
                <input type="text" id="firstname" /><br />
                <br />
                <label htmlFor="lastname">Last Name: </label>
                <input type="text" id="lastname" /><br />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" /><br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" /><br />
                <br />
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <input type="text" id="confirmpassword" /><br />
                <br /> 
                <button type="submit">Sign up</button>
            </form>

            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
  );
}
 
export default Singnup;