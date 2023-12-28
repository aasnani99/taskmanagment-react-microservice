import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {
    const notify = () => toast("Password reset link has been successfully sent to your email address..");
    const [ email, setEmail ] = useState("");

    return ( 
        <div className="forgot">
            <h1> Forgot Password Page </h1>
            <form action="#">
                <label htmlFor="emial">Enter your email: </label>
                <input type="email" id="emailid" value={ email }  onChange={(e) => setEmail(e.target.value)}/><br />
                <br />
            </form>
            
            <button onClick={notify}> Confirm </button>
            <ToastContainer></ToastContainer>
            <p>Or try login again! <a href="/login">Login</a></p>
        </div>
        
     );
}
 
export default ForgotPassword;