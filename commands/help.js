module.exports = {
    name: 'help',
    description: 'this is a help command',
    execute(message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setColor('#FFFFFF')
       .setTitle('Here are my commands!')
       .setDescription('You wanted to know my commands, well here they are!')
       .addFields(
           {name: '-help', value: 'Shows this embed!'},
           {name: '-group', value: 'Shows a link to our group!'},
           {name: '-hub', value: 'Shows a link to our hub!'},
           {name: '-ping', value: 'pong!'}
       )
       message.channel.send(newEmbed)
    }
}