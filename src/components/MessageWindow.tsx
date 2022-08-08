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
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);
  const [messageid, setMessageId] = useState<number>(1);

  const updateMessages = (newMessage: string, type: string) => {
    // create an id here
    const message = new Message(messageid, newMessage, type);
    setMessageId((prevId) => (prevId += 1));

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonIsDisabled(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [buttonIsDisabled]);

  const getDadMessage = (messageType: string) => {   
    if (messageType === "setup") {
      updateMessages(setup, "dad");
    }

    if (messageType === "punchline") {
      updateMessages(punchine, "dad");
    }
  };

  // Stage One - Sets Random user comment
  const stageOne = () => {
    setButtonIsDisabled(true);
    // 1 - user requests a joke and dad gives set up
    const request = requestJoke[Math.floor(Math.random() * requestJoke.length)];
    updateMessages(request, "user");
    getDadMessage("setup");
  };

  const stageTwo = () => {
    setButtonIsDisabled(true);
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
    getDadMessage("punchline");
  };

  const stageThree = () => {
    setButtonIsDisabled(true);
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
  };

  return (
    <div className="h-full max-w-4xl bg-sky-50 pb-50">
      <div className="z-50 fixed w-full flex justify-center items-center h-16 bg-neutral-200">
        <h1 className="font-mono text-3xl text-blue-900">Dad Jokes</h1>
      </div>
      <div className="absolute w-full bottom-0 mb-20">
        <Messages messages={messages} />
      </div>
      <GetJokeButton
        getNewJoke={getNewJokeHandler}
        disabled={buttonIsDisabled}
      />
    </div>
  );
};

export default MessageWindow;
