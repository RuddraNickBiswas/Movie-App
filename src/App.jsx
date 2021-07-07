import React, {  } from "react";
import './app.scss'
import {  Route , Switch} from 'react-router-dom'
import Header from "./components/header/Header.component";
import Main from "./components/main/Main.component";
import Details from "./components/content/details/Details.component";
// import { Route, Switch, Redirect } from "react-router-dom";


const  App = () => {
 return (
   <>
   <Header/>
   <div className = 'app'>
     <Switch>
       <Route  exact path = "/" component = {Main} />
       <Route  exact path = "/:id/:name/details" component = {Details} />
     </Switch>
  
   </div>
    </>
 )
}

export default App;
