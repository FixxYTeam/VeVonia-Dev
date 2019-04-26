const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    var aideF_embed = new Discord.RichEmbed()
           
                 .setTitle("Liste des commandes fun !")
                 .setThumbnail(message.author.avatarURL)
                 .addField("En dev")
                 .setColor('ORANGE')
                 .setFooter("VeVonia / page aide FR")
                 .setTimestamp()
                 message.channel.send(aideF_embed)

};

module.exports.help = {
    name: 'funfr'
};