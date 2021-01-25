const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')

    var numero = Math.floor(Math.random() * 6) + 1;

    message.channel.send(`Você jogou o dado e... Caiu em: \`${numero}\``)
}

exports.help = {
    name: 'dado',
    aliases: []
}