const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const REGEX_JAPANESE = /[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uff9f]|[\u4e00-\u9faf]|[\u3400-\u4dbf]/;
const hasJapanese = (str) => REGEX_JAPANESE.test(str);

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token)


client.on('message', (message) => {
    
    if (message.content.toLowerCase().includes("copper wiring") ) 
        message.channel.send('https://cdn.discordapp.com/emojis/789577661633789993.png?v=1');
    
    if (message.content.toLowerCase().includes('crystal meth') )
        message.channel.send('https://cdn.discordapp.com/emojis/789577661633789993.png?v=1');
    
    if (message.content.toLowerCase().includes('drugs')  )
        message.channel.send('https://cdn.discordapp.com/emojis/789577661633789993.png?v=1');
    
    if (message.content.toLowerCase().includes ('gambling')  )
        message.channel.send('https://cdn.discordapp.com/emojis/789577661633789993.png?v=1');
	if (message.content.toLowerCase().includes('woman'))
        message.channel.send('kick her down the stairs')
		if (message.content.toLowerCase().includes('woman'))
        message.channel.send('https://cdn.discordapp.com/emojis/789577661633789993.png?v=1')
        if (message.content.toLowerCase().includes('mods'))
        message.channel.send('are gay as fuck')	
        if (message.content.toLowerCase().includes('790215442077319218'))
        message.channel.send('<@177396438576136192>')	
        if (message.content.toLowerCase().includes('はい'))
        message.channel.send('fucking weeb')
        if (message.content === '!astro-events') {
            
            message.channel.send('Current astronomical events: on 21st, saturn and jupiter will be very near each other, find a tall point and look south west (northern hemisphere) or south (southern hemisphere)');
        }
        if (message.content.toLowerCase().includes('bottom'))
        message.channel.send('https://media.discordapp.net/attachments/773237408124633129/790256251668922428/Bottom.png?width=475&height=475')
 })
    
   
