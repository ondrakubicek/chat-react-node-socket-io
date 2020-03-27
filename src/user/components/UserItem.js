import React, {Component, useReducer} from 'react';
import Avatar from '../../shared/components/UIElements/Avatar';
import styled from 'styled-components';

const UserItemLi = styled.div`
    list-style: none;
    padding: 5px;
    display: flex;
    flex-basis: 0;
    flex-direction: column;
    
    .user-item__image {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: lightgray;
        img {
            width: 35px;
        }
    }
    
    .user-item__name {
        margin-top: 2px;
        font-size: 10px;
        text-align: center;
    }
`;

const UserItem = props => {
    return (
        <UserItemLi className="user-item">
            <div className="user-item__image">
                <Avatar image={props.user.image} alt={props.user.username} />
            </div>
            <div className="user-item__name">
                {props.user.username}
            </div>
        </UserItemLi>
    );
};

export default UserItem;
