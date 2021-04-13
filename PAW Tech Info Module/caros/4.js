const Discord = require('discord.js');
module.exports = {
    name: 'caros-4',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW CarOS - Version 4')
            .setAuthor('PAW Tech', 'https://i.imgur.com/bbexXJF.png')
            .setDescription('Features in this version:')
            .addFields(
                { name: `App Icons:`, value: `yes` },
                { name: `Control Center:`, value: `yes` },
                { name: `PAW Maps:`, value: `yes` },
                { name: `Paw Weather app:`, value: `yes` },
                { name: `Phone app:`, value: `yes` },
                { name: `Settings app:`, value: `yes` },
                { name: `Clock:`, value: `yes` },
                { name: `Wallpapers:`, value: `yes` },
                { name: `Pong:`, value: `yes` },
                { name: 'Sport Dashboard:', value: 'no'},
            )
            .setFooter('PAW CarOS - Version 4 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};