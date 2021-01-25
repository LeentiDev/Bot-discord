const Discord = require('discord.js')
var Jimp = require("jimp")

exports.run = async (bot, message, args) => {
    if (message.channel.id !== '753974409332654171') return message.reply('você só pode usar comandos no canal de comandos!')

    if (message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send('\<:exclamacao:745286346641375283> | Você precisa digitar alguma coisa!')
    } else {
        if (message.content.split(' ').slice(1).join(' ').length > 50) {
            message.channel.send('\<:exclamacao:745286346641375283> | Você ultrapassou o limite de 50 caracteres')
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) {
                var authorMessage = message
                message.channel.send('\<:corantelaranja:745286344615526551> | Processando...').then(message => {
                    Jimp.read(`https://cdn.discordapp.com/attachments/538711394137407488/567123894956457984/tirinha_baby.png`, function (err, image) {
                        if (err) message.channel.send('\<:fechar:745286345361981482> | Ocorreu um erro ao criar a imagem.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                            image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
                            image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
                            var aguardeMessage = message
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                const attachment = new Discord.MessageAttachment(buffer, 'primeiraspalavras.png')
                                message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send('\<:fechar:745286345361981482> | Eu não tenho permissão para isto!')
            }
        }
    }
}

exports.help = {
    name: "firstword",
    aliases: ['firstword', 'primeiraspalavras']
}