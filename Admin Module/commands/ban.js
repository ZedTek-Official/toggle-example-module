const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans the specified user from the server')
        .addUserOption(option => option.setName('mentionable').setDescription('Mention a user to ban')),
	async execute(interaction) {
        await interaction.reply({ content: `${interaction.options.getMentionable('mentionable')} was banned.`, ephemeral: true })
        //interaction.options.getMentionable('userToBan').ban()
	}
}