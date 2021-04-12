const Discord = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: 'cx',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW CX')
            .setAuthor('PAW Tech', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.cx)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 3', inline: true },
                { name: 'Color(s):', value: 'Pearl White', inline: true },
                { name: 'Low Power Mode:', value: 'Yes', inline: true },
                { name: '# of small motors:', value: '4', inline: true },
                { name: '# of medium motors:', value: '0', inline: true },
                { name: 'Current CarOS version:', value: '4.0.1', inline: true },
                { name: 'Price:', value: '31,901'},
                { name: 'Mass (kg):', value: '1952', inline: true},
                { name: 'Weight (lb):', value: '19149.12', inline: true},
		        { name: 'Release Date', value: '1/19/2021', inline: true}
            )
            .setFooter('PAW CX - Generation 3 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
