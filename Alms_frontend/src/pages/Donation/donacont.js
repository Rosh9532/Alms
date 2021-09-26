

import "./dona.css";
import Navbar from "../../components/NavBar/Navbar";

import { Container, Button } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import "./dona.css";
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Donacont() {
  const [donations, setdonations] = useState([]);
  useEffect( () => {
    const getDonations = async () => {
      const res = await axios.get('http://localhost:2000/api/event/getevent');
      return res;
    }
    const resDonations = getDonations();
    if(resDonations) {
      setdonations(resDonations.events);
    }
  }, [])
  return (
    <div className="bg">
      <Navbar />
      <Container className="box" fluid flex>
        <div className="headings"> Donations </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {donations && donations.map(donation => (
            <div className="bg" key={donation._id}>
            <Container className="dcard">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_guo-kFa8Q6cyyqBC1oPZt5dHuwj25fy85RXiKK2iXhgT9WKe1huwtjetw1dIy1aDV7U&usqp=CAU"
                height="150px"
                alt="product"
                style={{
                  borderTopRightRadius: "1rem",
                  borderTopLeftRadius: "1rem",
                  width: "100%"
                }}
              ></img>
              <div className="p-3">
                <h3>Grains</h3>
                <br />
                <p style={{ color: "#3d3d3d" }}>
                  If any organization who serves the food to needy can accept this.
                </p>
                <div>
                  <BiCalendar /> <span>Date</span>: 30 oct 2021
                  <br />
                  <GoLocation /> <span>Location</span>: Nerul
                  <br />
                  <GoPerson />
                  <span> Post by</span>: Narayan Jadhav
                  <br />
                </div>
              </div>
              <div class="overlay">
                <Button variant="warning">Chat with Donor</Button>
              </div>
            </Container>
          </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
