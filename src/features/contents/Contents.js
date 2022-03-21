import React from "react";
import ContentTile from "../contentTile/ContentTile";
import { Spinner } from "react-bootstrap";
//import { getSubredditContent } from "../../app/api/apiSlice";
import { redditApi } from "../../app/api/apiSlice";
import { useSelector } from "react-redux";



const Contents = () => {

  const subreddit = useSelector(state=> state.subreddit.name)
  console.log(subreddit)

  const{data, isLoading} = redditApi.endpoints.getSubreddit.useQuery(`${subreddit}`)
    const style = { position: "fixed", top: "50%", left: "50%" };


    return (
      <>
      {
            !isLoading ? (
                
                data.data.children.map((subreddit,index) =>(
                 <ContentTile key = {index} subreddit = {subreddit.data}/>
                ))
           ) : (<Spinner animation="border" role="status" style={style}>
            <span className="visually-hidden">Loading</span>
          </Spinner>)
        }
        
      </>
    );
}

export default Contents;