module.exports = {
	name: 'kick',
	execute(message, args) {
        const mentionedUser = message.mentions.members.first();
        message.channel.send(`${mentionedUser} was kicked.`);
        mentionedUser.kick();
	},
};