import DadMessage from "./DadMessage";
import UserMessage from "./UserMessage";
import Message from "../models/message";

const MessageItem: React.FC<{ text: string; type: string }> = (props) => {
  if (props.type === "dad") {
    return (
      <DadMessage text={props.text}/>
    );
  }

  return (
    <UserMessage text={props.text}/>
  );
};

export default MessageItem;
