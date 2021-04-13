module.exports = {
	name: 'ban',
	execute(message, args) {
        const mentionedUser = message.mentions.members.first();
        message.channel.send(`${mentionedUser} was banned.`);
        mentionedUser.ban();
	},
};