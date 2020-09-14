const Discord = require('discord.js')
const client = new Discord.Client()
const axios = require('axios')
const fetch = require('node-fetch')
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
	if (message.content.startsWith(prefix + "mensaje")) {
		if (message.member.roles.get('748677376136708160')) {
			message.delete();
			let text = args.join(" ");
			message.channel.send(text);
		}
	}
	if (message.content.startsWith(prefix + "followage")) {
			let text = args.join(" ");		
			const url = "https://api.crunchprank.net/twitch/followage/brunenger/" + text + "?precision=3"
			fetch(url)
			.then(response => response.text())
			.then(data => {
				var embed = new Discord.RichEmbed()
				.setAuthor(`Datos de ${text}`,message.guild.iconURL) //<- optional
				.addField(`El usuario sigue a Brunenger hace`, data ,true)
				.setTimestamp()
				.setColor("#hexcode")
				.setFooter(`${message.author.tag}`, message.author.avatarURL)
				message.channel.sendEmbed(embed);							
			})

	}
	if (message.content.startsWith(prefix + "brunenger")) {
			let text = args.join(" ");		
			const url = "https://decapi.me/twitch/status?channel=" + text
			const url1 = "https://decapi.me/twitch/uptime?channel=" + text
			fetch(url)
			.then(response => response.text())
			.then(data => {
				var asd = data();
			})		
			fetch(url1)
			.then(response => response.text())
			.then(data => {
				var asd1 = data();
			})						
			var embed = new Discord.RichEmbed()
			.setAuthor(`Canal de brunenger`,message.guild.iconURL) //<- optional
			.addField(`Titulo Actual`, `${asd}` ,true)
			.addField(`Horas Strimeadas`, `${asd1}` ,true)
			.setTimestamp()
			.setColor("#hexcode")
			.setFooter(`${message.author.tag}`, message.author.avatarURL)
			message.channel.sendEmbed(embed);							


	}

	if (message.content.startsWith(prefix + "diapelicula")) {
		if (message.channel.id === '748690889710239884') {
			let text = args.join(" ");
			var fechapelicula = text();
	        message.channel.send('la pelicula se puso para el dia' + ` ${text}`);
	}
}
	if (message.content.startsWith(prefix + "divertido")) {		
		var embed = new Discord.RichEmbed()
		.setAuthor(`Che que divertido`,message.guild.iconURL) //<- optional
		.addField(`La verdad que esta re divertido el stream`, `espero que nunca acabe no ` + member.author.tag + '?' ,true)
		.setTimestamp()
		.setColor("#hexcode")
		.setFooter(`${message.author.tag}`, message.author.avatarURL)
		message.channel.sendEmbed(embed);	
	}
 b  ,	if (message.content.startsWith(prefix + "pelicula")) {
		let text = args.join(" ");
		message.delete()
		var embed = new Discord.RichEmbed()
		.setAuthor(`Datos de la nueva pelicula`,message.guild.iconURL) //<- optional
		.addField(`La nueva pelicula a ver sera`, `${text}` ,true)
		.addField(`La fecha sera`, `${fechapelicula}` ,true)
		.setTimestamp()
		.setColor("#hexcode")
		.setFooter(`${message.author.tag}`, message.author.avatarURL)
		message.channel.sendEmbed(embed);
	}

	if (message.content.startsWith(prefix + "invasion")) {

		message.delete();
		var ahora = new Date();	
		var minuto = ahora.getUTCMinutes();  
		var hora = ahora.getUTCHours() - 3;
		var segundo = ahora.getUTCSeconds();		
		var embed = new Discord.RichEmbed()
		.setAuthor('Proxima Invasion',message.guild.iconURL) //<- optional
		.addField(`Dia ${diainvasion}`,`a las 16:00hs Argentina`,true)
		.addField(`Hora Actual`,`${hora}h:${minuto}m:${segundo}s ARG`,true)
		.setTimestamp()
		.setColor("#hexcode")
		.setFooter(`${message.author.tag}`, message.author.avatarURL)
		message.channel.sendEmbed(embed);
		return

	}


	if (message.content.startsWith(prefix + "diainvasion")) {
		if (message.channel.id === '748690889710239884') {
			let text = args.join(" ");
			var diainvasion = text();
	        message.channel.send('el dia de invasion se cambio a' + ` ${text}`);
	}


	}

});




client.login(process.env.BOT_TOKEN);
