import React, { Component } from 'react';
import styled from 'styled-components';
import {useForm} from "../../shared/hooks/form-hook";

const MessageItemLi = styled.li`
    list-style: none;
    padding: 2px;
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    background-color: lightblue;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    
    .message-item__top {
        display: flex;
        .message-item__top__name {
            flex: 1;
            font-size: 10px;
        }
        .message-item__top__time {
            font-size: 10px;
        }
        
    
    }
   
`;
const MessageItem = props => {

    return (
        <MessageItemLi className="message-item">
            <div className="message-item__top">
                <div className="message-item__top__name">
                    {props.message.username}
                </div>
                <div className="message-item__top__time">
                    {props.message.time}
                </div>

            </div>
            <div className="message-item__text">
                {props.message.text}
            </div>
        </MessageItemLi>
    );
};

export default MessageItem;
