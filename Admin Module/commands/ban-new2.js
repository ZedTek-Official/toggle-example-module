const { SlashCommandBuilder } = require('@discordjs/builders')
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans the specified user from the server')
        .addUserOption(option => option.setName('user').setDescription('Mention a user to ban')),
	async execute(interaction) {
        if(message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)){
            await interaction.reply({ content: `${interaction.options.getUser('user')} was banned.`, ephemeral: true })
            interaction.options.getMentionable('userToBan').ban()
        }
	}
}