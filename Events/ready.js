
module.exports = (client) => {
    client.user.setActivity(`v!help / Guilds ${client.guilds.size}`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/gotaga"
      });
};