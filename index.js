const { Client, IntentsBitField } = require("discord.js");
const { Flags } = IntentsBitField;
const client = new Client({intents: [Flags.GuildMessages, Flags.MessageContent]});

client.on("ready", () => {
    console.log("Ready!");
    client.guilds.cache.get("1014078637106016266").commands.set([
        {
            name: "ping",
            description: "Pong!"
        }
    ])
});

client.on("interactionCreate", (int) => {
    if(int.commandName === "ping"){
        int.reply(`Pong! (${client.ws.ping} ms)`);
    }
});

client.login(require("fs").readFileSync("token.txt").toString().trim());