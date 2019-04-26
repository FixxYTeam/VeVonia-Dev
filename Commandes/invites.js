const Discord = require("discord.js");
const arraySort = require('array-sort')
const table = require('table')

module.exports.run = (client, message, args) => {
    let invites = message.guild.fetchInvites();

    invites = invites.array();
    arraySort(invites, 'uses', {reverse: true});
    let possibleInvites = [['User', 'Uses']];
    invites.forEach(function(invite) {
      possibleInvites.push([invite.inviter.username, invite.uses]);
      
});

const embed = new Discord.MessageEmbed()
  .setColor('ORANGE')
  .setTitle('Leaderboard')
  .addField('Leaderboard', `\`\`\`${table.table(possibleInvites)}\`\``);
  message.channel.send(embed)


}

  module.exports.help = {
    name: 'invites'
};
