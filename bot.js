const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "!"

client.on("ready", () => {
	client.user.setPresence({
       status: "online",
       game: {
           name: "!ayuda | ImDuende",
           url: "https://youtube.com/c/FacuJM",
           type: "STREAMING"
       }
   });
});



client.login(process.env.BOT_TOKEN);
