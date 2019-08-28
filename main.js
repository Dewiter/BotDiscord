
const Discord   = require('discord.js');

const bot       = new Discord.Client();
const token     = 'NjE2MzIxNTM0Mzk0NDk5MDc0.XWbA7g.H0X0H5Hv9FQe4yfIZ_0B7P70-2Q'

bot.on('ready', () =>{
    console.log('I am alive !');
})

bot.on('message', msg=> {
    if (msg.content === "!join")
    {
        const channel = bot.channels.get("374757625939886080");
        if (!channel)
            return (console.log("channel doesnt exist"));
        channel.join().then(connection => {
            console.log("Hello World !");
        }).catch(e => {
            console.log(e);
        })
    }
    
    if (msg.content === "Rob ?"){
        msg.reply('Am I ? \n Rob... \n Rob .. No way... \n Am I ? \n Rob...\n Am I naked right now?!');
    }
})

bot.login(token);