const {SlashCommandBuilder} = require("@discordjs/builders")
const {MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu} = require("discord.js")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ticketsetup")
        .setDescription("Ticket Setup Command for Admins!"),
    async execute(interaction){
        let embed = new MessageEmbed()
            .setColor("#69e0a4")
            .addFields(
                {
                name: `**SUPPORT**\u200B`,
                value: `** **`
                },
                {
                    name: "** **",
                    value: "Do you have any questions about the server? Are you facing a problem with the server that you need help with? Then, please select the correct option in the menu down below, and a staff member will assist you as soon as possible. Do not ping the staff in your ticket. Doing so will lead to a punishment.\u200B"
                },
                {
                    name: "** **",
                    value: "\u200B"
                },
                {
                    name: `**NOTICE**\u200B`,
                    value: "** **"
                },
                {
                    name: "** **",
                    value: "We want to make it very clear that going forward if you are caught opening a ticket attempting fraud, you will be punished and potentially denied access to the ticket system all together. Please bare this in mind when opening a ticket!"
                }
                )
        let row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId("test")
                    .setPlaceholder("Select a reason")
                    .addOptions([
                        {
                            label: "General Support",
                            description: "To assist with any question or issue",
                            value: "general"
                        },
                        {
                            label: "Discord User Report",
                            description: "To report Discord rules-breakers",
                            value: "discord",

                        },
                        {
                            label: "Staff Reports",
                            description: "To report a Discord / In-Game staff member",
                            value: "staff"
                        }
                    ])

            )
        interaction.reply("Ticket channel successfully established.")
        interaction.client.guilds.cache.get("952994889413591100").channels.cache.get("952994889413591103").send({ephemeral: true, embeds: [embed], components: [row]})
    }
}