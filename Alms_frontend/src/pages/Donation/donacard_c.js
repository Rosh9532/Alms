import { Container, Button } from "react-bootstrap";
import { BiCalendar } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { FaShoppingBag } from "react-icons/fa";
import "./dona.css";
import { Link } from "react-router-dom";
export default function Dcardc() {
  return (
    <div className="bg">
      <Container className="dcard">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_guo-kFa8Q6cyyqBC1oPZt5dHuwj25fy85RXiKK2iXhgT9WKe1huwtjetw1dIy1aDV7U&usqp=CAU"
          height="150px"
          alt="product"
          style={{
            borderTopRightRadius: "1rem",
            borderTopLeftRadius: "1rem",
            width: "100%",
          }}
        ></img>
        <div className="p-3">
          <h3>Product Name</h3>
          <br />
          <p style={{ color: "#3d3d3d" }}>
            fdxduyfgodkrgkv hiuaesopjirtsieo mhtiuafoveiohroydfnd
            rigsv[ivlmgisdfpmivkoguvz,voh8rtbmtihdgudrpokjtiseyt9eojrtkjygr9difle
            thuier78tg0srktg
          </p>
          <div>
            <FaShoppingBag />
            <span> Quantity : 4-5 kg </span>
            <br />
            <BiCalendar /> <span>Date</span>
            <br />
            <GoLocation /> <span>Location</span>
            <br />
            <GoPerson />
            <span> Post by</span>
            <br />
          </div>
        </div>
        <div class="overlay">
          <Link to="/chatbox"> <Button  variant="warning">Chat with Donor</Button></Link>
        </div>
      </Container>
    </div>
  );
}
