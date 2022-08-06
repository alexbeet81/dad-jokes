const GetJokeButton: React.FC<{getNewJoke: () => void}> = (props) => {
  const getJokeButtonHandler = (event: React.MouseEvent) => {
    props.getNewJoke();
  };

  return (
    <div className="flex justify-center items-center h-16 bg-sky-700">
      <button
        onClick={getJokeButtonHandler}
        className="text-white h-10 w-32 rounded-lg bg-blue-900"
      >
        Get Joke
      </button>
    </div>
  );
};

export default GetJokeButton;
