const { Client } = require('revolt.js');
require('dotenv').config();

const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', async (message) => {
    // 1. Safety check: Ignore messages from the bot itself
    if (message.author_id === client.user._id) return;

    // 2. Simple !ping command
    if (message.content === '!ping') {
        await message.reply('Pong! 🦫');
    }

    // 3. The /link command
    if (message.content === '/link') {
        await message.reply('This is an unreleased feature and will come in the future.');
    }
});

client.loginBot(process.env.STOAT_TOKEN);