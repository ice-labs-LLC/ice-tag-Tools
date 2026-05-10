const { Client } = require('revolt.js');
require('dotenv').config();

// We add 'MessageContent' to the fetch intents
const client = new Client({
    intents: ['MessageContent', 'GuildMessages', 'DirectMessages']
});

client.on('ready', () => {
    console.log(`✅ Logged in as ${client.user.username}!`);
});

// Changed 'message' to 'messageCreate'
client.on('messageCreate', async (message) => {
    // Debug: This will show in your PM2 logs if ANY message is seen
    console.log(`Received: ${message.content}`);

    if (message.author_id === client.user._id) return;

    const input = message.content.toLowerCase().trim();

    if (input === '!ping') {
        await message.reply('Pong! 🦫');
    }

    if (input === '/link') {
        await message.reply('This is an unreleased feature and will come in the future.');
    }
});

client.loginBot(process.env.STOAT_TOKEN);