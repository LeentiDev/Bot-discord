const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')

    let embed = new Discord.MessageEmbed()
    .setColor([28, 255, 103])
    .setAuthor("Informação do Bot") // message.author.avatarURL - Pegar do usuário que digitou o cmd
    .setDescription("\<:seta:745286344850276363> **Meu criador:** \n uGabrielDemon#2020")
    .addField(":desktop: Servidores", + client.guilds.cache.size, true)
    .addField(":joystick: Usuários", + client.users.cache.size, true)
    .addField(":page_facing_up: Canais", + client.channels.cache.size, true)
    .addField(":wrench: Versão do bot", "1.0", true)
    .addField(":flag_br: País", "Brasil", true)
    .addField(":books: Tipo", "Discord.js - v12", true)
    .setFooter(client.user.username, client.user.displayAvatarURL()) // para pegar o bot name: client.user.username
    // sendo message.author | client.user / pega o id do author e o id do bot
    .setTimestamp();
    
    message.channel.send(embed);
}

exports.help = {
  name: 'botinfo',
  aliases: ['botinfo', 'bot']
}