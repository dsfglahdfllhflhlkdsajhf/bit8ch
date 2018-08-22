const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "#";

client.on('ready', Ryu => {
  client.user.setGame("Alpha Codes.", "https://www.twitch.tv/idk");
  console.log(`${client.username}, is fking ready ^,^`);
});



client.on('message' , message => {
    var prefix = "#";
    if(message.content.startsWith(prefix + 'unban')) {
        let user;
        let messageArray = message.content.split(" ");
        if(message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else if(messageArray[1]) {
          user = messageArray[1];
        }
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("U don't have enough permissions to **Unban members** :lol:")
          if(!user) return;
          message.guild.unban(user);
          var embed = new Discord.RichEmbed()
          .setAuthor("UNBANNED!", user.displayAvatarURL)
          .setColor("RANDOM")
          .addField('Unbanned User..', `<@${user}>` , true)
          .addField('Unbanned By...' ,       ` <@${message.author.id}> ` , true)
          message.channel.sendEmbed(embed)

    }
  });


client.on('message', message => {
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	let prefix = "#";
	if (command === `${prefix}purge`) {
		if (isNaN(args[0])) return message.reply("Please Enter a number.");

		if (args[0] > 100) return message.reply("Thats too much man ._.");

		message.channel.bulkDelete(args[0]).then(message => message.channel.send(`Ok, removed ${message.content.split(6)} message. ^^`))
		
	}
});


client.on('message', async message =>{
  var prefix = "#";
const user = message.mentions.users.first();
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return;
var command = message.content.split(" ")[0];
if (!command.startsWith(prefix)) return;
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("U don't have enough permissions to **Unmute members** :lol:");

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Idk who 2 **mute** xd.")
    if(tomute.hasPermission("MANAGE_MESSAGES"))return;
    let muterole = message.guild.roles.find(`name`, "AlphaMute");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "AlphaMute",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            ATTACH_FILES: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }

    await(tomute.addRole(muterole.id))
    message.reply(`**${user.username}** has been muted.`)

  //end of module
  }

});


client.on('message', async message =>{
  var prefix = "#";
const user = message.mentions.users.first();
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return;
var command = message.content.split(" ")[0];
if (!command.startsWith(prefix)) return;
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return;
if(!message.member.hasPermission('MANAGE_ROLES'));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I don't have enough permissions to **Mute members**.")
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
if(command === `unmute`) {
if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("U don't have enough permissions to **Unmute members** :lol:");
  let user = message.mentions.users.first();
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.reply("Idk who 2 **unmute** xd.");

  let role = message.guild.roles.find (r => r.name === "AlphaMute");
  
  if(!role || !toMute.roles.has(role.id)) return message.reply(`This user is already unmuted`)

  await toMute.removeRole(role)
  message.reply(`**${user.username}** has been unmuted.`);

  return;

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
.addField("Kicked User..",  `<@${user.id}>`, true)
.addField("Kicked By...", `<@${message.author.id}>`, true)
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
.setColor("RANDOM")
.addField("Banned Uesr..",  `<@${user.id}>`, true)
.addField("Banned By...", `<@${message.author.id}>`, true)
message.channel.send({
embed : bbbbbb
})
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
