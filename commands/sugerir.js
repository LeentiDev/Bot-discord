const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')
            canal = client.channels.cache.get("775872064719814687");
            if (!canal) {
                message.reply(`Canal de Sugestões invalido.`)
            } else {
                message.channel.send(`Qual o titulo da Sugestão?`).then(msg => {
                    let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                    .on('collect', c => {
                        title = c.content
                   
                        message.channel.send(`Qual a mensagem dessa Sugestão`).then(msg3 => {
                            let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, {max: 1})
                            .on('collect', c => {
                                desc = c.content
                             
                                 message.channel.bulkDelete(5)
 
                                message.channel.send(`Sugestão enviado ao canal ${canal} com sucesso`)
 
                                let embed = new Discord.MessageEmbed()
 
                                .setColor('#f5a442')
                                .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 1024}))
                                .setFooter("Sugestão feita por: "+message.author.username, message.author.displayAvatarURL({dynamic: true, size: 32}))
                                .setTitle('➠ Nova Sugestão')
                                .setDescription(`Sugestão feita por:${message.author.tag}`)
                                .addField(`**${title}**`, `${desc}`)

                                canal.send(embed).then(sentEmbed => {
                                       sentEmbed.react("780538276611489833")
                                       sentEmbed.react("780538243636396082")
                                   })
                            })
                        })
                    })
                })
            }
        
    
 
}
 
