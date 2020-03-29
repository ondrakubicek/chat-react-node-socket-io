import React from 'react'
import { animateScroll } from "react-scroll";

import styled from "styled-components";
import MessageItem from "./MessageItem";

import {useForm} from "../../shared/hooks/form-hook";

const MessagesListUl = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-basis: 0;
    width: 100%; 
    flex-direction: column;
    max-height: 300px;
    min-height: 300px;
    overflow-y: auto;
}
`;


class MessagesList extends React.Component {

    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        animateScroll.scrollToBottom({
            containerId: "messages-list",
            duration: 100
        });
    }
    render() {
        if (this.props.items.length === 0) {
            return (
                <h2>No messages</h2>
            );
        }
        return (
            <MessagesListUl className="messages-list" id="messages-list">
                {this.props.items.map(message => (
                    <MessageItem
                        key={message.id}
                        message={message}
                    />
                ))}
            </MessagesListUl>
        );
    }
}
export default MessagesList;
