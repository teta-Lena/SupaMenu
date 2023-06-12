import React, { useState } from "react";
import {useForm} from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";


const validSchema = yup.object().shape({
  email:yup.string().required().email(),
  password:yup.string().required()
})
const LoginPage = () => {
 
  const [credentials,setCredentials] = useState({email:"",password:""});
  const navigate = useNavigate();
  const {register,handleSubmit , formState:{errors},reset} = useForm({resolver:yupResolver(validSchema)});
  

  // const handleChange = (e) =>{
  //   setCredentials({...credentials,[e.target.name]:e.target.value});
  // }

  const onSubmitHandler = async(credentials,e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("/u/login",credentials);
      console.log(res);

      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);

      navigate('/dashboard');
    } catch (e) {
      console.log(e);
         toast.error(e.response.data.message);  
    }
    
    reset();
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
          <form className="form-data" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="field">
              <div>EMAIL</div>
              {/* not needed we can use register */}
              {/* onChange={handleChange} value={credentials.email} */}
              <input type="text " name="email"  {...register("email")} placeholder="Enter your email" />
               <p className="text-red-800">{errors.email?.message}</p>
            </div>
            <div className="field">
               {/* not needed we can use register */}
              {/* onChange={handleChange} value={credentials.email} */}
              <label>PASSWORD </label>
              <input
                className="form-field"
                type="text"
                name="password"
                {...register("password")}
                placeholder="Enter your password"
              />
               <p className="text-red-800">{errors.password?.message}</p>

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
