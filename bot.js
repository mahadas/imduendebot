const Discord = require('discord.js')
const client = new Discord.Client()

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
	
	if (command === 'pene') {
		var ahora = new Date();	
		var embed = new Discord.RichEmbed()
		.setAuthor('Proxima Invasion',message.guild.iconURL) //<- optional
		.addField(`Dia 28/08/2020`,`a las 16:00hs Argentina`,true)
		.addField(`Hora Actual`,`${ahora}`,true)
		.setTimestamp()
		.setColor("#hexcode")
		.setFooter(`${message.author.tag}`, message.author.avatarURL)
		message.channel.sendEmbed(embed);
	}
});


client.login(process.env.BOT_TOKEN);
