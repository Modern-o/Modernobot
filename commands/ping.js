const { memberNicknameMention } = require("@discordjs/builders")

module.exports = {
    name: 'ping',
    description: 'this is a ping command',
            execute(message, args, Discord){
            const newEmbed = new Discord.MessageEmbed()
           .setColor('#FFFFFF')
           .setTitle('pong!')
    
           message.channel.send(newEmbed)
        }
}



//  execute(message, args){
//    if(message.member.roles.cache.has('880075368936132668')){
 //       message.channel.send('pong!')
//    } else{
  //      message.channel.send('Yo do not have the required permissions for this command!')
    //}