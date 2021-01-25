const Discord = require('discord.js');
var Jimp = require("jimp");

exports.run = async (client, message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.reply(`\<:exclamacao:745286346641375283> | Você precisa digitar alguma coisa!`) 
    } else { 
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.reply(`\<:exclamacao:745286346641375283> | Você ultrapassou o limite de 50 caracteres`)
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) { 
                var authorMessage = message
                message.channel.send('\<:corantelaranja:745286344615526551> | Processando...').then(message => { 

                    Jimp.read(`https://media.discordapp.net/attachments/689750456695914586/691077705071984710/295364123043211.png?width=540&height=482`, function (err, image) {
                        if (err) message.channel.send('\<:fechar:745286345361981482> | Ocorreu um erro ao criar a imagem.') 
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) { 
                            image.print(font, 23, 310, authorMessage.content.split(' ').slice(1).join(' '), 320) 
                            var aguardeMessage = message 
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => { 
                                const attachment = new Discord.MessageAttachment(buffer, 'laranjo.png') 
                                message.channel.send(attachment).then(message => { 
                                    aguardeMessage.delete() 
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send('\<:fechar:745286345361981482> | Eu não tenho permissão para isto!') // caso o bot nao possua permissao
            }
        }
    }
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'laranjo',
    aliases: []
}