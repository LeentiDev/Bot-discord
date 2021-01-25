const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
	const embed = new discord.RichEmbed()
  const guild = bot.guilds.get(args[0]) || message.guild;
  const ownerName = bot.users.get(guild.ownerID).username;
  
  const online = guild.members.filter(o => o.presence.status === "online").size;
  const offline = guild.members.filter(o => o.presence.status === "offline").size;
  const idle = guild.members.filter(o => o.presence.status === "idle").size;
  const afk = guild.members.filter(o => o.presence.status === "afk").size;
  const memberCount = message.guild.memberCount;
  
	let momento = moment.utc(guild.createdAt).format('LLLL').replace('January', 'Janeiro').replace('February', 'Fevereiro').replace('March', 'Março').replace('April', 'Abril').replace('May', 'Maio').replace('June', 'Junho').replace('July', 'Julho').replace('August', 'Agosto').replace('September', 'Setembro').replace('October', 'Outubro').replace('November', 'Novembro').replace('December', 'Dezembro').replace('Sunday', 'Domingo').replace('Monday', 'Segunda-Feira').replace('Tuesday', 'Terça-Feira').replace('Wednesday', 'Quarta-Feira').replace('Thursday', 'Quinta-Feira').replace('Friday', 'Sexta-Feira').replace('Saturday', 'Sábado');

  let serverRegion = {
		'amsterdam': ':flag_nl: Amsterdã',
		'brazil': ':flag_br: Brasil',
		'eu-central': ':flag_eu: Europa Central',
		'eu-west': ':flag_eu: Europa Ocidental',
		'frankfurt': ':flag_de: Frankfurt',
		'hongkong': ':flag_hk: Hong Kong',
		'japan': ':flag_jp: Japão',
		'london': ':flag_gb: Londres',
		'russia': ':flag_ru: Russia',
		'singapore': ':flag_sg: Singapura',
		'sydney': ':flag_au: Sydney',
		'us-central': ':flag_us: EUA Central',
		'us-east': ':flag_us: EUA Oriental',
		'us-west': ':flag_us: EUA Ocidental',
		'us-south': ':flag_us: EUA Sul',
	}[guild.region];

  const canaisCategoria = bot.guilds.get(guild.id).channels.filter(c => c.type === "category").size;
	const canaisText = bot.guilds.get(guild.id).channels.filter(c => c.type === "text").size;
	const canaisVoz = bot.guilds.get(guild.id).channels.filter(c => c.type === "voice").size;
  embed.setTitle(""+guild.name);
  embed.addField("👑", "Dono "+ownerName, true);//<a:coroaserver:753651286318252059
  embed.addField("🗒 Data de criação: ", `${momento}`, true);
  embed.addField(":map: Região ", serverRegion, true);
  embed.setThumbnail(guild.iconURL);
  embed.addField(":busts_in_silhouette: Membros", ` ${memberCount}`, true);
  embed.addField("🔮 Boosters", `Tem ${message.guild.premiumSubscriptionCount} Boosters`, true);
	embed.addField(":speech_balloon:Canais", `Categorias: ${canaisCategoria}\n:pencil:Text: ${canaisText}\n:speaking_head:Voz: ${canaisVoz}`, true);
  embed.addField("😂 Emojis:", `Tem ${message.guild.emojis.size} Emojis`, true);
  embed.addField("✔ Verificado: ", ` Servidor Não é Verificado`, true);
  embed.addField("🤖 Bots Totais:", `Tem ${message.guild.members.filter(m => m.user.bot).size} Bots!`, true);
	//embed.addField("Server Boosts", e.serverboosts+" "+guild.premiumSubscriptionCount, true);
  embed.addField(":computer:Id", guild.id, true);
	embed.setColor("White")
  
  message.channel.send(embed);
}
module.exports.help = {
	name: "serverinfo"
}