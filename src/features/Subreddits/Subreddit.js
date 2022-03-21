import React from "react";
import { ListGroup } from "react-bootstrap";
import { updateName } from "./subredditSlice";
import { useDispatch, useSelector } from "react-redux";
const listItems = [
    "home",
    "pics",
    "soccer",
    "toronto",
    "nba",
    "AskReddit",
    "worldnews",
    "ukraine",
    "memes",
    "politics",
    "Codecademy",
    "PremierLeague",
    "PCBuilds",
    "Halo",
    "formula1",
    "carshows"

]


const Subreddit =() => {


    //const[subredditName,setSubRedditName] = useState("gaming")
    const dispatch =useDispatch();

    const onNameClick = e => {
        //setSubRedditName(e.target.name)
        dispatch(updateName(e.target.name))
    }

  return (
    <article className="bg-white shadow p-4 rounded w-100">
      <h3>Subreddits</h3>
      <ListGroup>
        {listItems.map((item, index) => (
          <ListGroup.Item
          style={{fontWeight:"600"}}
            key={index}
            action
            className={`border-0 p-3 text-muted`}
            href={`#link${index}`}
            name={item}
            onClick = {onNameClick}
          >
            {item}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </article>
  );
}

export default Subreddit;