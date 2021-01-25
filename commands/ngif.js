const Discord = new require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
  if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')

  const { body } = await superagent.get(`https://nekos.life/api/v2/img/ngif`);

  let embed = new Discord.MessageEmbed()
    .setTitle(`❤ Neko Gif ❤`)
    .setDescription(`Ownt! ${message.author} aqui a imagem que você deseja de uma Neko! `)
    .setImage(body.url)
    .setFooter("Neko GIF", client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();

  message.channel.send(embed);

}

exports.help = {
  name: "nekogif",
  aliases: ["nekogif", "ngif"]
}