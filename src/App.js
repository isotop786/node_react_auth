import * as React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Register from "./components/Register";
import Login from './components/Login'
import Post from "./components/Post";
import Home from "./components/Home";
import Nav from './components/Nav';


function App() {

  const [auth,setAuth] = useState(false)


  return (
    <>
      <Nav auth={auth} setAuth={setAuth}/>
    <div className="container mt-4">
    
      <h1>Welcome to POC_v1</h1>
      {/* {!auth && (
         <nav>
         <Link to="login">Login</Link>
         <br />
         <Link to="register">Register</Link>
       </nav>
      )} */}
   

      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login auth={auth} setAuth={setAuth} />} />
        <Route path="/" element={<Home />} ></Route>
        <Route path="post" element={<Post auth={auth} />} ></Route>
      </Routes>
    </div>
    </>
  )
 
}

export default App;
