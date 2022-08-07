import { useState } from "react";

import GetJokeButton from "./GetJokeButton";
import Messages from "./Messages";
import Message from "../models/message";
import {requestJoke, reponseSetUpQuestion, responseSetUpNoQuestion, responsePunchline} from "../text/user-messages";

const MessageWindow = () => {
  const [stage, setStage] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  //   let messages = [new Message("Hey", "dad"), new Message("I'm Hungry", "user"), new Message("Hi, Hungry. I'm Dad.", "dad")]
  //   const [messages, setMessages] = useState<Element[]>([]);
  // useState - set up array that includes type message
  // itterate through array. Check if type messge is user or dad

  // Make it so that each press of the button moves the conversation along

  const updateMessages = (newMessage: string, type: string) => {
    const message = new Message(newMessage, type)

    setMessages((prevMessages) => {
      return prevMessages.concat(message);
    });
  };

  const stageOne = () => {
    // 1 - user requests a joke and dad gives set up
    const request = requestJoke[Math.floor(Math.random() * requestJoke.length)];
    updateMessages(request, "user");
    updateMessages("hello", "dad");
  };

  const stageTwo = () => {
    // 2 - user responds to the set up and dad gives punchline
    const request = responseSetUpNoQuestion[Math.floor(Math.random() * responseSetUpNoQuestion.length)];
    updateMessages(request, "user");
    updateMessages("HAHAHAHA", "dad");
  };

  const stageThree = () => {
    const request = responsePunchline[Math.floor(Math.random() * responsePunchline.length)];
    updateMessages(request, "user");
    updateMessages("Booo booo boo", "dad");
  };



  const getNewJokeHandler = () => {
    // we check what stage we are at in the joke.
    // useState has a number - that number relates to the stage we are at in the process
    // 1 - user requests a joke and dad gives set up
    if (stage === 1) {
        // We fire stage one
        stageOne();
        setStage(2);
    }
    // 2 - user responds to the set up and dad gives punchline
    if (stage === 2) {
        stageTwo();
        setStage(3);
    }

    // 3 - user reponds to the joke and we reset to 1
    if (stage === 3) {
        stageThree();
        setStage(1);
    }
    // Call dad jokes api to get joke
    // Create a user message asking dad for joke
    
    // user message prompt joke
    // Create a dad message with set up
    // Create a user message with response to set up
    // Create a dad message with punchine
    // create a user message with response to punchline
    
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-sky-50">
      <div className="mb-auto flex justify-center items-center h-16 bg-sky-700">
        <h1 className="text-3xl text-white">Dad Jokes</h1>
      </div>
      <Messages messages={messages} />
      <GetJokeButton getNewJoke={getNewJokeHandler} />
    </div>
  );
};

export default MessageWindow;
