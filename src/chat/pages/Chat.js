import React from 'react';
import io from 'socket.io-client';

import UsersList from "../../user/components/UsersList";
import MessagesList from "../../message/components/MessagesList";
import MessageForm from "../../message/components/MessageForm";
import Auth from "../../user/pages/Auth";


const ActiveUsersDummy = [
    {
        id: 'u1',
        name: 'Johny Dummy',
        image:
            'https://picsum.photos/35/'
    },
    {
        id: 'u2',
        name: 'Johny Dummy',
        image:
            'https://picsum.photos/36/'
    },
    {
        id: 'u3',
        name: 'Johny Dummy',
        image:
            'https://picsum.photos/37/'
    }
];

const MessageDummy = [
    {
        id: 'm1',
        name: 'John',
        text: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'm2',
        name: 'John Snow',
        text: '2Lorem ipsum dolor sit amet'
    }
];
const DEFAULT_ROOM = 'default_room';

class Chat extends React.Component {

    socket = false;
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            users: [],
            room: 'default_room',
            endpoint: 'http://localhost:4000'
        }
    };

    componentDidMount() {
        this.socket = io(this.state.endpoint);
        this.socket.emit('joinRoom', {username: this.props.username, room: 'default_room'});
        this.socket.on("message", data => this.addMessage(data));
        this.socket.on("roomUsers", data => this.updateUsers(data));
    }



    updateUsers(data) {
        this.setState({users: data.users});
    }

    addMessage(message){
        const messages = [...this.state.messages];
        messages.push(message);
        this.setState({messages:messages});
    }

    sendMessageHandler(message) {
        if(this.socket){
            this.socket.emit('chatMessage', message);
        }
    }
    disconnect() {
        if (this.socket) {
            this.socket.emit('disconnect');
        }
    }

    render() {
        console.log(this.props);
        if (!this.props.isLoggedIn) {
            this.disconnect();
            return (<Auth username={this.props.username}/>);
        } else {
            return (<div className="chat-room">
                {this.props.username}
                <UsersList items={this.state.users}/>
                <MessagesList items={this.state.messages}/>
                <MessageForm sendMessageHandler={(data) => this.sendMessageHandler(data)}/>
            </div>);
        }
    }
};

export default Chat;
