const TelegramBot = require('node-telegram-bot-api');
const token = '5194074760:AAHe9WZef0WJDScT3ZRVKb8in4lE672tEx4';
const bot = new TelegramBot(token, {polling: true});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const stickers = [
    'sticker.webp',
    'sticker1.webp'
]

const questions = [
    '2 plus 2 equals ..?',
    'Do you like coffee?',
    'pi number is ..?'
]

const answers = [
    ['4', '5'],
    ['Yes', 'No'],
    ['3.14', '432.32']
]

const pictures = [
    'EKAZ7DWWsAE0LXk.jpg',
    'f913e2344e2b580ba32d2587c437fef4.jpg',
    'photo_2022-01-02_23-17-19.jpg'
]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const setCommands = bot.setMyCommands([
    { command: 'help', description: 'how to use bot' },
    { command: 'hi', description: 'greetings' },
    { command: 'dice', description: 'random number(1-6)' },
    { command: 'poll', description: 'poll with random questions and answers' }
])

module.exports = {
    questions,
    answers,
    pictures,
    stickers,
    setCommands,
    sleep,
    getRandomInt
}