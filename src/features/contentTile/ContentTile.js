import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo from "../../logo.svg";
import{BsArrowUpCircle,BsArrowDownCircle} from "react-icons/bs"

const ContentTile = () => {
  return (
    <Row className="bg-white shadow rounded mb-4 p-3">
      <Col style={{fontSize: "1.5rem"}} xs={1}>
        <div>
        <BsArrowUpCircle />
        </div>
        <BsArrowDownCircle />
      </Col>
      <Col>
      <Card border = "0" className="">
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Img variant="bottom" src={logo} className="App-logo"/><hr />
          <Card.Text className="text-muted d-flex justify-content-between">
              <span className="text-start">Name</span>
              <span className="text-center mx-auto">Time posted</span>
              <span className="text-end">comments</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
  );
};

export default ContentTile;
