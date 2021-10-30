module.exports = {
    name: 'group',
    description: 'this is a group command',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setColor('#FFFFFF')
       .setTitle('Command comming soon!')

       message.channel.send(newEmbed)
    }
}