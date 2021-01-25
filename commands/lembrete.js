const Discord = require('discord.js'); // puxando a livraria Discord.js
const ms = require('ms'); // puxando o NPM ms *Instale utilizando: npm i ms

exports.run = async (client, message, args) => {
  if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')

  let Timer = args[0]; // os argumentos, no caso, o tempo (s, m ou h)

  if (!args[0]){ // caso ele não escreva, daremos o erro
    return message.reply(`\<a:atencao:755147577057476738> | Você precisa colocar um tempo válido!`);
  }

  if (args[0] <= 0){ // caso seja menor que zero
    return message.channel.send(`\<a:atencao:755147577057476738> | Você precisa colocar um tempo maior que zero!`);
  }

  message.channel.send("\<a:gr_correct:780538038920675348> | Irei te chamar em: " + `\`${ms(ms(Timer), {long: true})}\``)

  setTimeout(function(){ // caso termine o tempo, avisaremos o usuário
    message.channel.send(`\<a:sino:752989230610776094> | BIP BIP BIP! ${message.author}`)

  }, ms(Timer));
}

exports.help = { 
    name: 'lembrete',
    aliases: []
}