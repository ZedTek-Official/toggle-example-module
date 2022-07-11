const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans the specified user from the server')
        .addUserOption(option => option.setName('userToBan').setDescription('Mention a user to ban')),
	async execute(interaction) {
        await interaction.reply({ content: `${interaction.options.getMentionable('userToBan')} was banned.`, ephemeral: true })
        //interaction.options.getMentionable('userToBan').ban()
	},
}