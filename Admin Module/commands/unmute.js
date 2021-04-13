module.exports = {
	name: 'unmute',
	execute(message, args) {
        const mentionedUser = message.mentions.members.first();
        const muted = '808377222884753459';
        if (mentionedUser.roles.cache.has(muted)){
            mentionedUser.roles.remove(muted);
            message.channel.send(`${mentionedUser} was unmuted.`);
        }
        else{
            message.channel.send('That user wasn\'t muted in the first place, silly goose.');
        }
	},
};