const Discord = require('discord.js');

exports.run = (client, message, args) => { 
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')
    
    let resp = [":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Chifres**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Um(a) namorado(a)**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Nada**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **1 dia de sorte**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **Comida no iFood**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **um beijo**", ":package: | **CAIXA MISTERIOSA**\n\<:NameTag:766086879837421599> Você abriu uma caixa e ganhou: **um toddyn**", ":package: | **CAIXA MISTERIOSA**\n\<:EmojiFesta:782413178478133259> **Parabéns!** Você encontrou um item lendário: **__O cu do @Ninja_Dark99__**"]
    let random = Math.floor(Math.random() * resp.length)
    message.channel.send(resp[random])
}

exports.help = {
    name: 'abrircaixa',
    aliases: ["caixamisteriosa", "caixaabrir"]
  }
