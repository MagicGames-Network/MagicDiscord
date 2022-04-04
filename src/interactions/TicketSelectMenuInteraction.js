const {Permissions, MessageEmbed, MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
    execute(client,interaction){
        switch (interaction.values[0]){
            case `general`:
                client.guilds.cache.get("952994889413591100").channels.create(`general-${interaction.user.username}`,{
                    type: "GUILD_TEXT",
                    permissionOverwrites: [
                        {
                            id: interaction.user.id,
                            allow: [`SEND_MESSAGES`,`VIEW_CHANNEL`]
                        },
                        {
                            id: "956947374004109423",
                            allow: [`SEND_MESSAGES`,`VIEW_CHANNEL`]
                        },
                        {
                            id: interaction.guild.id,
                            deny: [`VIEW_CHANNEL`]
                        },

                    ]
                }).then(channel => {
                    channel.setParent("954362989245505566",{
                        lockPermissions: false
                    })
                    channel.permissionOverwrites.edit(interaction.guild.roles.everyone,{
                        VIEW_CHANNEL: false
                    })
                    let embed = new MessageEmbed()
                        .setColor("#69e0a4")
                        .setAuthor({
                            name: "MagicGames Ticket System",
                            iconURL: client.user.avatarURL()
                        })
                        .setFooter({
                            text: "Powered By MagicGames",
                            iconURL: client.user.avatarURL()
                        })
                        .setTimestamp()
                        .addFields(
                            {
                                name: "**Our server stafs will contact you through this channel.**",
                                value: "** **",

                            },
                            {
                                name: "**Username:**",
                                value: `**${interaction.user.username}**`,
                                inline: true
                            },
                            {
                                name: "**Ticket Type:**",
                                value: "**General**",
                                inline: true
                            }
                        )
                    let row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId("closeTicket")
                                .setLabel("Close")
                                .setStyle("DANGER")
                                .setEmoji(`<:no:913714790935982131>`)
                        )

                    channel.send({ephermeal: true, embeds: [embed], components: [row]})
                    channel.send(`@everyone`)
                })
                interaction.reply("Ticket channel successfully created.")
                setTimeout(() => interaction.deleteReply(),1000)
                break
            case "staff":
                client.guilds.cache.get("952994889413591100").channels.create(`staff-${interaction.user.username}`,{
                    type: "GUILD_TEXT",
                    permissionOverwrites: [
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.SEND_MESSAGES]
                        }
                    ]
                }).then(channel => {
                    channel.setParent("954362989245505566",{
                        lockPermissions: false
                    })
                    let embed = new MessageEmbed()
                        .setColor("#69e0a4")
                        .setAuthor({
                            name: "MagicGames Ticket System",
                            iconURL: client.user.avatarURL()
                        })
                        .setFooter({
                            text: "Powered By MagicGames",
                            iconURL: client.user.avatarURL()
                        })
                        .setTimestamp()
                        .addFields(
                            {
                                name: "**Our server stafs will contact you through this channel.**",
                                value: "** **",

                            },
                            {
                                name: "**Username:**",
                                value: `**${interaction.user.username}**`,
                                inline: true
                            },
                            {
                                name: "**Ticket Type:**",
                                value: "**Staff Report**",
                                inline: true
                            }
                        )
                    let row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId("closeTicket")
                                .setLabel("Close")
                                .setStyle("DANGER")
                                .setEmoji(`<:no:913714790935982131>`)
                        )

                    channel.send({ephermeal: true, embeds: [embed], components: [row]})
                    channel.send(`@everyone`)
                })
                interaction.reply("Ticket channel successfully created.")
                setTimeout(() => interaction.deleteReply(),1000)
                break
            case "discord":
                client.guilds.cache.get("952994889413591100").channels.create(`discord-${interaction.user.username}`,{
                    type: "GUILD_TEXT",
                    permissionOverwrites: [
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.SEND_MESSAGES]
                        }
                    ]
                }).then(channel => {
                    channel.setParent("954362989245505566",{
                        lockPermissions: false
                    })
                    let embed = new MessageEmbed()
                        .setColor("#69e0a4")
                        .setAuthor({
                            name: "MagicGames Ticket System",
                            iconURL: client.user.avatarURL()
                        })
                        .setFooter({
                            text: "Powered By MagicGames",
                            iconURL: client.user.avatarURL()
                        })
                        .setTimestamp()
                        .addFields(
                            {
                                name: "**Our server stafs will contact you through this channel.**",
                                value: "** **",

                            },
                            {
                                name: "**Username:**",
                                value: `**${interaction.user.username}**`,
                                inline: true
                            },
                            {
                                name: "**Ticket Type:**",
                                value: "**Discord**",
                                inline: true
                            }
                        )

                    let row = new MessageActionRow()
                        .addComponents(
                            new MessageButton()
                                .setCustomId("closeTicket")
                                .setLabel("Close")
                                .setStyle("DANGER")
                                .setEmoji(`<:no:913714790935982131>`)
                        )

                    channel.send({ephermeal: true, embeds: [embed], components: [row]})
                    channel.send(`@everyone`)
                })
                interaction.reply("Ticket channel successfully created.")
                setTimeout(() => interaction.deleteReply(),1000)
                break
        }
    }
}