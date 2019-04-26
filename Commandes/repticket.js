const Discord = require("discord.js");

module.exports.run = (client, message) => {
    let args = message.content.split(' ').slice(1).join(' ');

if(!args) return message.channel.send(`Veuillez inscrire les bugs trouvés`);

if(["@_everyone", "@_here"].some(ping => args.includes(ping))) return message.channel.send(`⚠ Les mentions @_everyone ou @_here sont désactivées !`);

message.channel.send(`Votre rapport de bug a été envoyé au staff de VeVonia, un helper viendras vous aidez ! Merci pour l'aide !`);

let embed = new Discord.RichEmbed()
.setColor('ORANGE')
.setTitle(`Réponse faq :`)
.setThumbnail(message.author.displayAvatarURL)
.addField(`Utilisateur :`, message.author.tag)
.addField(`Bug :`, `${args}`)
.setFooter(`FAQ`)
.setTimestamp()
client.guilds.get("566002158240268324").channels.find("id", "566212533829238789").send(embed);

}

module.exports.help = {
    name: 'support'
};