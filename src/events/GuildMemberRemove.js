const {MessageEmbed} = require("discord.js");
const {RemoveLogChannelID} = require("../../config.json")
module.exports = {
    name: "guildMemberRemove",
    once: false,
    execute(client,member){
        let everyoneEmbed = new MessageEmbed()
            .setAuthor({
                name: "Member Left",
                iconURL: member.user.avatarURL({
                    dynamic: true
                })
            })
            .setColor("#ff470f")
            .setTimestamp()
            .setFooter({
                text: `ID: ${member.id}`
            })
            .setThumbnail(member.user.avatarURL({
                dynamic: true
            }))
            .setDescription(`<@${member.id}> ${member.user.username}#${member.user.discriminator}\n**Roles**\n${member.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? member.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(', ') : `Empty`}`)
        member.guild.channels.cache.get(RemoveLogChannelID).send({embeds: [everyoneEmbed]})
    }
}