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
    }
];

module.exports.comms = comms_list;