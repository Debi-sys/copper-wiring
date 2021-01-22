const config = require('./config.json');
const { Client, Intents } = require("discord.js");
const intents = new Intents([
    Intents.NON_PRIVILEGED, // include all non-privileged intents, would be better to specify which ones you actually need
    "GUILD_MEMBERS", // lets you request guild members (i.e. fixes the issue)
]);
const client = new Client({ ws: { intents } });
const comms = require("./comms.js");
const verses = require("./verses.js");
let prefix = "!";
//config was not included in git
//let prefix = config.prefix;

const messages = new Map([
    ["copper wiring",   'https://cdn.discordapp.com/emojis/789577661633789993.png?v=1'],
    ['crystal meth',    'https://cdn.discordapp.com/emojis/789577661633789993.png?v=1'],
    ['drugs',           'https://cdn.discordapp.com/emojis/789577661633789993.png?v=1'],
    ['gambling',        'https://cdn.discordapp.com/emojis/789577661633789993.png?v=1'],
    ['woman',           'kick her down the stairs'],
    ['mods',            'are gay as fuck'],
    ['はい',            'fucking weeb'],
    ['mongolian',       'ching chong chang ching'],
    ['turkish',         'https://cdn.discordapp.com/attachments/754758174673731718/786163594428678164/erdogan.mp4'],
    ['homestuck',       'https://media.discordapp.net/attachments/767940723890323458/797573236875067412/Untitled3_20201122145544.png?width=475&height=475']
  ]);
  


client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token)

client.on('message', message => {
	console.log(message.content);
});


client.on('message', (message) => {

    //this avoids bot reacting to itself
    if (message.author.username != client.user.username && message.author.discriminator != client.user.discriminator) 
    {
        if (message.author.id === '474335891159121920') {
        if (message.content === 'hello fellow whites') {
            message.channel.send('https://media.discordapp.net/attachments/767940723890323458/801854114132000798/image0.gif');
        } 
    }

        //one line messages
        var lowerCaseMessage = message.content.toLowerCase();
        if (messages.has(lowerCaseMessage)) {
            message.channel.send(messages.get(lowerCaseMessage));
        }

        //multiple line messages
		if (message.content.toLowerCase().includes('woman')) {
            message.channel.send('https://cdn.discordapp.com/emojis/789577661633789993.png?v=1');
        }

        if (message.content.toLowerCase().includes('790215442077319218'))
        message.channel.send('<@177396438576136192>')	

        //commands
        var comm = message.content.trim() + " ";
        var comm_name = comm.slice(0, comm.indexOf(" "));
        var messArr = comm.split(" ");
        for (comm_count in comms.comms) {
        var comm2 = prefix + comms.comms[comm_count].name;
        if (comm2 == comm_name) {
            comms.comms[comm_count].out(client, message, messArr);
            }
        }

        //verses
        var verse = message.content.trim() + " ";
        var Ted = verse.slice(0, comm.indexOf(" "));
        if (Ted.toLowerCase() === 'ted') {
            var messArr = comm.split(" ");
            if (messArr.length > 2) {
                //message.channel.send(messArr[1]);
                var V = parseInt(messArr[1], 10);
                if (!isNaN(V)) {
                    if (0 < V && V < 233) {
                        V -=1;
                        message.channel.send({embed: {
                            color: 3447003,
                            author: {
                            name: 'Theodore John Kaczynski',
                            icon_url: client.user.avatarURL
                            },
                            title: "Industrial Society and its Future",
                            description: verses.verses[V],
                            timestamp: new Date(),
                            footer: {
                            icon_url: client.user.avatarURL,
                            text: "© Copper Wiring"
                            }
                      }
                    });
                }
                }
            }
            }

        //full equal messages - will make map later
        if (message.content === 'gay')   
            message.channel.send('genocide')

        //messages directed at other users
        if (message.channel.id === '767942198896492615') {
            if (message.content.toLowerCase().includes('x lucas'))
                message.channel.send('pedo')

            if (message.content.toLowerCase().includes('coindorni'))
                message.channel.send('pedophile')  
            
            
            if (message.content.toLowerCase().includes('600150118741704704'))
                message.channel.send('pedophile')   
        }
    }
    })
    
   

   
