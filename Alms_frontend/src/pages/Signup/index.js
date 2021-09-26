import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./style.css";
import Navbar from "../../components/NavBar/Navbar";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Signup
 **/

export const Signup = (props) => {
  const [error, seterror] = useState(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const onClickHandler = async (e) => {
    e.preventDefault();
    const payload = {
      Name,
      email: Email,
      password: Password,
      phoneNo: Phone,
    };
    const res = await axios.post(
      "http://localhost:2000/api/userSignup",
      payload
    );
    if (res) {
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("_id", res.data.user._id);
      localStorage.setItem("name", res.data.user.Name);
      localStorage.setItem("email", res.data.user.email);
      props.history.push("/donate");
    } else {
      seterror(true);
    }
  };
  return (
    <div className="bg">
      <Navbar />
      <div className="formbody" style={{ width: "40%", marginTop: "90px" }}>
        <div className="headin"> Sign-up</div>
        <br />
        <Form>
          {error && <p>Something went wrong! Try Again</p>}
          <Form.Group className="mb-2">
            <Form.Label className="bold">Name :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="bold">Email-ID :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="bold">Phone Number :</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your Phone Number"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="bold">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              min="6"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <div
            className="pb-3"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <Button
              variant="warning"
              type="submit"
              className="abtn"
              style={{ marginLeft: "5px" }}
              onClick={onClickHandler}
            >
              Signup
            </Button>

            <Button variant="warning" className="abtn" type="reset">
              Reset
            </Button>
          </div>{" "}
          Already have an account ?
          <Link to="/signin">
            <Button variant="light">Login</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};
