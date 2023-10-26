import React from 'react'
import logo1 from "../logo/logo5.jpg";
import { Fragment } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Titlemsg from './titlemsg';
const Root = () => {
    const root = "/login";
  return (
    <Fragment>
        <RootContainer>
        <div className="root-component">
          <img src={logo1} alt="www.freeChat-app.com"/>
          <Titlemsg/>
         <span>The FreeChat app<br/>welcomes them warmly</span>
          <Link className='root-btn'style={{ textDecoration: 'none' }} to={root}>Start-<span>Message</span></Link>
        </div>
        </RootContainer>

    </Fragment>
  )
}
const RootContainer = styled.div`
height:100vh;
width:100vw;
display:flex;
flex-direction:column;
flex-warp:warp;
justify-content:center;
gap:5rem;
align-items:center;
background-color:#081021;
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
    background-color:greey;
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
.root-component{
display:flex;
flex-direction:column;
flex-warp:warp;
justify-content:center;
gap:5rem;
align-items:center;
}
span{
  color:white;
  text-align:center;
}
`;

export default Root