const Discord = require('discord.js');
module.exports = {
    name: 'caros-1',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW CarOS - Version 1')
            .setAuthor('PAW Motors', 'https://i.imgur.com/bbexXJF.png')
            .setDescription('Features in this version:')
            .addFields(
                { name: `App Icons:`, value: `no` },
                { name: `Control Center:`, value: `no` },
                { name: `PAW Maps:`, value: `yes` },
                { name: `Paw Weather app:`, value: `no` },
                { name: `Phone app:`, value: `no` },
                { name: `Settings app:`, value: `no` },
                { name: `Clock:`, value: `no` },
                { name: `Wallpapers:`, value: `no` },
                { name: `Pong:`, value: `no` },
                { name: 'Sport Dashboard:', value: 'no'},
            )
            .setFooter('PAW CarOS - Version 1 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};