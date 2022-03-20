const {Routes} = require("discord-api-types/v9");
const {REST} = require("@discordjs/rest");
const rest = new REST({version: 9}).setToken("OTUyOTU1Mjg1NzUwODI1MDcx.Yi9ixQ.DrAPAUOk0ndv9V5KnVGZ8bq-RSI")
module.exports = {
    async post(commands) {
        try {
            console.log('[Discord API] Started refreshing application (/) commands.'.yellow);
            await rest.put(
                Routes.applicationGuildCommands("952955285750825071", "952994889413591100"),
                {body: commands},
            );
            console.log('[Discord API] Successfully reloaded application (/) commands.'.green);
        } catch (error) {
            console.error(error);
        }
    }
}