class Message {
    id: number;
    text: string;
    type: string;

    constructor(messageId: number, messageText: string, messageType: string) {
        this.text = messageText;
        this.type = messageType;
        this.id = messageId;
    }
}

export default Message;