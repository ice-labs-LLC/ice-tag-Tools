const { Client } = require('revolt.js');
require('dotenv').config();

const client = new Client({
    intents: ['MessageContent', 'GuildMessages', 'DirectMessages']
});

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

client.loginBot(process.env.STOAT_TOKEN);