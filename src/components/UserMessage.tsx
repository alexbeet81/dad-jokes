import userImage from "../assets/user.jpeg";

const UserMessage: React.FC<{ text: string }> = (props) => {
  return (
    <div className="flex flex-row-reverse items-center p-2 ml-5">
      <img src={userImage} alt="avatar"
           className="rounded-full w-16 h-16 p-1 ml-7" />
      <div className="relative min-w-[110px] min-h-[50px] bg-indigo-500 rounded-[10px] flex justify-center items-center text-white text-xl p-3">
        {props.text}
        <div className="absolute w-0 h-0 border-t-[13px] border-t-transparent border-b-[13px] border-b-transparent border-l-[26px] border-l-indigo-500 left-[100%] top-[50%] translate-y-[-50%]" />
      </div>
    </div>
  );
};

export default UserMessage;
