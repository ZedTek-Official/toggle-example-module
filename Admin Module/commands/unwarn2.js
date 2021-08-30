const config = require('./config.json')
module.exports = {
    name: 'unwarn',
    execute(message, args) {
        const warn1 = config.warnRoles.warning1;
        const warn2 = config.warnRoles.warning2;
        const warn3 = config.warnRoles.warning3;
        const mute = config.muteRole;
        const beenMuted = config.beenMutedRole;
        if (!message.mentions.users.first()) {
            message.channel.send('Whoops! You need to specify a person to warn!')
        }
        else {
            message.mentions.users.first().roles.remove(warn1)
            message.mentions.users.first().roles.remove(warn2)
            message.mentions.users.first().roles.remove(warn3)
        }
    },
};
