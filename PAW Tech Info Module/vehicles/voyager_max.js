const Discord = require('discord.js');
const config = require('../config.json');
module.exports = {
    name: 'vxl',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW Voyager Max')
            .setAuthor('PAW Motors', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.vxl)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 4', inline: true },
                { name: 'Color(s):', value: 'Deep Red', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '4', inline: true },
                { name: '# of medium motors:', value: '0', inline: true },
                { name: 'Current CarOS version:', value: '3.0.2', inline: true },
                { name: 'Price:', value: '63,136'},
                { name: 'Mass (kg):', value: '3165.5', inline: true},
                { name: 'Weight (lb):', value: '31053.555', inline: true},
		        { name: 'Release Date', value: '10/18/2020', inline: true}
            )
            .setFooter('PAW Voyager Max - Generation 4 - Stats', 'https://i.imgur.com/bbexXJF.png')
        
        message.channel.send(exampleEmbed);
	},
};
