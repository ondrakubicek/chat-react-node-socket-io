import React, { Component } from 'react';
import styled from 'styled-components';
import Input from "../../shared/components/FormElements/Input";
import {VALIDATOR_REQUIRE} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
import {useForm} from "../../shared/hooks/form-hook";

const MessageFormForm = styled.form`
   display: block;
`;
const MessageForm = props => {
    const [formState, inputHandler, setFormData] = useForm(
        {
            message: {
                value: '',
                isValid: false
            },
        },
        false
    );

    const messageSubmitHandler = event => {
        event.preventDefault();
        const msg = formState.inputs.message.value;
        props.sendMessageHandler(msg);
    };

    return (
        <MessageFormForm className="message-form" onSubmit={messageSubmitHandler}>
            <Input
                element="input"
                id="message"
                type="text"
                validators={[VALIDATOR_REQUIRE()]}
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                Send
            </Button>
        </MessageFormForm>
    );
};

export default MessageForm;
