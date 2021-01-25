const Discord = new require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
  if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')

  const { body } = await superagent.get(`https://nekos.life/api/v2/img/fox_girl`);

  let embed = new Discord.MessageEmbed()
    .setTitle(`❤ Fox Girl ❤`)
    .setDescription(`Auuuu! ${message.author} olhe as imagens de meninas lobo :3`)
    .setImage(body.url)
    .setFooter("Fox-Girl", client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();

  message.channel.send(embed);

}

exports.help = {
  name: "foxgirl",
  aliases: ["foxgirl"]
}