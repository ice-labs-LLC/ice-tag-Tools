client.on('messageCreate', async (message) => {
    // 1. Safety check
    if (!message.author || message.author.id === client.user.id) return;

    // 2. Format input
    const input = message.content?.toLowerCase().trim();

    // 3. Command logic
    if (input === '/link') {
        await message.reply('This is an unreleased feature and will come in the future.');
    }
});