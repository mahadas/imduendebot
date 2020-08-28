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
  if (command === "presente") {
     message.delete();
     var ahora = new Date();
     var minuto = ahora.getUTCMinutes();  
     var hora = ahora.getUTCHours() + 2;
     var segundo = ahora.getUTCSeconds();
     let mes = [`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];
     let suffix = [`st`,`nd`,`rd`];
     const darpresente = new Discord.RichEmbed()
     .setTitle("Presente:", 'https://i.imgur.com/FwiJzpS.png')
     .addField("Staff:", `  ${message.author}`)
     .addField("Hora:", `  ${hora}h:${minuto}m:${segundo}s - Hora España`)
     .addField("Dia:", `  ${ahora.getDate()} de ${mes[ahora.getMonth()]} de 2019 `)
     .setColor(3066993)
     .setThumbnail(message.author.avatarURL)
     .setFooter("IP: play.heavenmc.es", 'https://i.imgur.com/FwiJzpS.png');
     client.channels.get('621353649729306634').send(darpresente);
  }

});


client.login(process.env.BOT_TOKEN);
