const Discord = new require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {
  if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')
  let membro2 = message.mentions.members.first();
  if (!membro2) return message.channel.send("Você não mencionou um membro");

  const { body } = await superagent.get(`https://nekos.life/api/v2/img/kiss`);

  let embed = new Discord.MessageEmbed()
    .setTitle(`🙆 Beijo 🙆`)
    .setDescription(`Awwn! ${message.author} deu um beijo em ${membro2} 🤗`)
    .setImage(body.url)
    .setFooter("Ownt :3", client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();

  message.channel.send(embed);
};

exports.help = {
  name: "beijo",
  aliases: ["beijar", "kiss"]
};
