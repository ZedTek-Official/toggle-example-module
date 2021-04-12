const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
    name: 'lx',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW LX')
            .setAuthor('PAW Motors', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.lx)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 4', inline: true },
                { name: 'Color(s):', value: 'Royal Green', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '4', inline: true },
                { name: '# of medium motors:', value: '0', inline: true },
                { name: 'Current CarOS version:', value: '3.0.2', inline: true },
                { name: 'Price:', value: '67,602'},
                { name: 'Mass (kg):', value: '4069.5', inline: true},
                { name: 'Weight (lb):', value: '39921.795', inline: true},
		        { name: 'Release Date', value: '9/11/2020', inline: true}
            )
            .setFooter('PAW LX - Generation 4 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
