const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "+"

client.on("ready", () => {
	client.user.setPresence({
       status: "online",
       game: {
           name: "+ayuda | Brunenger",
           url: "https://www.twitch.tv/Brunenger",
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
		return;
	}
	if (command === 'invasion') {
	     message.delete();
		var ahora = new Date();
		const embed = new Discord.RichEmbed()
			.addField('Mañana: 16 Hora Argentina', '[  Click para redirigirse al canal de brunenger](https://www.twitch.tv/brunenger)')
			.addField(' ')
			.addField('Tiempo Actual: ${hora}h:${minuto}m:${segundo}s')
			.setColor(15158332)		
			.setTimestamp()
			.setFooter("Desarrollado por mahada#0641")		
	message.channel.send({embed})
	return;

	}	
	if (command === 'pene') {
		var embed = new Discord.RichEmbed()
		.setAuthor('Song Queue',message.guild.iconURL) //<- optional
		.addField(`Song Queue`,`z<asd`,true)
		.addField(`Now Playing`,`asd`,true)
		.setTimestamp()
		.setColor("#hexcode")
		.setFooter(`${message.author.tag}`, message.author.avatarURL)
		message.channel.sendEmbed(embed);

	}
});


client.login(process.env.BOT_TOKEN);
