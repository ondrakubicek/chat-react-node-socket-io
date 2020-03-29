import React from 'react';
import io from 'socket.io-client';

import UsersList from "../../user/components/UsersList";
import MessagesList from "../../message/components/MessagesList";
import MessageForm from "../../message/components/MessageForm";
import ChatSocket from '../../shared/util/ChatSocket';


class Chat extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            messages: [],
            users: [],
            currentUser: { 'username': props.username},
            chatSocket: props.chatSocket
        }
    };

    componentDidMount() {
        console.log(this.chatSocket);
        this.state.chatSocket.logIn(this.state.currentUser.username);
        this.state.chatSocket.socket.on("message", data => this.addMessage(data));
        this.state.chatSocket.socket.on("roomUsers", data => this.updateUsers(data));
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
        if(this.state.chatSocket){
            this.state.chatSocket.socket.emit('chatMessage', message);
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
