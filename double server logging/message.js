//Modules required
const colog = require('colog');
const { MessageEmbed } = require('discord.js');

//Date stuff
let date = new Date();

//makes them into stuff
let data = date.getDate() + '/' + `${date.getMonth() + 1 }`  + '/' + date.getFullYear();
let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

module.exports = {
	name: 'message',
	execute(message, guild) {

		//Embeds normal & special
		const normalEmbed = new MessageEmbed()
			.setColor('#1f1f1f')
			.setTitle(`${message.author.username}`)
			.setDescription(`${message.content}`)
			.setThumbnail(`${message.author.avatarURL()}`)
			.setFooter(`${data} at ${time} in #${message.channel.name}`, `https://cdn.discordapp.com/attachments/914218618781302874/921831079827112006/rendered.png`);

		const specialEmbed = new MessageEmbed()
			.setColor('#ffc23d')
			.setTitle(`[Creator] Zoey`)
			.setDescription(`${message.content}`)
			.setThumbnail(`${message.author.avatarURL()}`)
			.setFooter(`${data} at ${time} in #${message.channel.name}`, `https://cdn.discordapp.com/attachments/914218618781302874/921831079827112006/rendered.png`);

		if(message.channel.type === 'dm') return;
		//command stuff
		const channel = guild.channels.cache.find(channel => channel.name === `log-${message.guild.id}`) //finds the channel you want to log to
		channel.setTopic(`Logger for "${message.guild.name}"`)

		if(message.author.tag === 'Client#6644') return; //Prevents the bot from logging itself creating an infinite log loop
    if(message.author.tag === 'Zoey#8685') { //if user tag is Zoey#8685 then send special embed
  	colog.log(colog.backgroundWhite(colog.colorRed(`[${data}] [${time}] [#${message.channel.name}] [Creator Zoey] : ${message.content}`)))
		channel.send(specialEmbed)
  	} else {
  	colog.log(colog.backgroundWhite(colog.colorMagenta(`[${data}] [${time}] [#${message.channel.name}] [${message.author.username}] : ${message.content}`)))
		channel.send(normalEmbed)
    }
  }
}
