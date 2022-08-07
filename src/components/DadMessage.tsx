import { useEffect, useState } from "react";
import dadImage from "../assets/dad.jpeg";

const DadMessage: React.FC<{ text: string }> = (props) => {
  // TEST PURPOSES - Have a message we are getting from props
  // Have a random number generator that changes the time it takes to type
  // Or take the length of the message from the api and use that to dictate how long the wait should be
  const pauseTime: number = props.text.length * 100;
  // How to have a ... waiting animation before returning the message.
  // Create a useState set to false
  // Set message text to a ternery operator that checks use state
  const [messageIsShown, setMessageIsShown] = useState<boolean>(false);
  const [messageIsHidden, setMessageIsHidden] = useState<boolean>(true);
  // Have a timer that changes the use state in a useEffect
  useEffect(() => {
    setTimeout(() => {
      setMessageIsHidden(false);
    }, 1000);

    setTimeout(() => {
      setMessageIsShown(true);
    }, pauseTime);
  }, [pauseTime]);
  // Timer finises and message changes.
  // return message is hidden to replicate the dad reading the message from user

  const typingIndicator = (
    <div>
      <span className="h-4 w-4 float-left mx-px bg-amber-100 block rounded-full animate-[pulse_1s_ease-in-out_infinite_.3333s]"></span>
      <span className="h-4 w-4 float-left mx-px bg-amber-100 block rounded-full animate-[pulse_1s_ease-in-out_infinite_.6666s]"></span>
      <span className="h-4 w-4 float-left mx-px bg-amber-100 block rounded-full animate-[pulse_1s_ease-in-out_infinite_.9999s]"></span>
    </div>
  );

  if (messageIsHidden) return <div />;

  return (
    <div className="flex flex-row items-center p-2 mr-5">
      <img
        src={dadImage}
        alt="avatar"
        className="rounded-full w-16 h-16 p-1 mr-7"
      />
      <div className="relative min-w-[110px] min-h-[50px] bg-amber-500 rounded-[10px] flex justify-center items-center text-white text-xl p-3">
        {messageIsShown ? props.text : typingIndicator}
        <div className="absolute w-0 h-0 border-t-[13px] border-t-transparent border-b-[13px] border-b-transparent border-r-[26px] border-r-amber-500 right-[100%] top-[50%] translate-y-[-50%]" />
      </div>
    </div>
  );
};

export default DadMessage;
