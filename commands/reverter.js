const Discord = require('discord.js')
const c = require ('../config.json')

exports.run = async (client,message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')
    if (!args[0]) return message.reply('\<:alerta:770019341428457502> | Você precisa inserir o texto para reverter!')

    const str = args.join(' ');
    let msg = await message.channel.send(str.split('').reverse().join(''));
    message.delete()
}

exports.help = {
    name: "reverter",
    aliases: []
}