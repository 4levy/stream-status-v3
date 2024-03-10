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

    token = ""
    const change = ['https://cdn.discordapp.com/attachments/1009452152214790236/1216358404831051926/tumblr_06502a3f379cc450f27b63f5535c7497_ef4e5e19_640.gif.webp?ex=6600190a&is=65eda40a&hm=aae862743e9e0cf59ff61a01f9b9090af0f3828a0f6bbab426b6879001b87d76&'];
    const poop = [''];
    const change2 = ['ig:n.amo_56', 'Support เกือบ 25 ชั่วโมง'];
    const change3 = ['⏰', '⏰', '⏰', '⏰'];
    const iooi = ['୧₊˚🎫・Website・꒱', '〝📦〞MOD GAME', '〝📦〞FREE'];
    const iiio = ['https://mod-free.netlify.app/'];
    const yyyt = ['⏰₊꒷ Join discord my friend ˳ʚ', '⏰₊꒷ Join discord my friend ˳ʚ', '⏰₊꒷ Join discord my friend ˳ʚ'];
    const ddds = ['https://discord.com/invite/NnSghccnH5'];

    // Randomize data
    const tyyy = yyyt[Math.floor(Math.random() * yyyt.length)];
    const sddd = ddds[Math.floor(Math.random() * ddds.length)];
    const oooi = iiio[Math.floor(Math.random() * iiio.length)];
    const ioii = iooi[Math.floor(Math.random() * iooi.length)];
    const popp = poop[Math.floor(Math.random() * poop.length)];
