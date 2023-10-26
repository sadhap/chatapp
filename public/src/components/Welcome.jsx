import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../logo/logo5.jpg"
// import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect( () => {
    async  function wcome(){
      setUserName(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        ).username
      );
    }
   wcome();
  }, []);
  return (
    <Container>
      <img src={logo} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  @media screen and (min-width: 320px) and (max-width: 900px) {
   display:none;
  }
  img{
    height:10rem;
    width:10rem;
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
  span {
    color: #4e0eff;
  }
`;