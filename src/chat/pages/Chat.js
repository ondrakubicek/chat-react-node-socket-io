import React from 'react';

import UsersList from "../../user/components/UsersList";
import MessagesList from "../../message/components/MessagesList";
import MessageForm from "../../message/components/MessageForm";


class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            users: [],
            currentUser: { 'username': props.username}
        }
    };

    componentDidMount() {
        console.log("log in"+this.state.currentUser.username);
        this.props.chatSocket.logIn(this.state.currentUser.username);
        this.props.chatSocket.socket.on("message", data => this.addMessage(data));
        this.props.chatSocket.socket.on("roomUsers", data => this.updateUsers(data));
    }

    updateUsers(data) {
        this.setState({users: data.users,currentUser: data.currentUser});
    }

    addMessage(message){
        const messages = [...this.state.messages];
        messages.push(message);
        this.setState({messages: messages});
    }

    sendMessageHandler(message) {
        if(this.props.chatSocket){
            this.props.chatSocket.socket.emit('chatMessage', message);
        }
    }
 

    render() {
        return (<div className="chat-room">
            <UsersList items={this.state.users}/>
            <MessagesList items={this.state.messages}/>
            <MessageForm 
                sendMessageHandler={(data) => this.sendMessageHandler(data)}
            />
        </div>);
    }
};

export default Chat;
