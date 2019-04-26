const Discord = require("discord.js");

module.exports.run = (client, message, args) => {


    const error_permissions = new Discord.RichEmbed()
          .setDescription(":false: Vous ne disposez pas les permissions nécessaires pour effectuer cette commande.")
          .setColor("#F43436")
    
    if(!message.member.hasPermission("ADMINISTRATOR")) { return message.channel.send(error_permissions); }
    let arg = message.content.split(" ").slice(1);
    let contenu = arg.join(" ");
    
    if (!args[0]) { return message.channel.send(":x: Votre syntaxe est incorrecte. Syntaxe : v!ean <Contenu>") }
    
    const annonce = new Discord.RichEmbed()
      .setAuthor("VeVonia | Annonce")
      .setColor("ORANGE")
      .addField(contenu ,"Annonces de "+message.author.username ,true)
      .setFooter("Bot | Annonce");
     message.channel.send("@everyone").then(msg => msg.delete(5));
    
     message.channel.send(annonce)
     message.delete();

};

module.exports.help = {
    name: 'ean'
};