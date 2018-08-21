const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "#";

client.on('ready', Ryu => {
  client.user.setGame("Alpha Codes.", "https://www.twitch.tv/idk");
  console.log(`${client.username}, is fking ready ^,^`);
});



client.on('message' , najzx => {
    var prefix = "#";
    let user = najzx.mentions.users.first()|| client.users.get(najzx.content.split(' ')[1])
    if(najzx.content.startsWith(prefix + 'unban')) {
        if(!najzx.member.hasPermission('ADMINISTRATOR')) return najzx.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  najzx.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        najzx.guild.unban(user);
        najzx.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${najzx.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(najzx.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**' ,       ` <@${najzx.author.id}> ` , true)
        .setAuthor(najzx.guild.name)
       .setFooter('Requested by '+najzx.author.username, najzx.author.avatarURL)
        najzx.channel.sendEmbed(embed)
    }
  });

client.on('message', message => {
  
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  
  if (message.channel.type === 'dm') return;
  
  if (!command.startsWith(prefix)) return;
  const user = message.mentions.users.first();
  const reason = message.content.split(" ").slice(2).join(" ");

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
let bbbbbb = new Discord.RichEmbed()
.setAuthor(`BANNED!`, user.displayAvatarURL)
.setThumbnail("https://thumbs.gfycat.com/HorribleNegligibleDuiker-size_restricted.gif")
.setColor("RANDOM")
.setTimestamp()
.addField("**Banned Uesr:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
message.channel.send({
embed : bbbbbb
})
    break;


  case "mute":

  if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("U don't have enough permissions to **Mute members** :lol:")
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I don't have enough permissions to **Mute members**.")

      let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tomute) return message.reply("Idk who 2 **mute** xd.")
      if(tomute.hasPermission("MANAGE_MESSAGES"))return;
      let muterole = message.guild.roles.find(`name`, "AlphaMute");
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
    
      toMute.removeRole(role)
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





client.login(process.env.BOT_TOKEN);
