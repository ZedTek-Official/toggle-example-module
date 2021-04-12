const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
    name: 'txl',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW TXL')
            .setAuthor('PAW Motors', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.txl)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 4', inline: true },
                { name: 'Color(s):', value: 'Silver', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '0', inline: true },
                { name: '# of medium motors:', value: '3', inline: true },
                { name: 'Current CarOS version:', value: '3.0.2', inline: true },
                { name: 'Price:', value: '156,227'},
                { name: 'Mass (kg):', value: '17750.5', inline: true},
                { name: 'Weight (lb):', value: '174132.405', inline: true},
		        { name: 'Release Date', value: '10/30/2020', inline: true}
            )
            .setFooter('PAW TXL - Generation 4 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
