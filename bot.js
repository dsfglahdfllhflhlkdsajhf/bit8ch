const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "#";

client.on('ready', Ryu => {
  client.user.setGame("Alpha Codes.", "https://www.twitch.tv/idk");
  console.log(`${client.username}, is fking ready ^,^`);
});




client.on('message', message => {
  
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  
  if (message.channel.type === 'dm') return;
  
  if (!command.startsWith(prefix)) return;
let user = message.mentions.users.first();
let reason = message.content.split(" ").slice(2).join(" ");

  switch (command.slice(1).toLowerCase()) {

case "kick":
if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("U don't have enough permissions to **Kick members** :lol:");
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I don't have enough permissions to **Kick members**.");


if (message.mentions.users.size < 1) return message.reply("Idk who 2 **kick** xd.");
if(!reason) return message.reply ("Type a **reason** plz.");
if (!message.guild.member(user).bannable) return message.reply("Connot ban this user.");

message.guild.member(user).kick(user);

const banembed = new Discord.RichEmbed()
.setAuthor(`KICKED!`, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**Kicked User:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
message.channel.send({
embed : banembed
})

  break;

  case "ban":
  if(!message.channel.guild) return;

if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("U don't have enough permissions to **Ban members** :lol:");
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I don't have enough permissions to **Ban members**.");
/*let b5bzlog = client.channels.find("name", "5bz-log");

if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
if (message.mentions.users.size < 1) return message.reply("Idk who 2 **ban** xd.");
if(!reason) return message.reply("Type a **reason** plz.");
if (!message.guild.member(user)
.bannable) return message.reply("Connot ban this user.");

message.guild.member(user).ban(7, user)

.setAuthor(`BANNED!`, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**Banned Uesr:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
message.channel.send({
embed : banembed
})
    break;

case "unban":
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("U don't have enough permissions to **Unban members** :lol:");
if(!user) return  message.channel.send(`Cannot found the id **${message.content.substring(7)}**.`);
message.guild.unban(user);
var embed = new Discord.RichEmbed()
.setAuthor(`UNBANNED!`, user.displayAvatarURL)
.setColor("RANDOM")
.setTimestamp()
.addField("**Uesr:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
message.channel.sendEmbed(embed)

  
  break;

  case "mute":

  if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("U don't have enough permissions to **Mute members** :lol:")
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I don't have enough permissions to **Mute members**.")

      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("Idk who 2 **mute** xd.")
      if(tomute.hasPermission("MANAGE_MESSAGES"))return;
      let muterole = message.guild.roles.find(`name`, "muted");
      //start of create role
      if(!muterole){
        try{
          muterole = message.guild.createRole({
            name: "muted",
            color: "#000000",
            permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
            channel.overwritePermissions(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
            });
          });
        }catch(e){
          console.log(e.stack);
        }
      }
    
      (tomute.addRole(muterole.id));
      message.reply(`**${user.username}** has been muted.`);

    break;

    case "unmute":

    if(!message.member.hasPermission('MANAGE_ROLES'));
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I don't have enough permissions to **Mute members**.")

      if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("U don't have enough permissions to **Unmute members** :lol:")
    

      let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
      if(!toMute) return message.reply("Idk who 2 **unmute** xd.");
    
      let role = message.guild.roles.find (r => r.name === "muted");
      
      if(!role || !toMute.roles.has(role.id)) return message.reply(`This user is already unmuted`)
    
      await toMute.removeRole(role)
      message.reply(`**${user.username}** has been unmuted.`);
    
      return;
    

      break;

      case "muteall":
      
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('U can\'t');
      message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
      
      }).then(() => {
          message.reply("Chat has been closed!")
      
      });
        break;

        case "unmuteall":
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('U can\'t');
        message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
        
        }).then(() => {
            message.reply("Chat has been opened!")
        
        });
          break;
  }
});





NotVeryBot.login(process.env.BOT_TOKEN);
