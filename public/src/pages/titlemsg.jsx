import React from 'react'
import styled from "styled-components";

const Titlemsg = () => {
  return (
    <RootContainer>
      <div className="body">
      <div id='hey'>Hey!</div> 
       <div id='next'> 
       <span>How you doing?</span>
     </div>
      </div>
    </RootContainer>
   
  )
}
const RootContainer = styled.div`

@import url('https://fonts.googleapis.com/css?family=Montserrat:300');

.body {
  text-align:center;
  background:none;
  color:#555;
  font-family:'Montserrat';
  font-weight:0;
  overflow:hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0,0,0);
}

div {
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
}

div:first-of-type {     
  animation: showup 7s infinite;
  font-size:25px;
}

div:last-of-type {
  width:0px;
  animation: reveal 7s infinite;
  font-size:28px;
}

div:last-of-type span {
  margin-left:-200px;
  animation: slidein 7s infinite;
  color:white;
}

@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-255px; }
    20% { margin-left:-255px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:255px;}
    80% {opacity:1;}
    100% {opacity:0;width:255px;}
}
`;
export default Titlemsg