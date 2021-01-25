const Discord = require("discord.js")

exports.run = async (client, message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')

    message.delete()

    let TicketEmbed = new Discord.MessageEmbed()
    .setColor("#cd3")
    .setAuthor(" TICKET")
    .setDescription("\<a:carregando:783034654465982464> | Confirme a criação do seu ticket clicando na reação abaixo.")
    .setFooter("Farofa - Ticket")

    message.channel.send(TicketEmbed).then(async msg => {
        msg.react("🎟️")
    })
}

exports.help = {
    name: "ticket",
    aliases: []
}