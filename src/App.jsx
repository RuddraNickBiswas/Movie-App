import React, {  } from "react";
import './app.scss'
import Header from "./components/header/Header.component";
import Main from "./components/main/Main.component";
// import { Route, Switch, Redirect } from "react-router-dom";


const  App = () => {
 return (
   <>
   <Header/>
   <div className = 'app'>
     <Main/>
   </div>
    </>
 )
}

export default App;
