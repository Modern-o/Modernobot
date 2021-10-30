const Discord = require("discord.js"); // require the discord.js wrapper

const client = new Discord.Client(); // Declare client to be a new Discord Client (bot)

const prefix = '-'; //Prefix

const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){

  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}



//Status and console log
client.once('ready', () => {
  console.log("Bot is Now Online & Working Fine");
});



client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'help'){

   client.commands.get('help').execute(message, args, Discord)

  } 
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){

   client.commands.get('ping').execute(message, args, Discord)

  } 
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'group'){

   client.commands.get('group').execute(message, args, Discord)

  } 
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'hub'){

   client.commands.get('hub').execute(message, args, Discord)

  } 
});


// Commands




client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Customer');
  guildMember.roles.add(welcomeRole);
});




//When a member leaves 
client.on("guildMemberRemove", async member => {
  let channel = member.guild.channels.cache.find(c => c.name === "welcome");
  let WELCOME = new Discord.MessageEmbed()
    .setTitle("Thank you for visiting Moderno.")
    .setDescription(
      `Goodbye, ${member.user}. Thank you for visiting Moderno, we hope to see you back soon.`
    )
    .setColor("#FFFFFF");
  channel.send(WELCOME);
});

client.on("guildMemberAdd", async member => {
  let channel = member.guild.channels.cache.find(c => c.name === "welcome");
  let WELCOME = new Discord.MessageEmbed()
    .setTitle("Welcome to Moderno!")
    .setImage("https://cdn.discordapp.com/attachments/897912433966989389/899356693195001856/welcome.png")
    .setDescription(`Hello, ${member.user} welcome to Moderno! We hope you enjoy your time here!`)
    .setColor("#FFFFFF");
  channel.send(WELCOME);
});








client.login("OTAzNTI5ODE4MDQwMTg4OTM4.YXuTtw.aXxZu5p8G790XaybE5DhvUkUpk4"); // Login with the token make sure to add it when starting
