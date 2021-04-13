const Discord = require('discord.js');
const config = require('./config.json');
module.exports = {
    name: 'vehicle-vxxl',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW VXXL')
            .setAuthor('PAW Tech', 'https://i.imgur.com/bbexXJF.png')
            .setThumbnail(config.images.vxxl)
            .addFields(
                { name: 'Vehicle Type:', value: 'Electric', inline: true },
                { name: 'Current Generation:', value: 'Generation 2', inline: true },
                { name: 'Color(s):', value: 'Pearl White / Yellow', inline: true },
                { name: 'Special Editions:', value: 'School Edition', inline: true },
                { name: 'Low Power Mode:', value: 'No', inline: true },
                { name: '# of small motors:', value: '6', inline: true },
                { name: '# of medium motors:', value: '0', inline: true },
                { name: 'Current CarOS version:', value: '2', inline: true },
                { name: 'Price:', value: '127,134'},
                { name: 'Mass (kg):', value: '8649.5', inline: true},
                { name: 'Weight (lb):', value: '84851.595', inline: true},
		        { name: 'Release Date', value: '4/12/2020', inline: true}
            )
            .setFooter('PAW VXXL - Generation 2 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};
