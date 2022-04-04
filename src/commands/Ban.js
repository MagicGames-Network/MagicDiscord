const {SlashCommandBuilder} = require("@discordjs/builders");
const {MessageEmbed} = require("discord.js");
const {PunishmentLogChannelID} = require("../../config.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Ban user")
        .addUserOption(option =>
        option.setRequired(true)
            .setName("user")
            .setDescription("Select a user")
        )
        .addStringOption(option =>
        option.setRequired(true)
            .setName("reason")
            .setDescription("Enter a reason")
        )
        .addIntegerOption(option =>
        option.setRequired(false)
            .setName("day")
            .setDescription("Enter a day")
        ),
    async execute(interaction){
        let user = interaction.options.getUser("user")
        let reason = interaction.options.getString("reason")
        let day = interaction.options.getInteger("day")
        await interaction.guild.members.cache.get(user.id).ban({
            days: day !== undefined ? day : undefined,
            reason: reason
        })
        let logEmbed = new MessageEmbed()
            .setTimestamp()
            .setFooter({
                text: `Staff ID: ${interaction.member.id} | User ID: ${user.id}`
            })
            .setAuthor({
                name: `Member Banned`,
                iconURL: user.avatarURL()
            })
            .setColor("#ff470f")
            .setDescription(`Staff: <@${interaction.member.id}>\nMember: <@${user.id}>\nReason: ${reason}`)
        await interaction.guild.channels.cache.get(PunishmentLogChannelID).send({embeds: [logEmbed]})
        await interaction.reply("Banned.")
    }
}