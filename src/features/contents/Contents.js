import React from "react";
import { Row } from "react-bootstrap";
import ContentTile from "../contentTile/ContentTile";



const Contents = () => {
    return (
      <Row>
        <ContentTile />
        <ContentTile />
        <ContentTile />
        
      </Row>
    );
}

export default Contents;