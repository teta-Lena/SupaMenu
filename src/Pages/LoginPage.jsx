import React, { useState } from "react";
import { useDispatch } from "react-redux";
import userservices from "../services/userservices";

const LoginPage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeEmail = (e)=>{
    setEmail(e.target.value);
  }
  const onChangePassword = (e) =>{
    setPassword(e.target.value);
  }
  
  const handleLogin = (e) =>{
    e.preventDefault();

  //   try{
  //    const login = userservices.login({email,password});
  //    if(login.data.token){
  //   localStorage.setItem("user",JSON.stringify(login.data));
  //   return "Logged in successfully"; 
  // }
  //   }catch(e){
  //    const message= e.message;
  //     message.toString();
  //     return message;
  //   }
  

  }
  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="title-container">
          <p>
            Supa<span className="sp-login">Menu</span>
          </p>
        </div>
        <div className="input-container">
          <h5>Welcome</h5>
          <p className="login-title">Login to SupaMenu</p>
          <h6>Enter the email and password below</h6>
          <form className="form-data" onSubmit={handleLogin}>
            <div className="field">
              <div>EMAIL</div>
              <input type="text " onChange={onChangeEmail} placeholder="Enter your email" />
            </div>
            <div className="field">
              <label>PASSWORD </label>
              <input
                className="form-field"
                type="text"
                placeholder="Enter your password"
                onChange={onChangePassword}
              />
            </div>
            <div className="field">
              <input type="submit" value="Log in" className="loginsubmit" />
            </div>
          </form>
          <p className="form-options">
            Dont' have an account? <span>Sign up</span>
          </p>
          <p className="form-options">
            Forgot your password/login <span>RESET</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
