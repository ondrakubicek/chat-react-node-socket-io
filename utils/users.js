
let users = [];

// Join user to chat
function userJoin(id, username, room) {
    const user = {
        id, username, room, image:
            'https://picsum.photos/35/'
    };
    console.log(`connect ${id}`);
    users.push(user);

    return user;
}

// Get current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
    const newUsers = users.filter(user => user.id !== id);
    users = newUsers;
}

// Get room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
};
