import React from "react";
import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import AddFriends from '../components/AddFriends'

class Friends extends React.Component {

  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  };

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res.data)
        this.setState({
          friends:res.data
        })
      })
      .catch((err) => console.log(err.response.data.error));
  };



  formatData = () => {
    const formattedData = [];
    this.state.friends.forEach((friend, index, arr) => {
      if (friend.name !== "Janice Litman-Goralnik") { //lol this one is a little funny
        formattedData.push({
          id: index,
          name: friend.name,
          age: friend.age,
          email: friend.email
        });
      };
    });
    return formattedData;
  };

  render(){
    const friends = this.formatData();
    return(
      <div>
        {friends.map((friend) => (
          <div key={friend.id}>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <br></br>
            </div>
        ))}
        <div>
          <AddFriends friends={friends}/>
        </div>
      </div>
    )
  }
};
export default Friends;
