const {JoinLogChannelID, JoinEveryoneLogChannelID} = require("../../config.json")
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "guildMemberAdd",
    once: false,
    execute(client,member){
        let currentDate = new Date()
        let everyoneEmbed = new MessageEmbed()
            .setAuthor({
                name: "Member Joined",
                iconURL: member.user.avatarURL({
                    dynamic: true
                })
            })
            .setColor("#43b582")
            .setTimestamp()
            .setFooter({
                text: `ID: ${member.id}`
            })
            .setThumbnail(member.user.avatarURL({
                dynamic: true
            }))
            .setDescription(`<@${member.id}> ${member.user.username}#${member.user.discriminator}\n\n**Account Age**\n${member.user.createdAt}`)
        member.guild.channels.cache.get(JoinLogChannelID).send({embeds: [everyoneEmbed]})
        member.guild.channels.cache.get(JoinEveryoneLogChannelID).send({embeds: [everyoneEmbed]})
    }
}