module.exports = {
    name: 'hub',
    description: 'this is a hub command',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setColor('#FFFFFF')
       .setTitle('Command comming soon!')

       message.channel.send(newEmbed)
    }
}