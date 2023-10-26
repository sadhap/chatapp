import React from 'react';
import {Routes,BrowserRouter,Route} from 'react-router-dom';
import Register from "./pages/Registeruser";
import Login from "./pages/Loginuser";
import Chat from "./pages/Chating";
import SetAvatar from "./components/setAvatar";
import Root from './pages/root';

function App() {
  return (
  <BrowserRouter>
  <Routes>
     <Route path='/' element={<Root/>}/>
    <Route path='/chat' element={<Chat/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login'  element={<Login/>}/>
    <Route path='/setAvatar'  element={<SetAvatar/>}/>
  
  </Routes>
  </BrowserRouter>
  )
}
export default App;