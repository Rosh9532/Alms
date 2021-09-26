import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import Nav from "../nav/Nav";



export default class ChatBody extends Component {
  render() {
    return (
    <>  
     <Nav/>
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
      </div>
    </>  
    );
  }
}
