import React, { useState } from "react";
import Login from "../pages/LoginPage";
import {BrowserRouter, Routes , Route, Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "./Navbar";

function App() {
  const user = true ;


  return (
 <BrowserRouter>
 <Navbar user={user}/>
   <Routes>
   <Route path="/" element={<HomePage />} />

    <Route
     path="/login"
      element= {user ? <Navigate to="/" />: <Login/> } /> 

  {/* <Route path="/Nposts/:id"
      element= {user ? <nPosts>: <Navigate to = "/login"> } /> )(not done yet) */}

 </Routes> 
</BrowserRouter>
  );

}

export default App;
