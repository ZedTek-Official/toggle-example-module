const Discord = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: 'tx_max',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW TX MAX')
            .setAuthor('PAW Tech', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.tx_max)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 1', inline: true },
                { name: 'Color(s):', value: 'Silver', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '0', inline: true },
                { name: '# of medium motors:', value: '2', inline: true },
                { name: 'Current CarOS version:', value: '3.0.2', inline: true },
                { name: 'Price:', value: '72,964'},
                { name: 'Mass (kg):', value: '4717.5', inline: true},
                { name: 'Weight (lb):', value: '46278.675', inline: true},
		        { name: 'Release Date', value: '10/10/2020', inline: true}
            )
            .setFooter('PAW TX MAX - Generation 1 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
