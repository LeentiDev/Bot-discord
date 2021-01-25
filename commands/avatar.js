const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')
    let member = message.mentions.users.first() || message.author;

    let embed = new Discord.MessageEmbed()

    .setColor('#36393e')
    .setTitle(`🖼️ Avatar de ${member.username}`)
    .setDescription("**Clique [aqui](" + member.displayAvatarURL({format: 'png', dynamic: true, size: 1024}) + ") para baixar a imagem!**")
    .setImage(member.avatarURL({format: 'png', dynamic: true, size: 1024}))

    message.reply(embed)

}

exports.help = {
    name: 'avatar',
    aliases: []
}