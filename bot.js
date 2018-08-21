const Discord = require("discord.js");
const client = new Discord.Client();
const dateFormat = require('dateformat');
const ytdl = require('ytdl-core');
const request = require('request');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const fs = require('fs');
const moment = require('moment');

client.on('ready', async () => {
    console.log('I am ready!');

    client.user.setGame("Alpha Codes.", "https://www.twitch.tv/idk");
});

client.on('message' , message => {
  var prefix = "#";
  let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
  if(message.content.startsWith(prefix + 'unban')) {
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
  }
});

    client.on('message', message => {
    if (message.content === prefix + 'help') {
          let embed = new Discord.RichEmbed()
          .setThumbnail(client.displayAvatarURL)
          .setColor("#831af1")
          .setTitle("**List of a general commands...**\n")
          .addBlankField()
          .addField("TEST", "TEST")
          .addField("TEST", "TEST")
          .addField("TEST", "TEST")
          .addField("TEST", "TEST")
          .addField("TEST", "TEST")
          .addField("TEST", "TEST")
          .setFooter("page 1 of 2")
          message.channel.sendEmbed(embed).then(message => {
            message.react("🇬")
            message.react("🇲")
            message.react("🇫")
            message.react("🇦")

            let Ffilter = (reaction, user) => reaction.emoji.name('🇬');
            let Sfilter = (reaction, user) => reaction.emoji.name('🇲');
            let Tfitler = (reaction, user) => reaction.emoji.name('🇫');
            let FFilter = (reaction, user) => reaction.emoji.name('🇦');

            let Fcollect = message.createReactionCollector(Ffilter, { time: 120000 });

            Fcollect.on('collect', r =>{
              let embed = new Discord.RichEmbed()
              embed.setTitle("Test ^^")
              message.edit(embed)
            })
          });
    }
});


var prefix = "#"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("U don't have enough permissions to **Ban members** :lol:");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("I don't have enough permissions to **Ban members**.");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("Idk who 2 **ban** xd.");
  if(!reason) return message.reply("Type a **reason** plz.");
  if (!message.guild.member(user)
  .bannable) return message.reply("Connot ban this user.");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**Uesr:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

var prefix = "#"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("U don't have enough permissions to **Kick members** :lol:");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I don't have enough permissions to **Kick members**.");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("Idk who 2 **kick** xd.");
  if(!reason) return message.reply ("Type a **reason** plz.");
  if (!message.guild.member(user)
  .bannable) return message.reply("Connot ban this user.");

  message.guild.member(user).kick(user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

   client.on("message", async message => {

if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(/(?:https?:\/)?discord(?:app.com\/invite|.gg)/gi.test(message.content)) {
      message.delete().then(message.author.ban(7))

      return message.channel.send('<@${message.author.id}>, just **banned** for sharing a servers.');
  }
}
});

const adminprefix = "#";
const devs = ['426295568688611328', '431150885549113344'];
 

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
  if (message.content === (adminprefix + "Percie")) {
  message.guild.leave();        
} else  
if (message.content.startsWith(adminprefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(adminprefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else     
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Done :>`)
return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}
  if(message.content === adminprefix + "restart") {
    if (!devs.includes(message.author.id)) return;
        message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
      console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(`⚠️ Bot restarting... ⚠️`);
      console.log("===============================================\n\n");
      client.destroy();
      child_process.fork(__dirname + "/bot.js");
      console.log(`Bot Successfully Restarted`);
  }

});

client.on('message', message =>{
  var prefix = "#";
    if(message.author.bot) return;
    if(!message.content == (prefix+'clear'))
if(!true) return;
    if(message.content.split(' ')[0] == (prefix+'clear')){
    var lmt = message.content.split(' ')[1]
    ,  hang = 0
    ,  max  = 0;
    
    if(!lmt) lmt = 200;
    if(typeof lmt !== 'number') return;
    if(lmt > 100){
        for(;lmt > 100;){
        lmt--;
        hang++;
        }
        }
     message.channel.fetchMessages({limite:lmt}).then(msgs=>{
     msgs.channel.bulkDelete(msgs);
     });
     if(hang > 100){
         hang = 100;
     }
        message.channel.fetchMessages({limite:hang}).then(msgs=>{
        message.channel.bulkDelete(msgs);
     });
     
    max= hang+lmt;
    message.reply(` **Done, i have delete ${max} messages!**.`).catch(()=>{
        message.reply(` **Sorry, i can only bulk delete messages that are under 14 days old**.`)
    });
    }
}); 


client.on('message', async message =>{
  var prefix = "#";
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return;
if(!message.member.hasPermission('MANAGE_ROLES')) return message.reply("U don't have enough permissions to **Mute members** :lol:")
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I don't have enough permissions to **Mute members**.")
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
	if(command == "mute") {
  let user = message.mentions.users.first();
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Idk who 2 **mute** xd.")
    if(tomute.hasPermission("MANAGE_MESSAGES"))return;
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
  
    await(tomute.addRole(muterole.id));
    message.reply(`**${user.username}** has been muted.`);
  
  //end of module
  }

});
client.on('message', async message =>{
  var prefix = "#";
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return;
if(!message.member.hasPermission('MANAGE_ROLES'));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I don't have enough permissions to **Mute members**.")
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("U don't have enough permissions to **Unmute members** :lol:")

  let user = message.mentions.users.first();
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.reply("Idk who 2 **unmute** xd.");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.reply(`This user is already unmuted`)

  await toMute.removeRole(role)
  message.reply(`**${user.username}** has been unmuted.`);

  return;

  }

});

client.on('message', message => {
  var prefix = "#";

  if(message.content.startsWith(prefix + 'rename')) {
if(message.member.hasPermission("ADMINISTRATOR")) {
        let args = message.content.split(' ').slice(2);
var mentionned = message.mentions.users.first();
  
 if(!args){
   return message.channel.send(":x: " + `**| Please enter a new Nick for ${mentionned}**`);
 }
 if (!mentionned)return message.channel.send("**You Have to Mention A member :x:**")
 message.guild.member(mentionned).setNickname(args.join(" ")).then(user => message.channel.send(`:full_moon_with_face: ${mentionned}'s' **New NickName is **` + `__${args.join(" ")}__` + "!")).catch(console.error);
} else {
 return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission");
 }


   }
});





        client.on('message', message => {
          var prefix = "#";
          if(message.content.startsWith(prefix + 'move all')) {
           if (!message.member.hasPermission("MOVE_MEMBERS")) return message.reply("U can't.");
             if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("I can't");
          if (message.member.voiceChannel == null) return message.reply(`I can't find u in any voice channel!`)
           var author = message.member.voiceChannelID;
           var m = message.guild.members.filter(m=>m.voiceChannel)
           message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
           m.setVoiceChannel(author)
           })
           message.channel.send(`Moving the members to your voice channel...`)
          
          
           }
             });



client.on("message", message => {
    var prefix = "#";
    var args = message.content.split(' ').slice(1); 
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if( msg.toLowerCase().startsWith( prefix + 'removerole' ) ){
 if (!message.member.hasPermission("ADMINISTRATOR"))  return message.reply("**للأسف ليس لديك صلاحية `ADMINISTRATOR`**").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**I Don't Have `ADMINISTRATOR` Permission**").then(msg => msg.delete(6000));
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }   
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        } 
    } 
});


 
var prefix= "#";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'ct')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
     
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("I can't.")
      if (!nam) return message.channel.send(`<@${message.author.id}>, you should to insert a name.`);
      message.guild.createChannel(nam, 'text') // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`**${nam}**Channel, is ready ^^`);
    }
    });
 
var prefix= "#";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'cv2')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
     
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return;   
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("I can't")
      if (!nam) return message.channel.send(`<@${message.author.id}>, you should to insert a name.`);
      message.guild.createChannel(nam, 'voice')
      message.channel.send(`**${nam}**Channel, is ready ^^`);
    }
    });


    var prefix= "#";
    client.on("message", message => {
        if(message.content.startsWith(prefix + 'v')) {
         let args = message.content.split(" ").slice(1);
           var nam = args.join(' ');
         
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
          if (!nam) return message.channel.send(`<@${message.author.id}>, you should to insert a name.`)
          message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
          message.channel.send(`**${nam}**Channel, is ready ^^`).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  Voice channel just removed!`), 120000))  // 120000 دقيقتان
        }
        });

client.on('message', message => {
  var prefix = "#";
if(message.content === prefix + "muteall") {
             if(!message.channel.guild) return;

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('U can\'t');
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: false

}).then(() => {
    message.reply("Chat just closed!")

});
}
   


});
  client.on('message', message => {
    var prefix = "#";
if(message.content === prefix + "unmuteall") {
          if(!message.channel.guild) return;

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('U can\'t');
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: true

}).then(() => {
    message.reply("If u instant....")
});
  }
   


});

          client.on("message", (message) => {
            if (message.content.startsWith('#delet')) {
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("I can't").then(msg => msg.delete(6000))
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("U can't");
         
                let args = message.content.split(' ').slice(1);
                let channel = message.client.channels.find('name', args.join(' '));
                if (!channel) return message.reply('I can\'t find this channel.').catch(console.error);
                channel.delete()
            }
        });


 



client.login(process.env.BOT_TOKEN);
