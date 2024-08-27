const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const moment = require('moment');
const readline = require('readline-sync');

const num = parseFloat((Math.random() * 0.2 + 0.1 + Number.EPSILON).toFixed(1));
const operator = Math.random() < 0.3 ? '+' : '-';
const app = express();
const port = 8000;
const token = ""; 

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'));
app.listen(port, () => console.log(`Your app is listening at http://localhost:${port}`));

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

    const change = ['https://media.discordapp.net/attachments/1137360950203273327/1271033487104806963/Youtube.png?ex=66b5ddad&is=66b48c2d&hm=f3e76176eca1e74fd20fe4bd842c03b48b7338ed5fe43ab7ce6b538c1ad6dc38&=&format=webp&quality=lossless&width=793&height=446'];
    const poop = ['https://cdn.discordapp.com/attachments/1137360950203273327/1271060124441509888/Snapinsta.app_453987665_1544669619454767_748569339316843040_n_1080.jpg?ex=66b5f67c&is=66b4a4fc&hm=cbebc0643c287ebc3d714d2d3a8f552538d628a33a97a152a734e942178897cf&'];
    const change2 = ['มีบอทเจ๋งๆ ', 'มีเม็ดม่วง', 'แอดมินโคตรหล่อ', 'Support เกือบ 25 ชั่วโมง'];
    const change3 = [':alarm_clock:', ':alarm_clock:', ':alarm_clock:', ':alarm_clock:'];
    const iooi = ['୧₊˚:ticket:・Ticket・꒱', '〝:package:〞Stream Twitch 30 B', '〝:package:〞Bot Buy Rloe 0 B'];
    const iiio = ['https://discord.gg/PZmvmA2q6U'];
    const yyyt = [':alarm_clock:₊꒷ Join discord ˳ʚ', ':alarm_clock:₊꒷ Join discord ˳ʚ', ':alarm_clock:₊꒷ Join discord ˳ʚ'];
    const ddds = ['https://discord.gg/PZmvmA2q6U'];

    const tyyy = yyyt[Math.floor(Math.random() * yyyt.length)];
    const oooi = iiio[Math.floor(Math.random() * iiio.length)];
    const ioii = iooi[Math.floor(Math.random() * iooi.length)];
    const popp = poop[Math.floor(Math.random() * poop.length)];
    const ssss = change[Math.floor(Math.random() * change.length)];
    const dwada = change2[Math.floor(Math.random() * change2.length)];
    const ap = change3[Math.floor(Math.random() * change3.length)];

    client.user.setPresence({
      activities: [{
        name: dwada,
        type: 'STREAMING',
        url: 'https://www.twitch.tv/4levy_z1',
        details: `${ap}${getTime()} ${moment().format('- DD/MM/YYYY')}`,
        state: 'AAA?',
        assets: {
          largeImage: ssss,
          largeText: `🌡️ ${operator === '+' ? (global.temp + num).toFixed(1) : (global.temp - num).toFixed(1)} °C | 🍃 ${operator === '+' ? (global.wind + num).toFixed(1) : (global.wind - num).toFixed(1)} m/s`,
          smallImage: popp,
          smallText: `ping : ${Math.round(client.ws.ping)}`
        }
      }],
      status: 'online'
    });
  }, 2 * 1000);

  console.log(`${client.user.username} is ready!`);
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
client.login(token);
