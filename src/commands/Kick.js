const {SlashCommandBuilder} = require("@discordjs/builders");
const {PunishmentLogChannelID} = require("../../config.json")
const {MessageEmbed} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kick user")
        .addUserOption(option =>
        option.setRequired(true)
            .setName("user")
            .setDescription("Select a user")
        )
        .addStringOption(option =>
        option.setRequired(true)
            .setName("reason")
            .setDescription("Enter a reason")
        ),
    async execute(interaction){
        let user = interaction.options.getUser("user")
        let reason = interaction.options.getString("reason")
        await interaction.guild.members.cache.get(user.id).kick(reason)
        let logEmbed = new MessageEmbed()
            .setTimestamp()
            .setFooter({
                text: `Staff ID: ${interaction.member.id} | User ID: ${user.id}`
            })
            .setAuthor({
                name: `Member Kicked`,
                iconURL: user.avatarURL()
            })
            .setColor("#ff470f")
            .setDescription(`Staff: <@${interaction.member.id}>\nMember: <@${user.id}>\nReason: ${reason}`)
        await interaction.guild.channels.cache.get(PunishmentLogChannelID).send({embeds: [logEmbed]})
        await interaction.reply("Kicked.")
    }
}