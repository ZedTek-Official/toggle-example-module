const config = require('./config.json')
module.exports = {
    name: 'warn',
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
            try {
                const mentionedUser = message.mentions.members.first();
                if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have the necessary permissions!');
                if (!mentionedUser) {
                    message.channel.send('You have to mention the person you want to assign the role to!');
                }
                if (mentionedUser.roles.cache.has(warn1)) {
                    if (mentionedUser.roles.cache.has(warn2)) {
                        if (mentionedUser.roles.cache.has(warn3)) {
                            if (mentionedUser.roles.cache.has(beenMuted)) {
                                message.guild.kick(mentionedUser);
                            }
                            else {
                                initMute()
                            }
                        }
                        else {
                            message.channel.send('Already has 2 warnings. Adding the 3rd (and final) warning.');
                            mentionedUser.roles.add(warn3);
                        }
                    }
                    else {
                        message.channel.send('Already has 1 warning. Adding another.');
                        mentionedUser.roles.add(warn2);
                    }
                }
                else {
                    mentionedUser.roles.add(warn1);
                    message.channel.send('Doesn\'t have any warnings. Adding the first.');
                }
            }
            catch (error) {
                message.channel.send('Whoops! I failed to execute that command.');
                console.error(error);
            }
            function initMute() {
                message.channel.send('Already had three warnings. Muting.');
                message.mentions.members.first().roles.add(mute);
                message.mentions.members.first().roles.add(beenMuted);
                message.mentions.members.first().roles.remove(warn1);
                message.mentions.members.first().roles.remove(warn2);
                message.mentions.members.first().roles.remove(warn3);
            }
        }
    },
};