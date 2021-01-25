const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const c = require('../config.json')

exports.run = (client, message, args) => {

  let erro = new Discord.MessageEmbed()

  .setTitle(`CLEAR`)
  .setDescription(`\<:errado1:773310989591904277> | Você precisa setar a quantidade de mensagems que será deletada!\n\<:errado1:773310989591904277> | Mensagems de 2 semanas atrás não poderão ser deletada.`)
  .setColor("#FF4040")
  .setFooter(`Autor: ${message.author.username}`)  

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`\<:alerta:770019341428457502> | Você precisa da permissão \`ADMINISTRADOR\`.`); // caso o autor não possua a permissão 'GERENCIAR_MENSAGENS', vamos avisar para ele
    let clean = args.slice(0).join(' '); // puxando uma quantidade de numero, partindo dos argumentos zero
 // caso o membro bote um numero menor que 2, ou maior que 100, pediremos um numero acima
    if (clean < 1 || clean > 100) return message.reply(erro)
    // caso o membro não escreva um numero
    if (args.length === 0) return message.reply(erro) 
    try { // utilizando a function 'try', traduzindo: tentar
    message.channel.bulkDelete(clean) // tentaremos deletar a quantia que o membro pediu
    // enviando uma embed
        let embed = new Discord.MessageEmbed()

        .setTitle(`\<:seta:745286344850276363> | LIMPAR CHAT`)
        .setDescription(`\<a:gr_correct:780538038920675348> | Foram limpos um total de \`${clean}\` mensagens.`)
        .setColor("#00FF00")
        .setFooter(`Autor: ${message.author.username}`)

        message.channel.send(embed)
    } catch(e){ // procurando um erro
        console.log(e); // caso consiga encontrar, daremos o erro
    }
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'clear',
    aliases: ['clear', 'limpar', 'limparchat', 'chatlimpar', 'clearchat', 'chatclear']
}
