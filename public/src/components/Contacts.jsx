import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../logo/logo5.jpg";
import Logout from "./Logout";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect( () => {
     const data =  JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>FreeChat</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h4>{contact.username}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h2>{currentUserName}</h2>
              <Logout/>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 73% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    img{
      height:2rem;
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
    h3 {
      color: white;
      font-size:24px;
      height:10px;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    gap: 0.3rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color:green;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      margin-top:1rem;
      background-color: #ffffff34;
      min-height: 1rem;
      cursor: pointer;
      width:100%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 2rem;
        }
      }
      .username {
        h4 {
          color: white;
        }
      }
    }
    .selected {
      background-color: green;
    }
  }

  .current-user {
    background-color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
   
    .avatar {
      img {
        height: 2rem;
        max-inline-size: 100%;
      }
    }
    .username {
      display:flex;
      flex-direction:row;
      gap:2rem;
      h2 {
        color: red;
        margin-top:5px;
      }
    }
}
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
          color:red;
        }
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 900px) {
    display: grid;
    grid-template-rows: 10% 73% 15%;
    overflow: hidden;
    background-color:rgb(101, 101, 101);
    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
      img{
        height:2rem;
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
      h3 {
        color: white;
        font-size:24px;
        height:10px;
      }
    }
    .contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      gap: 0.3rem;
      &::-webkit-scrollbar {
        width: 0.2rem;
        &-thumb {
          background-color:green;
          width: 0.1rem;
          border-radius: 1rem;
        }
      }
      .contact {
        margin-top:1rem;
        background-color:rgb(96, 99, 99);
        min-height: 1rem;
        cursor: pointer;
        width:100%;
        border-radius: 0.2rem;
        padding: 0.4rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        transition: 0.5s ease-in-out;
        .avatar {
          img {
            height: 2rem;
          }
        }
        .username {
          h4 {
            color: white;
          }
        }
      }
      .selected {
        background-color: green;
      }
    }
  
    .current-user {
      background-color:white;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
     
      .avatar {
        img {
          height: 2rem;
          max-inline-size: 100%;
        }
      }
      .username {
        display:flex;
        flex-direction:row;
        gap:2rem;
        h2 {
          color: red;
          margin-top:5px;
        }
      }
  }
`;