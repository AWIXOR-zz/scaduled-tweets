import React from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/form/Form";

function EditTweet() {
  let { id } = useParams();
  // make a request here using the id or do whatever you think is good to get the tweetContent and time

  let tweetCont = "";
  let tweetTime = "";

  return (
    <div>
      <Form tweetCon={tweetCont} tweetTime={tweetTime} />
    </div>
  );
}

export default EditTweet;
