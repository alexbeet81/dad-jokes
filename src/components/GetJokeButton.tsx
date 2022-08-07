const GetJokeButton: React.FC<{getNewJoke: () => void, disabled: boolean}> = (props) => {
  const getJokeButtonHandler = (event: React.MouseEvent) => {
    props.getNewJoke();
  };

  return (
    <div className="fixed bottom-0 w-full z-50 flex justify-center items-center h-16 bg-sky-700">
      <button
        disabled={props.disabled}
        onClick={getJokeButtonHandler}
        className="text-white h-10 w-32 rounded-lg bg-blue-900"
      >
        Get Joke
      </button>
    </div>
  );
};

export default GetJokeButton;
