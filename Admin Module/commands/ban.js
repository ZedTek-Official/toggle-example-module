const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans the specified user from the server'),
	async execute(interaction) {
        const mentionedUser = message.mentions.members.first()
        message.channel.send(`${mentionedUser} was banned.`)
        mentionedUser.ban()
	},
}