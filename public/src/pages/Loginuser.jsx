import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
// import Logo from "../logo/logo5.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";


export default function Login(){
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/chat");
    }
  }, [navigate]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/chat");
      }
    }
  };

  return (
    <>
      <FormContainer>
        {/* <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Freechat</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form> */}
        <div className="login">
  <header className="header">
    <span className="text">LO<span className="Color">G</span>IN</span>
    <span className="loader"></span>
  </header>
  <form className="form" action="" onSubmit={(event) => handleSubmit(event)}>   
    <input onChange={(e) => handleChange(e)}
            min="3" className="input" type="text" name="username" placeholder="Username"/>
    <input name="password"  onChange={(e) => handleChange(e)} className="input" type="password" placeholder="Password"/>
    <button className="btn" type="submit"><span className="Submit">Submit</span></button>
    <br />
    <span>
            Don't have an account ? <Link to="/register" className="Link">Create One.</Link>
    </span>
  </form>
</div>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
 @import url(https://fonts.googleapis.com/css?family=Lobster);

* {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  user-select:none;
}
.Link{
  font-style:none;
  text-decoration:none;
}
.Color{
  color:red;
}
button.Submit{
  color:white;
  margin-top:1rem;

}
button span{
  margin-top:1rem;
  margin-left:5.5rem;
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10rem 0 0 -10rem;
  width: 20rem;
  height: 20rem;
  padding: 3em;
  background:white;
 
  border-radius: 50%;
  overflow: hidden;
  transition:all 1s ease;
}
.login:hover > .header, .login.clicked > .header {
  width: 2rem;
}
.login:hover > .header > .text, .login.clicked > .header > .text {
  font-size: 1rem;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.login.loading > .header {
  width: 20rem;
  transition:all 1s ease;
}
.login.loading > .header > .text {
  display: none;
}
.login.loading > .header > .loader {
  display: block;
}
.header {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 20rem;
  height: 20rem;
  background: blue;
  border:none;
  transition: width 0.5s ease-in-out;
}
.header > .text {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 5rem;
  font-family:cursive;
  text-align: center;
  line-height: 20rem;
  color: hsla(255,255%,255%,1);
  transition: all 0.5s ease-in-out;
}
.header > .loader {
  display: none;
  position: absolute;
  left: 5rem;
  top: 5rem;
  width: 10rem;
  height: 10rem;
  border-left: 10px solid hsla(255, 255%, 255%, 1);
  border-bottom:10px solid hsla(255,255%,255%,1);
  border-right:10px solid hsla(255,255%,255%,1);
  border-top: 8px solid hsla(255,255%,255%,1);
  border-radius: 50%;
  box-shadow:inset 2px 2px 2px 2px hsla(0, 5%, 0%, 1);
  animation: loading 2s linear infinite;
}
.header > .loader:after {
  content: "";
  position: absolute;
  left: 4.15rem;
  top: -0.5rem;
  width: 1rem;
  height: 1rem;
  background: hsla(1, 75%, 55%, 1);
  border-radius: 50%;
  border-right: 1px solid hsla(1, 75%, 55%, 1);
  
}
.header > .loader:before {
  content: "";
  position: absolute;
  left: 3.4rem;
  top: -0.5rem;
  width: 0;
  height: 0;
  border-right: 1rem solid hsla(1, 75%, 55%, 1);
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  background-color:red;
}

@keyframes loading {
  50% {
  border-left: 10px solid hsla(1, 95%, 25%, 1);
  border-bottom:10px solid hsla(1, 95%, 25%, 1);
  border-right:10px solid hsla(1, 95%, 25%, 1);
  border-top:8px solid hsla(1, 95%, 25%, 1);  
  }

  100% {
    transform: rotate(360deg);
  }
}
.form {
  margin: 0 0 0 2rem;
  padding: 0.5rem;
}

.input {
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  box-shadow: none;
  border-color: hsla(0, 5%, 0%, 1);
  border-width: 0 0 3px 0;
  transition: all .5s ease-in;
  outline:transparent;
}
.input + .input {
  margin: 10px 0 0;
}
.input:focus {
  border-bottom: 3px solid hsla(1, 75%, 55%, 1);
}

.btn {
  position: absolute;
  right: 0.8rem;
  top:15rem;
  bottom: 3rem;
  width: 25rem;
  height: 5rem;
  border: none;
  background:red;
  border: none;
  transition: all 0.3s ease-in-out;
  color:white;
  border-top-left-radius:110%;
}
.btn:after {
  position: absolute;
  left: 1.4rem;
  top: 1rem;
  width: 0;
  height: 0;
}
.btn:hover, .btn:focus, .btn:active {
  outline: none;
  
}
.btn:hover:after, .btn:focus:after, .btn:active:after {
  border-left-color: hsla(0, 5%, 0%, 1);
}
.resetbtn{
  margin:1%;
  border:none;
  padding:.5em;
  width:5em;
  background:hsla(0,0%,0%,1);
  color:hsla(255,255%,255%,1);
  font-size:1.5em;
  border-radius:2px;
  transition:all 1s ease-in-out;
  outline:none;
  box-shadow:0 0 1px 1px hsla(0,0%,0%,0.2);
}
.resetbtn:hover, .resetbtn:focus{
  background:hsla(255,255%,255%,1);
  color:hsla(0,0%,0%,1);
  outline:5px solid hsla(0,0%,0%,1);
}
`;
