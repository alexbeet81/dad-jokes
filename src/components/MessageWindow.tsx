import { useState } from "react";

import GetJokeButton from "./GetJokeButton";
import Messages from "./Messages";
import Message from "../models/message";

const MessageWindow = () => {
  let messages = [new Message("message", "dad"), new Message("message", "user"), new Message("message", "dad")]
  //   const [messages, setMessages] = useState<Element[]>([]);
  // useState - set up array that includes type message
  // itterate through array. Check if type messge is user or dad

  const getNewJokeHandler = () => {
    // Call dad jokes api to get joke
    // Create a user message asking dad for joke
    // user message prompt joke
    // Create a dad message with set up
    // Create a user message with response to set up
    // Create a dad message with punchine
    // create a user message with response to punchline
    // console.log("Works");
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-sky-50">
      <div className="mb-auto flex justify-center items-center h-16 bg-sky-700">
        <h1 className="text-3xl text-white">Dad Jokes</h1>
      </div>
      <Messages messages={messages}/>
      <GetJokeButton getNewJoke={getNewJokeHandler} />
    </div>
  );
};

export default MessageWindow;
