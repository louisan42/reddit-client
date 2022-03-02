import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import logo from "../../logo.svg";
import{BsArrowUpCircle,BsArrowDownCircle} from "react-icons/bs"

const ContentTile = () => {
  return (
    <Row>
      <Col style={{fontSize: "2rem"}} md={1}>
        <div>
        <BsArrowUpCircle />
        </div>
        <BsArrowDownCircle />
      </Col>
      <Col>
      <Card className="rounded mb-3">
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Img variant="bottom" src={logo} className="App-logo"/>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
      </Col>
    </Row>
  );
};

export default ContentTile;
