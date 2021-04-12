const Discord = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: 'scorpio_x',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW Scorpio X')
            .setAuthor('PAW Motors', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.scorpio_x)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 4', inline: true },
                { name: 'Color(s):', value: 'Space Gray', inline: true },
                { name: 'Low Power Mode:', value: 'Yes', inline: true },
                { name: '# of small motors:', value: '12', inline: true },
                { name: '# of medium motors:', value: '0', inline: true },
                { name: 'Current CarOS version:', value: '4.1', inline: true },
                { name: 'Price:', value: '58,122'},
                { name: 'Mass (kg):', value: '2746.5', inline: true},
                { name: 'Weight (lb):', value: '26943.165', inline: true},
		        { name: 'Release Date', value: '2/20/2021', inline: true}
            )
            .setFooter('PAW Scorpio X - Generation 4 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
