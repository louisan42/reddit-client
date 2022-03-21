import React from "react";
import ContentTile from "../contentTile/ContentTile";
import { Card, Placeholder } from "react-bootstrap";
import { redditApi } from "../../app/api/apiSlice";
import { useSelector } from "react-redux";

const Contents = () => {
  const subreddit = useSelector((state) => state.subreddit.name);

  const { data, isFetching } = redditApi.endpoints.getSubreddit.useQuery(
    `${subreddit}`
  );
  const placeholders = [
    { src: "../../../placeholder-image.png" },
    { src: "../../../placeholder-image.png" },
    { src: "../../../placeholder-image.png" },
    { src: "../../../placeholder-image.png" },
  ];

  return (
    <>
      {!isFetching
        ? data.data.children.map((subreddit, index) => (
            <ContentTile key={index} subreddit={subreddit.data} />
          ))
        : placeholders.map((placeholder, index) => (
            <Card
              key={index}
              border="0"
              className="p-4 bg-white shadow rounded mb-4"
            >
              <Card.Img
                variant="bottom"
                src={placeholder.src}
                className=""
              />

              <Card.Body className="ps-1">
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
              </Card.Body>
            </Card>
          ))}
    </>
  );
      }

export default Contents;
