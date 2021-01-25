const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('\<:exclamacao:745286346641375283> | Cite um nick de minecraft')

    let embed = new Discord.MessageEmbed()

        .setTitle(`Cabeça de ${args[0]}`)
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp(new Date())
        .setColor('RANDOM')
    message.channel.send(embed)
}

exports.help = {
    name: 'mchead',
    aliases: ['mchead', 'cabeça', 'mccabeça']
}