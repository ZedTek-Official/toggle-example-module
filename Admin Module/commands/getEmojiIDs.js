module.exports = {
	name: 'get_emoji_ids',
	execute(message) {
		const emojiList = message.guild.emojis.cache.map((e, x) => (x + ' = ' + e + '| Name: ' + e.name)).join('\n');
        try {
            console.log(`Emojis dumped from: ${message.guild}\n------------------`)
            console.log(`${emojiList}\n------------------`);
            message.channel.send(`A list of the emojis from this guild was just printed to the console.`)
        }
        catch(error){
            message.channel.send(`There was an error trying to print the emojis to the console.`)
        }
	},
};