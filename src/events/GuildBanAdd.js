const {BanLogChannelID} = require("../../config.json")
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "guildBanAdd",
    once: false,
    execute(client,guildBan){
        let embed = new MessageEmbed()
            .setAuthor({
                name: "Member Banned",
                iconURL: guildBan.user.avatarURL()
            })
            .setColor("#ff470f")
            .setThumbnail(guildBan.user.avatarURL())
            .setTimestamp()
            .setFooter({
                text: `ID: ${guildBan.user.id}`
            })
            .setDescription(`<@${guildBan.user.id}> ${guildBan.user.username}#${guildBan.user.discriminator}`)
        guildBan.guild.channels.cache.get(BanLogChannelID).send({embeds: [embed]})
    }
}