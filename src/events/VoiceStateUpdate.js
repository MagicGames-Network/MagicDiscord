const {VoiceLogChannelID} = require("../../config.json")
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "voiceStateUpdate",
    once: false,
    execute(client, oldMember, newMember) {
        let user = client.users.cache.get(oldMember.id);
        if (!oldMember.channelId && newMember.channelId) {
            let embed = new MessageEmbed()
                .setColor("#43b582")
                .setAuthor({
                    name: `${user.username}#${user.discriminator}`,
                    iconURL: user.avatarURL()
                })
                .setFooter({
                    text: `ID: ${user.id}`,
                    iconURL: undefined
                })
                .setTimestamp()
                .setDescription(`<@${user.id}> **joined voice channel** <#${newMember.channel.id}>`)
            newMember.guild.channels.cache.get(VoiceLogChannelID).send({embeds: [embed]})
        } else if (oldMember.channelId && !newMember.channelId) {
            let embed = new MessageEmbed()
                .setColor("#ff470f")
                .setAuthor({
                    name: `${user.username}#${user.discriminator}`,
                    iconURL: user.avatarURL()
                })
                .setFooter({
                    text: `ID: ${user.id}`,
                    iconURL: undefined
                })
                .setTimestamp()
                .setDescription(`<@${user.id}> **left voice channel** <#${oldMember.channel.id}>`)
            newMember.guild.channels.cache.get(VoiceLogChannelID).send({embeds: [embed]})
        } else if (oldMember.channelId && newMember.channelId && oldMember.channel && newMember.channel){
            if(oldMember.channelId !== newMember.channelId)
            if (newMember.channel) {
                let embed = new MessageEmbed()
                    .setColor("#43b582")
                    .setAuthor({
                        name: `${user.username}#${user.discriminator}`,
                        iconURL: user.avatarURL()
                    })
                    .setFooter({
                        text: `ID: ${user.id}`,
                        iconURL: undefined
                    })
                    .setTimestamp()
                    .setDescription(`<@${user.id}> **switched voice channel** \`#${oldMember.channel.name}\` **->** \`${newMember.channel.name}\``)
                newMember.guild.channels.cache.get(VoiceLogChannelID).send({embeds: [embed]})
            }
        }
    }
}