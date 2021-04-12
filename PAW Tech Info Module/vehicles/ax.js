const Discord = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: 'ax',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW AX')
            .setAuthor('PAW Motors', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.ax)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 1', inline: true },
                { name: 'Color(s):', value: 'Slate Gray', inline: true },
                { name: 'Low Power Mode:', value: 'Yes', inline: true },
                { name: '# of small motors:', value: '0', inline: true },
                { name: '# of medium motors:', value: '2', inline: true },
                { name: 'Current CarOS version:', value: '4.0.1', inline: true },
                { name: 'Price:', value: '67,970'},
                { name: 'Mass (kg):', value: '3074.5', inline: true},
                { name: 'Weight (lb):', value: '30160.845', inline: true},
		        { name: 'Release Date', value: '7/24/2020', inline: true}
            )
            .setFooter('PAW AX - Generation 1 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
