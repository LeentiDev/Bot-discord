const Discord = require('discord.js');
const superagent = require("superagent");

exports.run = async (client, message, args) => {

    const { body } = await superagent.get["https://nekos.life/api/v2/img/nsfw_neko_gif", "https://nekos.life/api/v2/img/Random_hentai_gif", "https://nekos.life/api/v2/img/lewd", "https://nekos.life/api/v2/img/boobs"]

    let embed = new Discord.MessageEmbed()
    .setTitle(`❤ NSFW ❤`)
    .setDescription(`+18! ${message.author} como você é safadinho(a) rsrs`)
    .setImage(body.url)
    .setFooter("Nsfw", client.user.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp();

    message.channel.send(embed);
}

exports.help = {
    name: 'nsfw',
    aliases: []
  }