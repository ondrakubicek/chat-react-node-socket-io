import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_REQUIRE} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
import {useForm} from "../../shared/hooks/form-hook";

const MessageFormForm = styled.form`
   display: flex;
   .messageInput {
        padding: 5px;
        /* margin-bottom: 5px; */
        border: 2px solid;
        border-right: 0px;
        border-color: darkseagreen;
        border-radius: 3px 0 0 3px;
        flex:1;
   }
   button {
       border-radius: 0px;
        width: 50px;
        padding: 10px;
        text-align: center;
        margin:0;
        border-radius: 0 3px 3px 0;
        svg {
            width: 20px;
        }   
   } 
   
`;

const sendIcon = <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>;

const MessageForm = props => {


    const messageSubmitHandler = event => {
        event.preventDefault();
        const message = event.target.message.value;
        if(message !== "") {
            props.sendMessageHandler(message);
            event.target.message.value = "";
        }
    };

    return (
        <MessageFormForm className="message-form" onSubmit={messageSubmitHandler}>
            <input
                element="input"
                id="message"
                type="text"
                className="messageInput"
            />

            <Button type="submit">
                {sendIcon}
            </Button>
        </MessageFormForm>
    );
};

export default MessageForm;
