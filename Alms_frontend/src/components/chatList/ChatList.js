import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
      id: 1,
      name: "Gaurav",
      active: true,
      isOnline: true,
    },
    {
      image:
      "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
      id: 2,
      name: "Aarti",
      active: false,
      isOnline: false,
    },
    
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <Link to="/explore"><span>New conversation</span></Link>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          
        </div>
        
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
