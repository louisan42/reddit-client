import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import{BsChatSquare,BsPerson} from "react-icons/bs"
import {TiArrowDownOutline,TiArrowUpOutline} from 'react-icons/ti'
import parse from 'html-react-parser';

const ContentTile = ({ subreddit }) => {
  let cardContent;

  if (subreddit.post_hint === "image") {
    cardContent = (
      <Card.Img variant="bottom" src={subreddit.url} className="" />
    );
  } else if (subreddit.post_hint === "rich:video") {
    let data = subreddit.secure_media_embed.content.replaceAll("&lt;", "<");
    data = data.replaceAll("&gt;", ">");
    cardContent = <div className="w-100">{parse(data)}</div>;
  }

  const convertUpVotes = () => {
    
    return subreddit.ups >= 1000 ? `${(subreddit.ups/1000).toFixed(1)}k` : subreddit.ups;
  }
  const convertDate = ()=>{
    let value;
    const hours = ((new Date().getTime()/1000) - (subreddit.created_utc))/3600;
    //console.log(hours)
    if(hours > 24){

      value = Math.floor(hours/24) === 1 ? `a day ago` : `${Math.floor(hours/24)} days ago`
    } else if(hours < 1) {
      value = (hours * 60 ) === 1 ? `a minute ago` : `${Math.floor(hours * 60)} minutes ago`
    } else {
      value =  Math.floor(hours) === 1 ? `an hour ago` : `${Math.floor(hours)} hours ago`
    }
    
    return value
   
  }

  return (
    <Row className="bg-white shadow rounded mb-4 p-0">
      <Col
        style={{ fontSize: "1.2rem", padding: "0",paddingTop: "8px", textAlign: "center", backgroundColor: "#e9ecef" }}
        xs={1}
      ><Button variant="light">
        <TiArrowUpOutline />
      </Button>
        <Card.Text className="mb-0 fw-bold">{convertUpVotes()}</Card.Text>
        <Button variant="light"><TiArrowDownOutline /></Button>
      </Col>
      <Col className="p-0">
        <Card border="0" className="">
          <Card.Body className="ps-1">
            <Card.Title className="mb-4">{subreddit.title}</Card.Title>
            {cardContent}
            <hr />
            <Card.Text className="text-muted d-flex justify-content-between">
              <span className="text-start">
                <BsPerson /> <span className="fw-bold text-primary">{subreddit.author}</span>
              </span>
              <span className="text-center mx-auto">
                {convertDate()
               
              }</span>
              <span className="text-end">
                <BsChatSquare /> {subreddit.num_comments >= 1000 ? `${(subreddit.num_comments/1000).toFixed(1)}k` :  subreddit.num_comments}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ContentTile;
