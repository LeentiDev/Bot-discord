const Discord = require('discord.js');

exports.run = (client, message, args) => { 
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')
    let afirm = ["Discordo", "Concordo", "Tem razão"]
    let rdm = Math.floor(Math.random() * afirm.length)
    if (args[0] == null || args[0] == undefined) return
    if (!args.join(" ").includes("?")) return message.channel.send(afirm[rdm])

    let resp = ["Acho que... Não?", "Talvez", "Não", "Nunca!", "Tenho certeza!", "Acho que... Sim?", "Possivelmente"]
    let random = Math.floor(Math.random() * resp.length)
    message.channel.send(resp[random])
}

exports.help = {
    name: 'pergunta',
    aliases: []
  }