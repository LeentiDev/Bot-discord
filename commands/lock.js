const Discord = require('discord.js');
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Você não possuí permissão!")

  let everyone = message.guild.roles.cache.find(x => x.name === "@everyone");
  message.channel.updateOverwrite(everyone, {
                SEND_MESSAGES: false
              })

              message.channel.send(` \<:corantevermelho:745286344481439884> | O envio de mensagem desde canal foi desabilitado.`);
}

exports.help = {
    name: "lock",
    aliases: []
}