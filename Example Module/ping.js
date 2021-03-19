const discord = require('discord.js');
module.exports = {
    name: "ping",
    execute(message, args) {
        message.channel.send('pong');
    },
};
