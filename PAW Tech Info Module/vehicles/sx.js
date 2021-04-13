const Discord = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: 'vehicle-sx',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW SX')
            .setAuthor('PAW Tech', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.sx)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 4', inline: true },
                { name: 'Color(s):', value: 'Deep Red', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '6', inline: true },
                { name: '# of medium motors:', value: '0', inline: true },
                { name: 'Current CarOS version:', value: '3.0.2', inline: true },
                { name: 'Price:', value: '56,088'},
                { name: 'Mass (kg):', value: '3172.5', inline: true},
                { name: 'Weight (lb):', value: '31122.225', inline: true},
		        { name: 'Release Date', value: '10/5/2020', inline: true}
            )
            .setFooter('PAW SX - Generation 4 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
