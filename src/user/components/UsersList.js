import React from 'react';
import UserItem from "./UserItem";
import styled from "styled-components";

const UserListUl = styled.div`
    list-style: none;
    padding: 0;
    display: flex;
    flex-basis: 0;
    flex-direction: row-reverse;
    
    width: 100%; 
`;

const UsersList = props => {
    console.log(props.items);

    if (props.items.length === 0) {
        return (
            <h2>No users found.</h2>
        );
    }

    return (
        <UserListUl className="users-list">
            {props.items.map(user => (
                <UserItem
                    user={user}
                    key={user.id}
                />
            ))}
        </UserListUl>
    );
};
export default UsersList;
