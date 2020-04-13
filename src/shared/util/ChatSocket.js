import io from 'socket.io-client';

class ChatSocket {

    socket = false;
    
    constructor(props) {
        const endpoint = 'http://localhost:4000';
        this.socket = io(endpoint);
    };

    logIn(username) {
        this.socket.connect();
        this.socket.emit('joinRoom', {username: username, room: 'default_room'});
    }

    logout() {
        this.socket.disconnect();
    } 
}

export default ChatSocket;
