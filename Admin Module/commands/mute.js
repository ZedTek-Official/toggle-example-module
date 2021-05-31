const config = require('./config.json');
module.exports = {
	name: 'mute',
	execute(message, args) {
        const mentionedUser = message.mentions.members.first();
        const muted = config.muteRole;
        if (!mentionedUser.roles.cache.has(muted)){
            mentionedUser.roles.add(muted);
            message.channel.send(`${mentionedUser} was muted.`);
        }
        else{
            message.channel.send('That user was already muted, silly goose.');
        }
		
	},
};