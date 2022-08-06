import GetJokeButton from "./GetJokeButton";

const MessageWindow = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-sky-50">
      <div className="mb-auto flex justify-center items-center h-16 bg-sky-700">
        <h1 className="text-3xl text-white">Dad Jokes</h1>
      </div>
      <GetJokeButton />
    </div>
  );
};

export default MessageWindow;
