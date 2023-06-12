import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigation, useNavigate } from "react-router-dom";
const schema = yup.object().shape({
  fullnames: yup.string().required().min(2),
  // lastname: yup.string().required().min(2),
  // phone:yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(32),

})  
const RegisterPage = () => {
  const {register, handleSubmit,formState :{errors},reset} = useForm({resolver:yupResolver(schema)});
  const navigate = useNavigate();

  const [data,setData] = useState({
    fullnames:"",
    // lastname:"",
    email:"",
    // phone:"",
    password:""
  })
  
  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const onSubmitHandler = async(data,e)=>{
    e.preventDefault();
    console.log({data});

    try{

      const res = await axios.post("/u/addUser",data);
      
      console.log(res.data);
      toast.success("User added successfully");
      localStorage.setItem("token", res.data.token);
      navigate('/dashboard');
    }catch(e){
      console.log(e);
      toast.error(e.response.data.message);
      console.log(e.response.data.message);
    }
    reset();
  }

  // const saveData = async(e) =>{
    // e.preventDefault();
 
    // try{

    //   const res = await axios.post("/u/addUser",data);
      
    //   console.log(res.data);
    // }catch(e){
    //   console.log(e.message);
    // }

  // }

  return (
    <div className="auth-container">
      <div className="form-container">
        <div className="title-container">
          <p>
            Supa<span className="sp-login">Menu</span>
          </p>
        </div>
        <div className="input-container-register">
          <h5>Signup</h5>
          <form className="form-data" onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="field">
              <div>Full names</div>
              <input type="text " placeholder="Enter your name" {...register("fullnames")} name="fullnames" value={data.fullnames} onChange={handleChange}/>
              <p className="text-red-800">{errors.fullnames?.message}</p>
            </div>
            {/* <div className="field"> */}
              {/* <div>Last name</div>
              <input type="text " placeholder="Enter your email" {...register("lastname")}/>
              <p className="text-red-800">{errors.lastname?.message}</p>
            </div> */}
            {/* <div className="field">
              <div>Phone number</div>
              <input type="text " placeholder="Enter your phone" {...register("phone")} name="phone"/>
              <p className="text-red-800">{errors.lastname?.phone}</p>
            </div> */}
            <div className="field">
              <label>EMAIL</label>
              <input type="text " placeholder="Enter your email" {...register("email")} name="email" value={data.email} onChange={handleChange}/>
              <p className="text-red-800">{errors.email?.message}</p>
            </div>
            <div className="field">
              <label>PASSWORD </label>
              <input
                className="form-field"
                name="password"
                type="text"
                placeholder="Enter your password"
                {...register("password")}
                value={data.password}
                onChange={handleChange}
              />
              <p className="text-red-800">{errors.password?.message}</p>
            </div>
            <div className="field">
              <input type="submit" value="Log in" className="loginsubmit" />
            </div>
          </form>
          <p className="form-options">
            Already have an account? <span> Login</span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
