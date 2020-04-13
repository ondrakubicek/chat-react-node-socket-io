const moment = require('moment');

function formatMessage(username, text) {
    return {
        id: Date.now(),
        username,
        text,
        time: moment().format('h:mm a')
    };
}

module.exports = formatMessage;
