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

    client.user.setPresence({ game: { name: 'Alpha', type: 2 } });
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
        var sicon = message.author.displayAvatarURL
        var adminHelp = new Discord.RichEmbed()
        .setTitle("**The command is under developement**\n")
	.setColor("#37303d")
        message.delete().catch(O_o=>{});
        message.channel.send("**Check your DMs...**").then(message =>{message.delete(10000)})
        message.author.sendEmbed(adminHelp)
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
    message.reply(`<@${tomute.id}> has been muted.`);
  
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


  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.reply("Idk who 2 **unmute** xd.");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.reply(`This user is already unmuted`)

  await toMute.removeRole(role)
  message.reply(`<@${toMute.id}> has been unmuted.`);

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
      if(message.content.startsWith(prefix + 'mutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(true);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });
  client.on('message', message => {
    var prefix = "#";
    if(message.content.startsWith(prefix + 'unmutevoice')) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**:x: ").then(m => m.delete(5000));
      if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
       
    if(message.mentions.users.size === 0) {
      return message.reply("Please mention a user to mute.");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if(!muteMember) {
      return message.reply("Try again.");
    }
    muteMember.setMute(false);
    if(muteMember) {
      message.channel.sendMessage("User muted successfully.");
    }
  }
});
 

    client.on('message', message => {
        if(!message.channel.guild) return;
        var prefix = "#";
    if(message.content.startsWith(prefix + 'move')) {
        var cmdrole = message.guild.roles.find("name", config.cmdrole)
           if (message.member.hasPermission("MOVE_MEMBERS")) {
if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**I Don't Have `MOVE_MEMBERS` Permission**").then(msg => msg.delete(6000))
                  if (message.mentions.users.size === 0) {
                         return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
                  }
                  if (message.member.voiceChannel != null) {
                         if (message.mentions.members.first().voiceChannel != null) {
                                var authorchannel = message.member.voiceChannelID;
                                var usermentioned = message.mentions.members.first().id;
                               var embed = new Discord.RichEmbed()
                                  .setTitle("Succes!")
                                  .setColor("#000000")
                                  .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
                                var embed = new Discord.RichEmbed()
                                  .setTitle(`You are Moved in ${message.guild.name}`)
                                  .setColor("#000000")
                                  .setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
                                                              message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                                message.guild.members.get(usermentioned).send(embed)
                         } else {
                                message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
                         }
                  } else {
                         message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
                  }
           } else {
                  message.react("❌")
           }
        }
        });

        client.on('message', message => {
          var prefix = "#";
          if(message.content.startsWith(prefix + 'move all')) {
           if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
             if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
          if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
           var author = message.member.voiceChannelID;
           var m = message.guild.members.filter(m=>m.voiceChannel)
           message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
           m.setVoiceChannel(author)
           })
           message.channel.send(`**تم سحب جميع الأعضاء إليك**`)
          
          
           }
             });

client.on("message", message => {
    var prefix = "#";
    const command = message.content.split(" ")[0];
 
    if(command == prefix+"voicekick"){
 
        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }
 
        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }
 
    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
 message.reply(' has been successfullly kicked from voice.');
     
      });
     });
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

    client.on('message', message => {
      var prefix = "#";
      if(message.content.startsWith(prefix + 'deafen')) {
    if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
      return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
    }
    if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
      return message.reply('للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x:').catch(console.error);
    }
   
    const deafenMember = (member) => {
      if (!member || !member.voiceChannel) return;
      if (member.serverDeaf) return message.channel.send(`${member} **لديه ديفن بالفعل**:x:`);
      member.setDeaf(true).catch(console.error);
      if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
    };
   
    message.mentions.users.forEach(user => deafenMember(message.guild.member(user)));
    message.mentions.roles.forEach(role => role.members.forEach(member => deafenMember(member)));
      }
      
  });  
   
  client.on('message', async message =>{
    var prefix = "#";
    if(message.content.startsWith(prefix + 'undeafen')) {
   
  if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
    return message.reply('**يجب عليك المنشن اولاّ**:x:').catch(console.error);
  }
  if (!message.guild.member(client.user).hasPermission('DEAFEN_MEMBERS')) {
    return message.reply('**للأسف البوت لا يمتلك صلاحيات لتنفيذ هذه الأمر**:x: ').catch(console.error);
    if(!message.member.hasPermission("DEAFEN_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ديفن **:x: ").then(m => m.delete(5000));
  }
   
  const undeafenMember = (member) => {
    if (!member || !member.voiceChannel) return;
    if (!member.serverDeaf) return message.channel.send(`${member} `);
    member.setDeaf(false).catch(console.error);
  };
   
  message.mentions.users.forEach(user => undeafenMember(message.guild.member(user)));
  message.mentions.roles.forEach(role => role.members.forEach(member => undeafenMember(member)));
  }
  });




 
var prefix= "#";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'ct')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
     
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
      message.guild.createChannel(nam, 'text') // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:white_check_mark:  تم عمل الروم الكتابي : \`${nam}\``);
    }
    });
 
var prefix= "#";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'cv2')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
     
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return;   
      if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
      message.guild.createChannel(nam, 'voice')
      message.channel.send(`:white_check_mark:  تم عمل الروم الصوتي : \`${nam}\``);
    }
    });

var prefix= "#";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'cc')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
     
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`);
      message.guild.createChannel(nam, 'category') //  
      message.channel.send(`:white_check_mark:  تم عمل مجموعة : \`${nam}\``);
    }
    });

    var prefix= "#";
    client.on("message", message => {
        if(message.content.startsWith(prefix + 'v')) {
         let args = message.content.split(" ").slice(1);
           var nam = args.join(' ');
         
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
          if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
          message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
          message.channel.send(`:ballot_box_with_check: تم عمل الروم الصوتي : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
        }
        });

client.on('message', message => {
  var prefix = "#";
if(message.content === prefix + "muteall") {
             if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: false

}).then(() => {
    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")

});
}
   


});
  client.on('message', message => {
    var prefix = "#";
if(message.content === prefix + "unmuteall") {
          if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
message.channel.overwritePermissions(message.guild.id, {
SEND_MESSAGES: true

}).then(() => {
    message.reply("**__تم فتح الشات__:white_check_mark:**")
});
  }
   


});

          client.on("message", (message) => {
            if (message.content.startsWith('#delet')) {
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("ليس لديك خاصية `MANAGE_CHANNELS` Premissions ");
         
                let args = message.content.split(' ').slice(1);
                let channel = message.client.channels.find('name', args.join(' '));
                if (!channel) return message.reply('**مافي روم بهل اسم -_-**').catch(console.error);
                channel.delete()
            }
        });


 



client.login(process.env.BOT_TOKEN);
