import Logo from "../../elements/Logo/Logo";
import "./Password.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Password() {
     const[email, setEmail]=useState("");
     const handleEmail=(event)=>{
          setEmail(event.target.value);
     }
     const handleSubmit=(event)=>{
          if(email===''){
               event.preventDefault();
               alert("Please, fill in the field!");
          }
          else{
               alert(`New credentials will be sent to ${email}`);
          }
     }
     return (
    <div className="password-container">
      <Logo />
      <h3>Forgot Password?</h3>
      <p>Enter your email address to request a new password.</p>
      <form action="/password-reset" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input type="email" value={email} onChange={handleEmail}/>
        <button type="submit">Reset password</button>
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default Password;
