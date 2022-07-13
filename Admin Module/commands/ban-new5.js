const { SlashCommandBuilder } = require('@discordjs/builders')
const { Permissions } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans the specified user from the server')
        .addUserOption(option => option.setName('user').setDescription('Mention a user to ban')),
	async execute(interaction) {
        // if (interaction.user.permissions.has([Permissions.FLAGS.KICK_MEMBERS, Permissions.FLAGS.BAN_MEMBERS])) {        
            await interaction.reply({ content: `${interaction.options.getUser('user')} was banned.`, ephemeral: true })
            console.log(interaction.user.permissions)
            // interaction.options.getMentionable('userToBan').ban()
        // } 
	}
} 