import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import "../index.css";
import logo1 from "../logo/logo5.jpg";
import {ToastContainer, toast} from  "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"
import { registerRoute } from '../utils/APIRoutes';

const Register = () => {
  const navigate = useNavigate();

  const [values,setValues] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
  });
  const toastOption = {
    position:"top-center",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
  const handleSubmit =async (event)=>{
    event.preventDefault();
    if(handleValidation()){
    const {password,username,email}= values;
    const {data} = await axios.post(registerRoute,{
      username,
      password,
      email
    });
    if(data.status === false){
      toast.error(data.msg,toastOption)
    }
    if(data.status === true){
    localStorage.setItem('free-chat-app',JSON.stringify(data.user));
    navigate('/login')
    }
   }
  }
  const handleChange = (event)=>{
 setValues({...values,[event.target.name]:event.target.value});
  }
  const handleValidation=()=>{
    const {password,confirmPassword,username,email}= values;
    if(email === '' || password === ""){
      toast.error('Please fill the details first',toastOption);
      return false;
    }
    else if(password !== confirmPassword){
      toast.error("Password and confirmPassword should be same",toastOption);
      return false;
    }else if(username.length<3){
      toast.error("Username should be greater than 3 characters",toastOption);
      return false;
    }else if(username.length>8){
      toast.error("Username should be less than 8 characters",toastOption);
      return false;
    }
    else if(password.length < 8){
      toast.error('Password should be greater than 8 characters',toastOption);
      return false;
    }else if(email ===""){
   toast.error("Email is required",toastOption);
   return false;
    }
    return true;
 
  }
  return (
    <Fragment>
      <FormContainer>
      <form onSubmit={(event)=>handleSubmit(event)}> 
      <div className="logo">
        <img src={logo1} alt="www.logo.com" />
        <h1>Freechat</h1>
      </div>
      <input
      type='text'
      name='username'
      placeholder='Enter your name'
      onChange={(e)=>handleChange(e)}
      />
       <input
      type='email'
      name='email'
      placeholder='Enter your E-mail'
      onChange={(e)=>handleChange(e)}     
       />
       <input
      type='password'
      name='password'
      placeholder='Enter your password'
      onChange={(e)=>handleChange(e)}
      />
       <input
      type='password'
      name='confirmPassword'
      placeholder='Confirm password'
      onChange={(e)=>handleChange(e)}
      />
     <button className="custom-btn btn-12" type='submit'><span>Click!</span><span>Continue</span></button>
       <span>Already have an account ? <Link to="/login">Login</Link></span>
      </form>
      </FormContainer>
      <ToastContainer/>
    </Fragment>
  );
}
const FormContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
gap:1rem;
align-items:center;
background-color:#131324;
.logo{
  display:flex;
  align-items:center;
  gap:1rem;
  justify-content:center;
}
img{
  height:3rem;
  border-radius 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: morphing 10s infinite ;
  background-color:white;
  border-radius:80%;
}
@keyframes morphing {
  0% {
    border-radius:20% 50% 40% 30% / 30% 30% 50% 50%;
    box-shadow:15px 15px 50px rgba(0,0,0,0.2);
    background-color:white;
  }
  25% { 
    border-radius:58% 42% 75% 25% / 76% 46% 54% 24%;
    background-color:grey;
  }
  50% {
    border-radius:50% 50% 33% 67% / 55% 27% 73% 45%;
    box-shadow:-10px -5px 50px rgba(0,0,0,0.2);
    background-color: #01be9570;
  }
  75% {
    border-radius:33% 67% 58% 42% / 63% 68% 32% 37%;
    background-color:pink;	
  }
}
h1{
  color:white;
  font-size:1.5rem;
  margin-top:14px;
}
form{
  display:flex;
  flex-direction:column;
  background-color:#00000076;
  gap:1rem;
  border-radius:2rem;
  padding:2rem  5rem;
  span{
    color:white;
  }
  input{
    background-color:transparent;
    padding:1rem;
    border:0.2rem sloid #4e0eff;
    border-radius:0.4rem;
    color:white;
    width:100%;
    font-size:1rem;
    &:focus{
      border:0.1rem solid #997af0;
      outline:none;
    }
  }
button {
  margin: 0px;
}
.custom-btn {
  width:100%;
  display:flex;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
}
.btn-12{
  position: relative;
  right: 20px;
  bottom: 20px;
  border:none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-12 span {
  background: blue;
background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  display: block;
  position: absolute;
  width: 190px;
  height: 40px;
  border-radius: 5px;
  margin:0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.btn-12 span:nth-child(1) {
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
   color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

`;

export default Register