const {MessageEmbed} = require("discord.js")
const {MessageUpdateLogChannelID} = require("../../config.json")
module.exports = {
    name: "messageUpdate",
    once: false,
    execute(client, oldMessage, newMessage){
        let embed = new MessageEmbed()
            .setAuthor({
                name: `${oldMessage.author.username}#${oldMessage.author.discriminator}`,
                iconURL: oldMessage.author.avatarURL()
            })
            .setTimestamp()
            .setFooter({
                text: `User ID: ${oldMessage.author.id}`
            })
            .setColor("#337fd5")
            .setDescription(`**Message edited in** <#${oldMessage.channel.id}> [Jump to Message](${newMessage.url})\n\n**Before**\n${oldMessage.content}\n\n**After**\n${newMessage.content}`)
        oldMessage.guild.channels.cache.get(MessageUpdateLogChannelID).send({embeds: [embed]})
    }
}