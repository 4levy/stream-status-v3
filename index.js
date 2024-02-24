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

    const change = ['https://cdn.discordapp.com/attachments/1175028857464701039/1175594614623846511/ae52d968e7d8117170d2eeff6245ca5c.gif?ex=656bcccd&is=655957cd&hm=7eef6bda3ec17574e66d047f018153cb2284c1ac4519a277ad7ffe8c8d3060e1&'];
    const poop = ['https://cdn.discordapp.com/attachments/1175028857464701039/1175599211346153603/637273165c6b1c33da5f3ec3eb83b9db.gif?ex=656bd115&is=65595c15&hm=2679613a7b319eb412b08cd2b64f6397673d81747a4950079fc08288ed8d5680&'];
    const change2 = ['มีบอทเจ๋งๆ ', 'มีเม็ดม่วง', 'แอดมินโคตรหล่อ', 'Support เกือบ 25 ชั่วโมง'];
    const change3 = ['⏰', '⏰', '⏰', '⏰'];
    const iooi = ['୧₊˚🎫・Ticket・꒱', '〝📦〞Stream Twitch 30 B', '〝📦〞Bot Buy Rloe 0 B'];
    const iiio = ['https://discord.gg/PZmvmA2q6U'];
    const yyyt = ['⏰₊꒷ Join discord ˳ʚ', '⏰₊꒷ Join discord ˳ʚ', '⏰₊꒷ Join discord ˳ʚ'];
    const ddds = ['https://discord.gg/PZmvmA2q6U'];

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
      .setApplicationId('1121867777867788309')
      .setType('STREAMING')
      .setURL('https://www.twitch.tv/')
      .setState(`${dwada}`)
      .setName(`PornHuB`)
      .setDetails(`${ap}${getTime()} ${moment().format('- DD/MM/YYYY')}`)
      .setAssetsSmallImage(`${popp}`)
      .setAssetsLargeImage(`${ssss}`)
      .setAssetsLargeText(`🌡️ ${operator === '+' ? (global.temp + num).toFixed(1) : (global.temp - num).toFixed(1)} °C | 🍃 ${operator === '+' ? (global.wind + num).toFixed(1) : (global.wind - num).toFixed(1)} m/s`)
      .addButton(`${ioii}`, `${oooi}`)
      .addButton(`${tyyy}`, `${sddd}`)
      .setAssetsSmallText(`ping : ${Math.round(client.ws.ping)}`)
      .setStartTimestamp(Date.now())
      .setEndTimestamp(Date.now());

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
