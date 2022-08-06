class Message {
    id: string;
    text: string;
    type: string;

    constructor(messageText: string, messageType: string) {
        this.text = messageText;
        this.type = messageType;
        this.id = new Date().toISOString();
    }
}

export default Message;