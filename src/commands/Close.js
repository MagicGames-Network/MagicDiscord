const {SlashCommandBuilder} = require("@discordjs/builders")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("close")
        .setDescription("Close Ticket"),
    async execute(interaction){
        const channelName = interaction.channel.name
            let strArray = channelName.split("-")
        let type = ""
            for(let i = 0; i < strArray.length; i++){
                type = strArray[0]
            }
            switch (type){
                case "general":
                case "discord":
                case "staff":
                    interaction.channel.delete()
                    interaction.reply("Ticket closed.")
                    break
                default:
                    interaction.reply("This is not a ticket channel.")
                    setTimeout(() => {
                        interaction.deleteReply()
                    },2000)
                    break
            }

    }
}