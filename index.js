const { Client } = require('revolt.js');
require('dotenv').config();

// CRITICAL: You must include these intents for the bot to "hear" you
const client = new Client({
    intents: ['MessageContent', 'GuildMessages', 'DirectMessages']
});

client.on('ready', () => {
    console.log(`✅ ${client.user.username} is now monitoring Stoat!`);
});

// Using 'messageCreate' is the modern standard for Revolt/Stoat
client.on('messageCreate', async (message) => {
    if (message.author_id === client.user._id) return;

    const cmd = message.content.toLowerCase().trim();

    if (cmd === '!ping') {
        await message.reply('Pong! 🦫');
    }

    if (cmd === '/link') {
        await message.reply('This is an unreleased feature and will come in the future.');
    }
});

client.loginBot(process.env.STOAT_TOKEN);