import GetJokeButton from "./GetJokeButton";
import UserMessage from "./UserMessage";

const MessageWindow = () => {
  let messageArray: Array<any> = ['test', 'test', 'test'];
  // useState - set up array that includes type message
  // itterate through array. Check if type messge is user or dad

  const getNewJokeHandler = () => {
    // Push a new User Message into the message array.
    console.log("Works");
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-sky-50">
      <div className="mb-auto flex justify-center items-center h-16 bg-sky-700">
        <h1 className="text-3xl text-white">Dad Jokes</h1>
      </div>
        {messageArray}
      <GetJokeButton getNewJoke={getNewJokeHandler} />
    </div>
  );
};

export default MessageWindow;
