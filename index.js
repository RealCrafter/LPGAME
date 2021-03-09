const discord = require('discord.js');
const prefix = "lp:";
const client = new discord.Client();

client.on("message", message => {
  if (message.content === prefix + "help") {
    message.channel.send({
      embed: {
        title: "Command Dashboard für LpGames",
        description: "",
        color: "#239B56",
        fields: [
          { name: "ip von server", value: "lp:ip" },
          { name: "Link zun forum", value: "lp:forum"}
        
        ]
      }
    });
  }
});

client.on("message", message => {
  if (message.content === prefix + "ip") {
    message.channel.send({
      embed: {
        title: "IP und PORT",
        description: "",
        color: "#239B56",
        fields: [
          { name: "", value: "IP: lpgames.deinmc.de" },
        
        ]
      }
    });
  }
});

client.on("message", message => {
  if(message.content === prefix + "forum") {
    message.channel.send("Forum von unseren Server! ")
  }
})


client.login("");
