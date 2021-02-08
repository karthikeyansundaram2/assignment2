import React from "react";
import Home from "./Home";
import Course from "./Course"
import { Route, BrowserRouter } from "react-router-dom";

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            click:''
        }
    }
    handleClick=(e)=>{
     
    }
    render(){
        return(
            <div style={styles.content}>
             <nav className="site-nav">                                           
            <ul className="mainnav" >
              <li ><a href="/dashboard">Home</a></li>
              <li  ><a href="/dashboard/course">Courses</a></li>
              
              <li ><a href="/">Log out</a></li>              
            </ul>
          </nav>
        <div style={styles.Appbody}>            
          <BrowserRouter>                 
              <Route path="/dashboard" exact component={() => <Home />} />      
              <Route path="/dashboard/course" component={Course} />  
              
          </BrowserRouter>
        </div>
          </div>
        )
    }
}
const styles={
    content:{
        display: "grid",
        gridTemplateColumns: "0.5fr 3fr 1fr",
        gridTemplateRows: "repeat(4, auto)",       
        gridRowGap:"0.5em",
        margin: "0",
        float: 'left'
    },
    Appbody: {
        gridColumn: "2 / 3",                           
        gridRow: "2 / 4",   
        display: "flex",
        flexDirection: "column",
        alignItems: 'space-between',
        justifyContent: "left"
           
      }
}