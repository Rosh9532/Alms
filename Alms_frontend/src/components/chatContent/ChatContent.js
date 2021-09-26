import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
      type: "",
      msg: "Hi Gaurav, I need your donation of food ",
    },
    {
      key: 2,
      image:
        "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
      type: "other",
      msg: "That's great",
    },
    // {
    //   key: 3,
    //   image:
    //     "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
    //   type: "other",
    //   msg: "Would you provide further location details to pick the product?",
    // },
    {
      key: 4,
      image:
        "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
      type: "",
      msg: "Would you provide further location details to pick the product?",
    },
    {
      key: 5,
      image:
        "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
      type: "other",
      msg: "Yeahh Sure",
    },
    {
      key: 6,
      image:
        "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A=",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://media.istockphoto.com/vectors/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-vector-id1208175274?k=20&m=1208175274&s=612x612&w=0&h=Ud2p5iidw5UDWGrzyuSiQ8eO08qzoqv_BAxnwx9qf1A="
              />
              <p>Gaurav</p>
            </div>
          </div>

          
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
