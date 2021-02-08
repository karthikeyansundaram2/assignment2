import React from "react";
import './Home.css'

export default class Home extends React.Component{

    constructor(props){
        super(props);

        this.state={
            searchString:'',
            date:'',
            courses:[{
                name:"Javascript",
                image:"./../images/js_imp.jpeg",
                total_credit:10,
                total_students:100,
                taken_by:"Mr.XXX",
                start_date:"2021/02/02"

            },
            {
                name:"Web development",
                image:"img_avatar.png",
                total_credit:9,
                total_students:100,
                taken_by:"Mr.XXX",
                start_date:"2021/02/05"

            },
            {
                name:"Python",
                image:"img_avatar.png",
                total_credit:7,
                total_students:90,
                taken_by:"Mr.XXX",
                start_date:"2021/02/04"

            },
        ]
        }
    }
    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
      }
      handleDate = (e) => {
        this.setState({ date:e.target.value });
      }
    render(){
        var classes=this.state.courses,
        searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      classes = classes.filter(function(i) {
        return i.name.toLowerCase().match( searchString );
      });
    }
    else if(this.state.date.length>0){
        classes = classes.filter(a => new Date(a.start_date) - new Date(this.state.date) > 0);

    }
        return(
            <div className='container'>
                 <div >
              <input type="search"  name="search"
                placeholder="search course name"
                value={this.state.searchString}
                onChange={this.handleChange} />

            </div>
            <div >
              <input type="date"  name="date"
                placeholder="search by date"
                value={this.state.date}
                onChange={this.handleDate} />
                
            </div>
                {classes.map((course,key)=>{
                    return(
                        <div class="card" key={key}>
                        <img src={require('./web.jpeg')} alt="Avatar" style={{width:"100%"}}/>
                        <div className="card-container">
                          <h4><b>{course.name}</b></h4> 
                          <p>credit:{course.total_credit}</p>
                          <p>Students:{course.total_students}</p>
                          <p>Staff:{course.taken_by}</p> 
                          <p>Start Date:{course.start_date}</p>
                        </div>
                      </div>
                    )
                })}
             
            </div>
        )
    }
}



