const {MessageDeleteLogChannelID} = require("../../config.json")
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "messageDelete",
    once: false,
    execute(client, message){
        if (!message || message.partial) return
        if (typeof message.author === "undefined" ) return
        if (message.author && message.author.bot === true) return
        if (message.channel && message.channel.type !== "GUILD_TEXT") return
        let embed = new MessageEmbed()
            .setFooter({
                text: `Author: ${message.author.id} | Message ID: ${message.id}`
            })
            .setTimestamp()
            .setAuthor({
                name: `${message.author.username}#${message.author.discriminator}`,
                iconURL: message.author.avatarURL()
            })
            .setColor("#337fd5")
            .setDescription(`**Message sent by** <@${message.author.id}> **deleted in** <#${message.channel.id}>\n${message.content}`)
        console.log(MessageDeleteLogChannelID)
        message.guild.channels.cache.get(MessageDeleteLogChannelID).send({embeds: [embed]})
    }
}