const Discord = require('discord.js');
const ms = require("ms");
const c = require('../config.json')

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Você não possuí permissão!")
    let erro = new Discord.MessageEmbed()
        .setTitle(`❓ INFORMAÇÃO DO COMANDO`)
        .setDescription(`\`templock\` - Bloqueie salas de conversas por um tempo`)
        .addField(`:hammer: **Uso**`, `\`${c.prefix}templock tempo(s/m/h/d)\``)
        .addField(`:book: **Exemplo**`, `\`${c.prefix}templock 1m\``)
        .setColor('#8c0046')

        if (!args[0]) return message.channel.send(erro);
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
            return(erro);
        if (
            !args[0].endsWith("h") &&
            !args[0].endsWith("m") &&
            !args[0].endsWith("s")
          )
            return message.channel.send(
              `\<:alerta:770019341428457502> | Você precisa colocar um tempo válido!
              s = segundo(s)
              m = minuto(s)
              h = hora(s)
              d = dia(s)`
            );
        if (isNaN(args[0][0])) return message.channel.send(erro);

        message.channel.send(`🔒 | Chat bloqueado com sucesso por **${args[0]}**`)

        let everyone = message.guild.roles.cache.find(x => x.name === "@everyone");
        message.channel.updateOverwrite(everyone, {
            SEND_MESSAGES: false
          })

        setTimeout(() => {
            message.channel.updateOverwrite(everyone, {
                SEND_MESSAGES: true
              })

              message.channel.send(`🔓 | Chat desbloqueado com sucesso.`);
        }, ms(args[0]));
}

exports.help = {
    name: "templock",
    aliases: []
}