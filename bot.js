const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"

client.on("ready", () => {
	client.user.setPresence({
       status: "online",
       game: {
           name: "!ayuda | ImDuende",
           url: "https://www.youtube.com/channel/UC6MP4GJim6NPPXm8V93JYcA",
           type: "STREAMING"
       }
   });
});


client.on("message", (message) => {
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if (command === 'conexion') {
		let ping = Math.floor(message.client.ping);
		message.channel.send({embed: {
				color: 7419530,
				description: `:satellite_orbital: Tu conexion es de ${ping} ms`
			}});
		return
	}

	if (command === 'ayuda') {
		const embed = new Discord.RichEmbed()
			.setAuthor('Aca tenes la ayuda necesaria', 'https://i.imgur.com/Lote53F.jpg')
			.addField('.Redes', 'Mira las redes sociales de ImDuende_')
			.addField('.Conexion', 'Mira tu conexion en el servidor')
			.setColor(0xff4d4d)
			.setTimestamp()
	message.channel.send({embed})
	return
	}




});






client.login(process.env.BOT_TOKEN);
