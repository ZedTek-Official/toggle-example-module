module.exports = {
	name: 'mute',
	execute(message, args) {
        const mentionedUser = message.mentions.members.first();
        const muted = '808377222884753459';
        if (!mentionedUser.roles.cache.has(muted)){
            mentionedUser.roles.add(muted);
            message.channel.send(`${mentionedUser} was muted.`);
        }
        else{
            message.channel.send('That user was already muted, silly goose.');
        }
		
	},
};