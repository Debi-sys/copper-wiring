const config = require('./config.json');
const Discord = require('discord.js'); 
const prefix = "!";
//const prefix = config.prefix;


function test(robot, mess, args) {
    mess.channel.send('there will be a meteor shower, which will peak at night of january 3rd to early morning of january 4th, find a spot without bright lights, lie down and look at the sky.')
}

function radio(robot, mess, args) {
    mess.channel.send('h2lphk5xetlet2pbtuijl5uxx5eek5wedejcv4w6vfwtdayyjidu6tad.onion')
}

function say(robot, mess, args) {
    args.shift();
    args = args.join(' ');

    mess.channel.send(args);
}

function nigger(robot, mess, args) {
    if (mess.channel.id === '767942198896492615') {
        mess.channel.send('https://cdn.discordapp.com/attachments/723736586445127700/747796652378554398/1592679869688.png')
        mess.channel.send('https://cdn.discordapp.com/attachments/723736586445127700/747796681944465468/1592679937608.png')
        mess.channel.send('https://cdn.discordapp.com/attachments/716706744562090044/747804632478122025/merge_from_ofoct2.png')
        mess.channel.send('https://cdn.discordapp.com/attachments/723736586445127700/747796729759268954/1592680077515.png')
        mess.channel.send('https://cdn.discordapp.com/attachments/723736586445127700/747796744661893170/1592680246096.png')
    }
    else {
        mess.channel.send('NIGGER');
        mess.channel.send('now try it in <#767942198896492615> <:troll:789354323263488010>');
    }
}

function roles(robot, mess, args) {
    if (mess.channel.id === '767942198896492615') {
        mess.guild.members.fetch();
        mess.channel.send('Roles with low members');
        mess.guild.fetch()
            .then(guild => guild.roles.cache
            .each(role => {
                let memberCount = mess.guild.roles.resolve(role.id).members.size;
                if (memberCount < 5) {
                    mess.channel.send(`There are ${memberCount} members in ${role.name}.`)
                }
            }
                ));
        }
}



var comms_list = [
    {
        name: "astro-events",
        out: test,
        about: "astro events"
    },
    {
        name: "radio",
        out: radio,
        about: "radio"
    },
    {
        name: "say",
        out: say,
        about: "bot says your message"
    },
    {
        name: "nigger",
        out: nigger,
        about: "best command"
    },
    {
        name: "zeroroles",
        out: roles,
        about: "Find roles with 0 members"
    }
];

module.exports.comms = comms_list;