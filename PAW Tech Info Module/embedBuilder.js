const Discord = require('discord.js');
const config = require('./config.json');
const global = require('../../../global.json');
const prefix = global.prefix;

module.exports = { vehicleInfo }

function vehicleInfo(car){
    if (car === 'ae'){
        const embed = new Discord.MessageEmbed()
            .setTitle('PAW AE')
            .setColor('#ffffff')
            .setAuthor('PAW Tech', config.pawLogo)
            .setThumbnail(config.vehicles.ae.image)
            .addFields(
                { name: 'Vehicle Type:', value: config.vehicles.ae.vehicleType, inline: true },
                { name: 'Current Generation:', value: `Generation ${config.vehicles.ae.currentGen}`, inline: true },
                { name: 'Color(s):', value: config.vehicles.ae.colors, inline: true },
                { name: 'Low Power Mode:', value: config.vehicles.ae.lowPowerMode, inline: true },
                { name: '# of small motors:', value: config.vehicles.ae.smallMotorsAmt, inline: true },
                { name: '# of medium motors:', value: config.vehicles.ae.mediumMotorsAmt, inline: true },
                { name: 'Current CarOS version:', value: config.vehicles.ae.latestOS, inline: true },
                { name: 'Price:', value: config.vehicles.ae.price},
                { name: 'Mass (kg):', value: config.vehicles.ae.massKg, inline: true},
                { name: 'Weight (lb):', value: config.vehicles.ae.massLb, inline: true},
		        { name: 'Release Date', value: config.vehicles.ae.releaseDate, inline: true}
            )
            .setFooter(`PAW AE - Generation ${config.vehicles.ae.currentGen} - Stats`, config.pawLogo);
    }
}