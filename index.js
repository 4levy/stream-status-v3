const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const express = require('express');
const moment = require('moment');
const readline = require('readline-sync');
const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
const operator = Math.random() < 0.3 ? '+' : '-';
const app = express();
const port = 8000;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'));
app.listen(port, () =>
  console.log(`Your app is listening at http://localhost:${port}`)
);

const client = new Client({
  checkUpdate: false
});

client.on('ready', async () => {
  if (global.dataWeather && global.dataWeather.current_weather) {
    global.temp = global.dataWeather.current_weather.temperature;
    global.wind = global.dataWeather.current_weather.windspeed;
  } else {
    global.temp = 25;
    global.wind = 3.5;
  }

  setInterval(() => {
    const created = moment().format('YYYY-MM-DD HH:mm:ss ');

    const change = ['https://cdn.discordapp.com/attachments/1199386824582373516/1202226252967333908/feac57129dbae1df38a8e098ed88bcce.png?ex=65e85ef2&is=65d5e9f2&hm=da3b605d9d274069b28f93bab277e7057d1614a7dadf0bcbf7978ebffce2478c&'];
    const poop = ['https://media.discordapp.net/attachments/889976848581287946/1192463032610193610/a_f3bcc76b8af98fb87ab30d8d82376ac0.gif?ex=65e9c43d&is=65d74f3d&hm=41dfdde129cfc0d8b2b2f3db3d010cebf19747865f64ebd6f936dd75dd61d1d9&=&width=350&height=350'];
    const change2 = ['มีบอทเจ๋งๆ ', 'มีเม็ดม่วง', 'AAAA', 'Love na'];
    const change3 = ['⏰', '⏰', '⏰', '⏰'];
    const iooi = ['୧₊˚❤️・Itzlevy ・꒱', '〝📦〞Stream Twitch Free', '〝📦〞Free access 200 room+'];
    const iiio = ['https://discord.gg/aqt6thEVV7'];
    const yyyt = ['⏰₊꒷ Join discord ˳ʚ', '⏰₊꒷ Join discord ˳ʚ', '⏰₊꒷ Join discord ˳ʚ'];
    const ddds = ['https://discord.gg/aqt6thEVV7'];

    // Randomize data
    const tyyy = yyyt[Math.floor(Math.random() * yyyt.length)];
    const sddd = ddds[Math.floor(Math.random() * ddds.length)];
    const oooi = iiio[Math.floor(Math.random() * iiio.length)];
    const ioii = iooi[Math.floor(Math.random() * iooi.length)];
    const popp = poop[Math.floor(Math.random() * poop.length)];
    const ssss = change[Math.floor(Math.random() * change.length)];
    const dwada = change2[Math.floor(Math.random() * change2.length)];
    const ap = change3[Math.floor(Math.random() * change3.length)];


    const r = new Discord.RichPresence()
      .setApplicationId('928000104378548224')
      .setType('LISTENING')
      .setURL('https://youtu.be/xTZk2G9-6co?si=xpE-kzJivOITFzmQ')
      .setState(`${dwada}`)
      .setName(`levy`)
      .setDetails(`${ap}${getTime()} ${moment().format('- DD/MM/YYYY')}`)
      .setAssetsSmallImage(`${popp}`)
      .setAssetsLargeImage(`${ssss}`)
      .setAssetsLargeText(`🌡️ ${operator === '+' ? (global.temp + num).toFixed(1) : (global.temp - num).toFixed(1)} °C | 🍃 ${operator === '+' ? (global.wind + num).toFixed(1) : (global.wind - num).toFixed(1)} m/s`)
      .addButton(`${ioii}`, `${oooi}`)
      .addButton(`${tyyy}`, `${sddd}`)
      .setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
      .setStartTimestamp(Date.now())
      .setEndTimestamp(Date.now());

    client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
    client.user.setActivity(r);
  }, 2 * 1000);

  console.log(`${client.user.username} Is Ready!`);
});


function getDate() {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).split(' ')[0].replaceAll(',', '');
}

function getTime() {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Bangkok',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  }).split(' ')[1].replaceAll(',', '');
}

// Login
client.login(process.env['token']);
