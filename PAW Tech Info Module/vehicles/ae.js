const Discord = require('discord.js');
const config = require('./config.json')
module.exports = {
    name: 'ae',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW AE')
            .setAuthor('PAW Tech', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.ae)
            .addFields(
                { name: 'Vehicle Type:', value: 'Hybrid', inline: true },
                { name: 'Current Generation:', value: 'Generation 2', inline: true },
                { name: 'Color(s):', value: 'Silver', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '6', inline: true },
                { name: '# of medium motors:', value: '0', inline: true },
                { name: 'Current CarOS version:', value: '3.0.2', inline: true },
                { name: 'Price:', value: '148,048'},
                { name: 'Mass (kg):', value: '9403.7', inline: true},
                { name: 'Weight (lb):', value: '92250.297', inline: true},
		        { name: 'Release Date', value: '1/4/2020', inline: true}
            )
            .setFooter('PAW AE - Generation 2 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
