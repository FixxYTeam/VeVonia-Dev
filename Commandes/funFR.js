const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    var aideF_embed = new Discord.RichEmbed()
           
                 .setTitle("Liste des commandes fun !")
                 .setThumbnail(message.author.avatarURL)
                 .addField("v!stats <user>", "permet d'avoir des informations sur un utilisateur (en développement)")
                 .addField("v!8ball <une question>", "pose des questions au bot et il te répondra")
                 .addField("v!infoserv", "donne des infos sur le serveur")
                 .setColor('0xFF8000')
                 .setFooter("VeVonia / page aide FR")
                 .setTimestamp()
                 message.channel.send(aideF_embed)

};

module.exports.help = {
    name: 'fun'
};