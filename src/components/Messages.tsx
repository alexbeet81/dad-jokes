import Message from "../models/message";
import MessageItem from "./MessageItem";

const Messages: React.FC<{ messages: Message[] }> = (props) => {

    const newMessages = props.messages.map(message => {
        return <MessageItem type={message.type} text={message.text}/>
    })

    return <div>{newMessages}</div>;
};

export default Messages;