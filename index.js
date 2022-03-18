// noinspection JSClosureCompilerSyntax

const Discord = require("discord.js");
const { Client, Intents} = require('discord.js');
const client = new Client({ intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_VOICE_STATES
    ], partials: [
        "MESSAGE",
        "CHANNEL",
        "GUILD_MEMBER"
    ]});

const { readdirSync } = require('fs');

client.slash = new Discord.Collection();

require('discord-logs')(client);

require('colors');


process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err}`);
});

process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err}`);
});

const commands = []

const commandFiles = readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./src/commands/${file}`);
    commands.push(command.data.toJSON());
}

require("./src/async/PostSlashCommand.js").post(commands).then()

for (const file of readdirSync("./src/events")){
    let eventFile = require("./src/events/"+file)
    if (eventFile.once){
        client.once(eventFile.name, (...args) => eventFile.execute(client,...args));
    }else{
        client.on(eventFile.name, (...args) => eventFile.execute(client,...args));
    }
}

client.login("OTUyOTU1Mjg1NzUwODI1MDcx.Yi9ixQ.DrAPAUOk0ndv9V5KnVGZ8bq-RSI").then();