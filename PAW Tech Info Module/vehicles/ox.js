const Discord = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: 'ox',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW OX')
            .setAuthor('PAW Motors', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.ox)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 2', inline: true },
                { name: 'Color(s):', value: 'Slate Gray', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '6', inline: true },
                { name: '# of medium motors:', value: '0', inline: true },
                { name: 'Current CarOS version:', value: '2', inline: true },
                { name: 'Price:', value: '125,990'},
                { name: 'Mass (kg):', value: '7212', inline: true},
                { name: 'Weight (lb):', value: '70749.72', inline: true},
		        { name: 'Release Date', value: '5/26/2020', inline: true}
            )
            .setFooter('PAW OX - Generation 2 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
