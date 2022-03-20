const {MessageEmbed} = require("discord.js");
const {UnBanLogChannelID} = require("../../config.json");
module.exports = {
    name: "guildBanRemove",
    once: false,
    execute(client,guildBan){
        let embed = new MessageEmbed()
            .setAuthor({
                name: "Member Unbanned",
                iconURL: guildBan.user.avatarURL()
            })
            .setColor("#337fd5")
            .setThumbnail(guildBan.user.avatarURL())
            .setTimestamp()
            .setFooter({
                text: `ID: ${guildBan.user.id}`
            })
            .setDescription(`<@${guildBan.user.id}> ${guildBan.user.username}#${guildBan.user.discriminator}`)
        guildBan.guild.channels.cache.get(UnBanLogChannelID).send({embeds: [embed]})
    }
}