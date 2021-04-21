import axios from "axios";
import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friends from "./Friends";

class AddFriends extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      name:"",
      age:"",
      email:""
    }
  }
  handleChanges = e => {
    // update state with each keystroke

    const {name, value} = e.target
    

    this.setState({
      [name]:value
    });
    console.log([name],value)
  };
   addNewFriend = e => {
    e.preventDefault();
        axiosWithAuth()
        .post('/api/friends',this.state)
        .then((res) => {
            console.log(res)
        })
        .catch((err)=>{

        })
  }
  render(){
      return(
          <div>
            <form onSubmit = {this.addNewFriend}>
                <h3>Enter New Friend</h3>
                <input onChange={this.handleChanges} value={this.state.name} type="text" name="name" placeholder='name'/>
                <input onChange={this.handleChanges} value={this.state.age} type="text" name="age" placeholder='age'/>
                <input onChange={this.handleChanges} value={this.state.email} type="text" name="email"placeholder='email'/>
                <button>Add New Friend</button>
            </form>
          </div>
      )
  }
}
export default AddFriends