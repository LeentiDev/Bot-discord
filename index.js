const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

  

const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");
const AntiSpam = require("discord-anti-spam");
const db = require("quick.db")
require ('dotenv').config();
const ms = require("ms")
const fs = require("fs")
let red = config.red
let green = config.green
let orange = config.orange
let purple = config.purple
const antiSpam = new AntiSpam({
  warnThreshold: 3, 
  kickThreshold: 6, 
  banThreshold: 7, 
  maxInterval: 2000,
  warnMessage: '{@user} Pare de Spammar o chat',
  kickMessage: '**{user_tag}** Foi Kickado Por Spam.',
  banMessage: '**{user_tag}** Foi Banido Por Spam.', 
  exemptPermissions: ['MANAGE_MESSAGES'],
  maxDuplicatesWarning: 2,
  maxDuplicatesKick: 3, 
  maxDuplicatesBan: 4,
  ignoreBots: false,
  ignoredUsers: [
    "487965837404274689",

  ],
});

client.on('message', (message) => antiSpam.message(message));

client.on('message', async (message) => {
    
    
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.guild) return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

    client.on('guildMemberAdd', membro => {
        var canal = client.channels.cache.get("753974403158769675");
        let embed = new Discord.MessageEmbed()
        
        .setTitle(`\<:notificacao:745286344615395428> | Farofa`) 
        .setDescription(`\<:nitro:745286345366306976> | Olá **${membro.user.tag}**, seja muito bem vindo(a) a **G-Force Community**!\n\nCaso precise de ajuda com plugins, skript, mapas, servidores e etc, você pode pedir nos canais de suporte.`) 
        .setThumbnail(membro.user.displayAvatarURL())
        .setColor('GREEN') 
        .setFooter('Farofa • © Todos os direitos reservados.')
        //.addField(`**SOBRE**`, `:busts_in_silhouette: Usuários: \`${membro.guild.memberCount}\`\n<:DL_github:693136690801410178> Repositório: [Discord-Lab](https://github.com/young-js) \n<:DL_twitter:693132106255040671> Twitter: [@Discord_Lab](https://twitter.com/Discord_Lab)`)
        
        canal.send(embed)
    });  
const cdseconds = 5;

client.on("messageReactionAdd", (reaction, user) => {
    if(user.bot) return;
    const message = reaction.message;

    if(
        ["780538038920675348", "780538243636396082"].includes(reaction.emoji.name)
    ) {
        switch(reaction.emoji.name) {

            case "780538038920675348":

            var TicketList = [
                "ticket-001",
                "ticket-002",
                "ticket-003",
                "ticket-004",
                "ticket-005",
                "ticket-006",
                "ticket-007",
                "ticket-008",
                "ticket-009",
                "ticket-010"
            ]

            let result = Math.floor((Math.random() * TicketList.length))

            let categoryID = "753974363602026583";

            var bool = false;

            if(bool == true) return;
           
            message.guild.channels.create(TicketList[result]).then(chan => {
               
              chan.setParent(categoryID);

                  chan.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    })
  
                    chan.updateOverwrite(message.guild.members.cache.get(user.id), {
                        SEND_MESSAGES: true,
                        ADD_REACTIONS: true,
                        ATTACH_FILES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    })
  
                    chan.updateOverwrite(message.guild.roles.cache.find(x => x.name === "❪🔥❫ Moderador ❪🔥❫"), {
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: true
                    })
              
                    chan.updateOverwrite(message.guild.roles.cache.find(s => s.name === "❪🎓❫ Ajudante ❪🎓❫"), {
                              VIEW_CHANNEL: true,
                              SEND_MESSAGES: true
                          })
  
                    chan.updateOverwrite(message.guild.members.cache.get(user.id), {
                        SEND_MESSAGES: true,
                        ADD_REACTIONS: true,
                        ATTACH_FILES: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    })

                  let embedTicketOpen = new Discord.MessageEmbed()
                  .setTitle("Ticket Suporte,")
                  .setColor("#cd3")
                  .setDescription("No ticket, você poderá conversar em particular com algum membro da equipe\nCom isso, você terá mais privacidade e poderá ficar a vontade!\n\nPara fechar um ticket, reaja em \<:assinatura_nao:780538243636396082>")
                  .setFooter("Farofa")

                  chan.send(embedTicketOpen).then( async msg => {
                      await msg.react("780538243636396082")
                  })
              })
          

            break;

            case "780538243636396082":

            message.channel.send("**O ticket será fechado em 10 segundos.**")

            setTimeout(() => {
                message.channel.delete()
            }, cdseconds * 1500)

            let embedTicketClose = new Discord.MessageEmbed()
            .setTitle(`O Ticket ${message.channel.name} foi fechado`)
            .setColor("#cd3")
            .setFooter("Farofa")

            break;
        }
    }
})

client.on("ready", () => {
    console.log("Estou online")
    
  let activities = [
    `Caso precise de ajuda: /ajuda`,
    `Eu sou um bot de zoeira também ein! xD`,
    `Você dentro da G-Force`,
    `Amor e carinho em todos da G-Force`,
  ],
  i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "PLAYING"
  }), 15000);
  client.user
  .setStatus("dnd")
})

client.login(config.token);
