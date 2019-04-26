const Discord = require("discord.js");

module.exports.run = (client, message, args) => {


var aideM_embed = new Discord.RichEmbed()
       
             .setTitle("Liste des commandes de modération !")
             .setThumbnail(message.author.avatarURL)
             .addField("v!kick <user>", "permet de kick un utilisateur")
             .addField("v!ban <user>", "permet de ban un utilisateur")
             .addField("v!clear <un chifre entre 1 et 100", "permet de clear des messages celon le nombre que vous avez mis")
             .addField("v!mute <user> et le v!unmute", "permet de mute un utilisteur ou de le demute")
             .addField("v!warn <user> et le v!unwarn", /*"permet de warn ou de unwarn un utilisateur"*/"en Dev")
             .setColor('0xFF8000')
             .setFooter("VeVonia / page aide FR")
             .setTimestamp()
             message.channel.send(aideM_embed)

};

module.exports.help = {
    name: 'mod'
};