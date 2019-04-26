const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) => {
    if (message.channel.type === "dm") return message.channel.send(":lock: Cette commande ne fonctionne pas en message privé !");
    var temps = moment(message.createdTimestamp).format("LLLL");
    let member = message.mentions.members.first() || message.member;
    let embed = new Discord.RichEmbed()
           .setColor('ORANGE')
           .setThumbnail(member.user.avatarURL) 
           .addField('👤 Pseudo', member.user.username, true)
           .addField('🆔 ID', member.id, true)
           .addField('#⃣ Tag',  `#${member.user.discriminator}`, true)
           .addField('🤖 Type', member.user.bot ? 'Bot' : 'Humain', true)
           .addField('🎮 Jeu', member.user.presence.game ? member.user.presence.game.name : 'Aucun jeux', true)
           .addField('📅 Arrivé sur le serveur', moment(message.guild.members.get(member.id).joinedAt).format("LL"), true)
           .addField('📅 Compte discord crée le', moment(member.user.createdAt).format("LL"), true)
           message.channel.send(embed)
};

module.exports.help = {
    name: 'stats'
};