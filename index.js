const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token)

client.on('message', message => {
	console.log(message.content);
});


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
            
            message.channel.send('there will be a meteor shower, which will peak at night of january 3rd to early morning of january 4th, find a spot without bright lights, lie down and look at the sky.');
       
        }
        if (message.content.toLowerCase().includes('x lucas'))
        message.channel.send('pedo')
        if (message.content === 'gay')   
         message.channel.send('genocide')
    
         if (message.content.toLowerCase().includes('mongolian'))
        message.channel.send('ching chong chang ching')

        if (message.content.toLowerCase().includes('turkish'))
        message.channel.send('https://cdn.discordapp.com/attachments/754758174673731718/786163594428678164/erdogan.mp4')

        if (message.content === '!radio')
        message.channel.send('h2lphk5xetlet2pbtuijl5uxx5eek5wedejcv4w6vfwtdayyjidu6tad.onion')

        if (message.content.toLowerCase().includes('coindorni'))
        message.channel.send('pedophile')  
        
        
        if (message.content.toLowerCase().includes('600150118741704704'))
        message.channel.send('pedophile')   

        if (message.content.toLowerCase().includes('homestuck'))
        message.channel.send('https://media.discordapp.net/attachments/767940723890323458/797573236875067412/Untitled3_20201122145544.png?width=475&height=475')  
    })
    
   

   
