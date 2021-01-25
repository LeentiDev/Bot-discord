const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Você não possuí permissão!")

    const say = new Discord.MessageEmbed()
    
    .setAuthor("\<:errado1:773310989591904277> | Sintaxe Incorreta")
    .setDescription(`\<:seta1:745286347723374672> Use: /falar [mensagem]`)
    .setThumbnail(bot.user.avatarURL)
    .setColor("BLACK")

    if(!args[0]) return message.channel.send(say)
    
    const sayMessage = args.join(" ");

    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);

}

exports.help = {
    name: "falar",
    aliases: ["say"]
}
