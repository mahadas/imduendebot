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
	}
	if (command === prefix + 'ayuda') {
		message.channel.send({embed: {
			color: 10181046,
      	author: {
			name: "Aca te estoy ayudando en lo que necesites",
			icon_url: "https://i.imgur.com/Lote53F.jpg"
		},
		fields: [{
			name: ".Redes",
			value: "Aca puedes ver las redes sociales de ImDuende_"
		},
		{
			name: ".Conexion",
			value: "Ver conexion en el discord de ImDuende_"
		},
		],
		timestamp: new Date(),
		footer: {
		icon_url: client.user.avatarURL,
		text: "Diseñado por mahada#0641"
      }
    }


});






client.login(process.env.BOT_TOKEN);
