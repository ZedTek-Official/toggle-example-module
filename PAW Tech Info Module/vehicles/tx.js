const Discord = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: 'tx',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW TX')
            .setAuthor('PAW Motors', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.tx)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 4', inline: true },
                { name: 'Color(s):', value: 'Silver', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '2', inline: true },
                { name: '# of medium motors:', value: '1', inline: true },
                { name: 'Current CarOS version:', value: '3.0.2', inline: true },
                { name: 'Price:', value: '68,744'},
                { name: 'Mass (kg):', value: '3987', inline: true},
                { name: 'Weight (lb):', value: '39112.47', inline: true},
		        { name: 'Release Date', value: '10/10/2020', inline: true}
            )
            .setFooter('PAW TX - Generation 4 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
