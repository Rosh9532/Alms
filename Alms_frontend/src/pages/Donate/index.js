import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./style.css";
import Navbar from "../../components/NavBar/Navbar";

/**
 * @author
 * @function Donate
 **/

export const Donate = (props) => {
  const [error, seterror] = useState(null);
  const [Name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [district, setdistrict] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [image, setimage] = useState([]);
  const onClickHandler = async (e) => {
    const form = new FormData();
    form.append("Name", Name);
    console.log(form);
    form.append("description", description);
    form.append("address", address);
    form.append("city", city);
    form.append("district", district);
    form.append("postalCode", postalCode);
    for (let pic of image) {
      form.append("foodPoster", pic);
    }
    console.log(form);
    const res = await axios.post(
      "http://localhost:2000/api/event/create",
      form
    );
    if (res) {
      console.log(res);
      props.history.push("/explore");
    } else {
      seterror(true);
    }
  };
  const handleFoodPoster = (e) => {
    setimage([...image, e.target.files[0]]);
  };
  return (
    <div className="bg">
      <Navbar />
      <div className="formbody" style={{ marginTop: "60px" }}>
        <div className="headin"> Donation Form </div>
        <br />
        <Form>
          {error && <p>Something went wrong! Try Again</p>}
          <Row>
            <Form.Group className="mb-2">
              <Form.Label className="bold">Donation Title :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="bold">Product Description :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product description"
                onChange={(e) => setdescription(e.target.value)}
              />
            </Form.Group>

            <Row>
              <Form.Group className="mb-2">
                <Form.Label className="bold">Address :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  onChange={(e) => setaddress(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mb-2">
                <Form.Label className="bold">City :</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="City"
                  onChange={(e) => setcity(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label className="bold">District :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    onChange={(e) => setdistrict(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-2">
                  <Form.Label className="bold">Postal Code :</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Postal Code"
                    onChange={(e) => setpostalCode(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Form.Group className="mb-2">
                  <Form.Label className="bold">Expiry Date :</Form.Label>
                  <Form.Control type="date" placeholder="Enter expiry date" />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="mb-2">
                  <Form.Label className="bold">Product Image : </Form.Label>{" "}
                  <br />
                  {image.length > 0
                    ? image.map((pic, index) => (
                        <div key={index}>{pic.name}</div>
                      ))
                    : null}
                  <Form.Control
                    type="file"
                    placeholder="Product Image"
                    // onChange={(e) => setimage([...image, e.target.files[0]])}
                    onChange={handleFoodPoster}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Row>
          <br />
          <Button
            variant="warning"
            className="abtn"
            type="submit"
            onClick={onClickHandler}
          >
            Upload
          </Button>
        </Form>
      </div>
    </div>
  );
};
