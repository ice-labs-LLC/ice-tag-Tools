// 1. Imports first
const { Client } = require('revolt.js');
require('dotenv').config();

// 2. CREATE the client (This fixes the "not defined" error)
const client = new Client({
    intents: ['MessageContent', 'GuildMessages', 'DirectMessages']
});

// 3. NOW you can use client.on
client.on('ready', () => {
    console.log(`✅ Logged in as ${client.user?.username}!`);
});

client.on('messageCreate', async (message) => {
    if (!message.author || message.authorId === client.user?.id) return;

    const input = message.content?.toLowerCase().trim();

    if (input === '/link') {
        await message.reply('This is an unreleased feature and will come in the future.');
    }
});

// 4. Finally, login
client.loginBot(process.env.STOAT_TOKEN).catch(console.error);