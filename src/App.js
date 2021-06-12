import React from "react"
import { Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Login from "./Components/Login";
import Registration from "./Components/Registeration";
import Dashboard from "./Components/Dashboard";
import Course from "./Components/Course";
class App extends React.Component {

  
 
  render() {
    return (
      <div className="container">
        <h1 className='App-header title'>Learning Management System</h1>
       <h1>Welcome</h1>
        {/* <div className='App-body'>             */}
          <BrowserRouter>                 
              <Route path="/" exact component={() => <Login />} />      
              <Route path="/registration" component={Registration} />  
              <Route path="/dashboard" exact component={() => <Dashboard />} />
              <Route path="/dashboard/course" exact component={()=> <Course/>}/>
          </BrowserRouter>
        {/* </div> */}

      
      </div>
    );
  }
}

export default App;
