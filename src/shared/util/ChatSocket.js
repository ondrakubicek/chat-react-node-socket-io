import io from 'socket.io-client';
import { AuthContext } from '../context/auth-context';

class ChatSocket {

    socket = false;
    
    constructor(props) {
        const endpoint = 'http://localhost:4000';
        this.socket = io(endpoint);
    };

    logIn(username) {
        this.socket.emit('joinRoom', {username: username, room: 'default_room'});
    }

    logout() {
        this.socket.emit('logout');
    } 
}

export default ChatSocket;
