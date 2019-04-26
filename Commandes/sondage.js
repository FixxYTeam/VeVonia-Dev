const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

    let question = message.content.split(" ").slice(1).join(" ");
    if(!question) return message.channel.send("merci de mettre une question pour le sondage");
    var sondage = new Discord.RichEmbed()
    .setTitle('SONDAGE')
    .addField(question, '✅ pour oui | ❌ pour non')
    .setColor('ORANGE')


    message.channel.send(sondage)
    .then(function(message) {
        message.react('✅')
        message.react('❌')
    })
     message.delete()
}
module.exports.help = {
    name: 'sondage',
    };