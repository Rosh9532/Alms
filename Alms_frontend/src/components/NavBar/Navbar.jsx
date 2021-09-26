import React from "react";
import { Button } from "react-bootstrap";
// import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav className="fixed-top  ">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>

        <label class="logo">
          <img src="images/alms_logo.png" alt="" />
        </label>

        <ul>
          <li>
            <Link to="/"> HOME</Link>
          </li>
          <li>
            <Link to="/explore">DONATIONS</Link>
          </li>

          <li>
            <button
              id="myButton"
              class="btn btn-success "
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location = "/donate";
              }}
            >
              DONATE
            </button>
          </li>
          {localStorage.name ? (
            <li>{localStorage.name.toUpperCase()}</li>
          ) : (
            <li>
              <Link to="/signup"> SIGNUP </Link>
            </li>
          )}
        </ul>
      </nav>

      <div>{props.children}</div>
    </>
  );
};

export default Navbar;
