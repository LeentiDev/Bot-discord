const Discord = new require('discord.js')
const superagent = require('superagent')

exports.run = async (client, message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')
    let membro2 = message.mentions.members.first()
    if (!membro2) return message.channel.send('\<:exclamacao:745286346641375283> | Você não mencionou um membro');
  
  const {body} = await superagent
       .get(`https://nekos.life/api/v2/img/pat`)

    let embed = new Discord.MessageEmbed()
        .setTitle(`🥰 Cafuné 🥰`)
        .setDescription(`Awwn! ${message.author} deu um cafuné no ${membro2} 🥺`)
        .setImage(body.url)
        .setFooter('Pats pats pats :3', client.user.displayAvatarURL())
        .setColor('RANDOM')
        .setTimestamp()
        
    message.channel.send(embed);
}

exports.help = {
    name: "cafuné",
    aliases: ['cafuné', 'cafune', 'headpat', 'pat']
}