import { useState } from "react";

const Singnup = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dataInput, setDataInput]=useState(""); 
	const submitThis=(event)=>{
        event.preventDefault();
	    const info = { firstname:firstname, lastname:lastname, email:email, password:password }; 
	    setDataInput([info]);
        console.log(dataInput);
    }

    return ( 
        <div className="signup">
            <h1>Signup page</h1>
            <form action="" onSubmit={submitThis}>
                <label htmlFor="firstname">First Name: </label>
                <input type="text" id="firstname" value={ firstname }  onChange={(e) => setFirstname(e.target.value)}/><br />
                <br />
                <label htmlFor="lastname">Last Name: </label>
                <input type="text" id="lastname" value={ lastname }  onChange={(e) => setLastname(e.target.value)}/><br />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" value={ email }  onChange={(e) => setEmail(e.target.value)}/><br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" value={ password }  onChange={(e) => setPassword(e.target.value)}/><br />
                <br />
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <input type="password" id="confirmpassword" /><br />
                <br /> 
                <button type="submit">Sign up</button>
            </form>

            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
  );
}
 
export default Singnup;