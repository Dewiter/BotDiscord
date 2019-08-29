
const Discord   = require('discord.js');
const ytdl      = require('ytdl-core');

const bot       = new Discord.Client();
const token     = 'NjE2MzIxNTM0Mzk0NDk5MDc0.XWbA7g.H0X0H5Hv9FQe4yfIZ_0B7P70-2Q'
const prefix    = '!';
const queue     = new Map();


bot.once('ready', () =>{
    console.log('I am alive !');
})

bot.once('reconnecting', () => {
    console.log('reconnecting');
})

bot.once('disconnect', () => {
    console.log('time to go to bed');
})

bot.on('message', async msg=> {
    if (msg.author.bot)
        return ;
    if (!msg.content.startsWith(prefix))
        return ;
    
    const serverQueue = queue.get(message.guild.id);

    if (msg.content.startsWith(`${prefix}play`))
        execute(msg, serverQueue);
    else if (msg.content.startsWith(`${prefix}skip`))
        skip(msg, serverQueue);
    else if (msg.content.startsWith(`${prefix}stop`))
        stop(msg, serverQueue);
    else
        msg.channel.send('You need to enter a valid command !');
    
    if (msg.content === "Rob ?"){
        msg.reply('Am I ? \n Rob... \n Rob .. No way... \n Am I ? \n Rob...\n Am I naked right now?!');
    }
});

async function execute(message, serverQueue)
{
    const args          = message.content.split(' ');

    const voiceChannel  = message.member.voiceChannel;
    if (!voiceChannel)
        return (message.channel.send('You need to be in a voice channel'));
    
    const permission    = voiceChannel.permissionsFor 
}

bot.login(token);