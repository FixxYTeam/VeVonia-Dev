module.exports.run = (client, message, args) => {
    if (message.author.id !== '385481545617637378') { message.channel.send('Uh, tu n\'es pas l\'owner du bot.'); }
    else {
        message.channel.send('Kill du process en cours...')
            .then(() => process.exit(0));
    }
};

module.exports.help = {
    name: 'stopbot'
};