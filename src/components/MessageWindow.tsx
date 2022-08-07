import { useEffect, useState } from "react";
import axios from "axios";

import GetJokeButton from "./GetJokeButton";
import Messages from "./Messages";
import Message from "../models/message";
import {
  requestJoke,
  reponseSetUpQuestion,
  responseSetUpNoQuestion,
  responsePunchline,
} from "../text/user-messages";

const MessageWindow = () => {
  const [setup, setSetup] = useState<string>("");
  const [punchine, setPunchline] = useState<string>("");
  const [stage, setStage] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  //   let messages = [new Message("Hey", "dad"), new Message("I'm Hungry", "user"), new Message("Hi, Hungry. I'm Dad.", "dad")]
  //   const [messages, setMessages] = useState<Element[]>([]);
  // useState - set up array that includes type message
  // itterate through array. Check if type messge is user or dad

  // Make it so that each press of the button moves the conversation along

  const updateMessages = (newMessage: string, type: string) => {
    const message = new Message(newMessage, type);

    setMessages((prevMessages) => {
      return prevMessages.concat(message);
    });
  };

  const getJoke = () => {
    const options = {
      method: "GET",
      url: "https://dad-jokes.p.rapidapi.com/random/joke",
      headers: {
        "X-RapidAPI-Key": "1a3e8085b5msh4851b365601850ep1ddf7djsn77a22bef01c9",
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setSetup(response.data.body[0].setup);
        setPunchline(response.data.body[0].punchline);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getJoke();
  }, []);

  const stageOne = () => {
    // 1 - user requests a joke and dad gives set up
    const request = requestJoke[Math.floor(Math.random() * requestJoke.length)];
    updateMessages(request, "user");
    updateMessages(setup, "dad");
  };

  const stageTwo = () => {
    // 2 - user responds to the set up and dad gives punchline
    const responseNoQuestion =
      responseSetUpNoQuestion[
        Math.floor(Math.random() * responseSetUpNoQuestion.length)
      ];
    // const responseQuestion = repon
    const reponseQuestion =
      reponseSetUpQuestion[
        Math.floor(Math.random() * reponseSetUpQuestion.length)
      ];

    // Check to see if the set is a question.

    const reponse: string = setup.endsWith("?")
      ? reponseQuestion
      : responseNoQuestion;
    updateMessages(reponse, "user");
    updateMessages(punchine, "dad");
  };

  const stageThree = () => {
    const request =
      responsePunchline[Math.floor(Math.random() * responsePunchline.length)];
    updateMessages(request, "user");
    getJoke();
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
    <div className="h-full bg-sky-50 pb-50">
      <div className="z-50 fixed w-full flex justify-center items-center h-16 bg-sky-700">
        <h1 className="text-3xl text-white">Dad Jokes</h1>
      </div>
      <div className="absolute w-full bottom-0 mb-20">
        <Messages messages={messages} />
      </div>
      <GetJokeButton getNewJoke={getNewJokeHandler} />
    </div>
  );
};

export default MessageWindow;
