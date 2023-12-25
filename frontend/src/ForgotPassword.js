import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgotPassword = () => {
    const notify = () => toast("Password reset link has been successfully sent to your email address..");
    var a = "Anjali";
    return ( 
        <div className="forgot">
            <h1> Forgot Password Page </h1>
            <form action="#">
                <label htmlFor="emial">Enter your email</label>
                <input type="email" id="emailid" /><br />
                <br />
            </form>

            {/* <script>
                var input = document.getElementById("emailid").value;
            </script>

            <p> { input } </p> */}
            
            <button onClick={notify}> Confirm </button>
            <ToastContainer></ToastContainer>
            <p>Or try login again! <a href="/login">Login</a></p>
        </div>
        
     );
}
 
export default ForgotPassword;