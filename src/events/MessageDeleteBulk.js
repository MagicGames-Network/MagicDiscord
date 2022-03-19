const {MessageEmbed} = require("discord.js");
const {MessageDeleteBulkChannelID} = require("../../config.json")
module.exports = {
    name: "messageDeleteBulk",
    once: false,
    execute(client,messages){
        let embed = new MessageEmbed()
            .setTimestamp()
            .setAuthor({
                name: "MagicGames",
                iconURL: client.user.avatarURL()
            })
            .setColor("#337fd5")
            .setDescription(`**Bulk delete in** <#${messages.first().channel.id}>**, ${messages.size} **messages deleted**`)
        console.log(messages[0])
            messages.first().guild.channels.cache.get(MessageDeleteBulkChannelID).send({embeds: [embed]})
    }
}

