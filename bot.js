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
     const exampleEmbed = new Discord.RichEmbed()
	    .setColor('#0099ff')
	    .setTitle('Add Jerseyetr')
	    .setURL('xxxxxx')
	    .setAuthor('Midnight Bot', 'image.png', 'https://xxxxxxxx.com')
	    .setDescription('')
	    .setThumbnail('imageFromGoogle.png')
	    .addField('How to Gain Access to the Server', '1. Go to the Rules Section and read the rules \n2. Add XXXX on Steam. Link above \n3. Download and install our mods. Check the #information Channel for info')
	    .addBlankField()
	    .addField('Mods download:', 'https://xxxxxxxxx', true)
	    .addField('how to install mods', 'https://xxxxxxx', true)
	    .addField('Vote for our Server', 'https://xxxxx', true)
	    .setImage('')
	    .setTimestamp()
	    .setFooter('Updated 5/20', 'https://imageFromGoogle.com');

channel.send(exampleEmbed);
  }

});


client.login(process.env.BOT_TOKEN);
