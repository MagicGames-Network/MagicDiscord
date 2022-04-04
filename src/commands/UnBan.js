const {SlashCommandBuilder} = require("@discordjs/builders");
const {MessageEmbed} = require("discord.js");
const {PunishmentLogChannelID} = require("../../config.json");
module.exports = {
    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Unban user")
        .addStringOption(option =>
        option.setRequired(true)
            .setName("userid")
            .setDescription("Enter a user id")
        )
        .addStringOption(option =>
        option.setRequired(true)
            .setName("reason")
            .setDescription("Enter a reason")
        ),
    async execute(interaction){
       let userID = interaction.options.getString("userid")
        let reason = interaction.options.getString("reason")
        await interaction.guild.members.unban(userID,reason)
        await interaction.reply("Unbanned.")
        let logEmbed = new MessageEmbed()
            .setTimestamp()
            .setFooter({
                text: `Staff ID: ${interaction.member.id} | User ID: ${userID}`
            })
            .setAuthor({
                name: `Member Unbanned`
            })
            .setColor("#337fd5")
            .setDescription(`Staff: <@${interaction.member.id}>\nMember: <@${userID}>\nReason: ${reason}`)
        await interaction.guild.channels.cache.get(PunishmentLogChannelID).send({embeds: [logEmbed]})
    }

}