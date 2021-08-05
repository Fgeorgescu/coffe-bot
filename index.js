const Discord = require("discord.js");
const coffeeHandler = require("./handlers/coffee")
const nahueHandler = require("./handlers/nahue")

// Load .env
result = require('dotenv').config()
if (result.error) {
    console.warn("Could not load .env variables. This might happen when not working locally")
}
  
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);


const COMMAND_PREFIX = "rp "; //Incluye el espacio


console.log("RP bot is online")
client.on("message", function(message) {
    // Descartamos los mensajes que no sean de un bot.
    if (message.author.bot) return;
    // Descartamos los mensajes que no comienzan con el prefijo que queremos.
    if (message.content.toLowerCase.includes("quiere")) {
        nahueHandler.handle(message)
    } else if (!message.content.startsWith(COMMAND_PREFIX)) return;

    // Eliminamos el prefijo, separamos el comando y los argumentos.
    const commandBody = message.content.slice(COMMAND_PREFIX.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
        case "ping":
            const timeTaken = Date.now() - message.createdTimestamp;
            message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
            break;
        case "coffee":
        case "feca":
        case "cafe":
            coffeeHandler.handle(message)
            break;
        case "mate":
        case "mates":
        case "leo mattioli":
        case "verdes":
        case "mat damon":
        case "matarazzo":
            message.channel.send(`No rompas las bolas ${message.author}. Pedí un feca que es lo mismo. Nahue debe estar tomando unos ahora, decile que se sume`)
            break;
        case "nahue":
        case "nahuel":
        case "ruby":
            nahueHandler.handle(message)
            break;
        default:
            message.channel.send(`No se que significa ${command}, el comando no está implementado.`)
            break;
        }
  });