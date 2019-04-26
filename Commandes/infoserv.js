const Discord = require('discord.js')
module.exports.run = (client, message, args) => {    


    let servIcon = message.guild.iconURL;
    let serv_embed = new Discord.RichEmbed()
    
    .setDescription("Informations sur le serveur")
    .setColor('ORANGE')
    .setThumbnail(servIcon)
    .addField("Nom de serveur", message.guild.name)
    .addField("Nombre total de membre", message.guild.memberCount)
    .addField("Créer le", message.guild.createdAt)
    .addField("Vous avez rejoint le", message.member.joinedAt);

    message.channel.send(serv_embed)
    
};

module.exports.help = {
    name: 'infoserv'
};