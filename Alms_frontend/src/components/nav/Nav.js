import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";


export default class Nav extends Component {
  render() {
    return (
      <>
        <nav className="fixed-top  "  >
            <input type="checkbox" id="check"/>
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <label class="logo"><img src="images/alms_logo.png" alt="" /></label>
            <ul>
                
                <li><Link to="/explore">EXPLORE</Link></li>
                
                
            </ul>
        </nav>
      </>
    );
  }
}
