import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import Navbar from "../../components/NavBar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
/**
 * @author
 * @function Signin
 **/

export const Signin = (props) => {
  const [error, seterror] = useState(null);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const onClickHandler = async (e) => {
    e.preventDefault();
    const payload = {
      email: Email,
      password: Password,
    };
    const res = await axios.post(
      "http://localhost:2000/api/userSignin",
      payload
    );
    if (res) {
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
      <div className="formbody" style={{ width: "40%", marginTop: "130px" }}>
        <div className="headin"> Login</div>
        <br />
        <Form>
          {error && <p>Something went wrong! Try Again</p>}
          <Form.Group className="mb-2">
            <Form.Label className="bold">Email-ID :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="bold">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              min="6"
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
              Login
            </Button>

            <Button variant="warning" type="reset" className="abtn">
              Reset
            </Button>
          </div>
          Don't have an account ?
          <Link to="/signup">
            {" "}
            <Button variant="light">Sign-up</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};
