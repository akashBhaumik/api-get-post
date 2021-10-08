
import './App.css';
import GetUser from './Component/GetUser';
import AddUser from './Component/AddUser';
import React from 'react';

import {Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
  <Switch>
    
    <Route path="/user" component={GetUser} />
    <Route path="/adduser" component={AddUser}/>
  </Switch>

    {/* <GetUser/>
    <AddUser/> */}
    </div>
 
      
    
  );
}

export default App;
