module.exports = {
	name: 'kick',
	execute(message, args) {
        const mentionedUser = message.mentions.members.first();
        message.channel.send(`${mentionedUser} was kicked.`);
        if (client.guild.me.hasPermission('MANAGE_USERS')){
            mentionedUser.kick();
        }
        else{
            message.channel.send('Whoops, look like I don\'t have that permission!');
        }
        mentionedUser.kick();
	},
};