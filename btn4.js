

let btn = document.getElementById('btn');
let op = document.getElementById('op');
let quote= [
    '"I used to think the worst thing in life was to end up all alone. Its not. The worst thing in life is to end up with people that make you feel all alone.” -Robin Williams',
'“There is nothing outside of yourself. Look within. Everything you want is there. You are that.” -Rumi',
'“There is hope, even when your brain tells you there isn’t.” -John Green',
'“In the middle of winter, I at last discovered that there was in me an invincible summer.” -Albert Camus',
'“We live in a very tense society. We are pulled apart…and we all need to learn how to pull ourselves together. I think that at least part of the answer lies in solitude.” -Helen Hayes',
'“Loneliness is and always has been the central and inevitable experience of every man.” -Thomas Wolfe',
'“Ordinary men hate solitude. But the master makes use of it, embracing his aloneness, realizing he is one with the whole universe.” -Lao Tzu',
'“We can all fight against loneliness by engaging in random acts of kindness.” -Gail Honeyman',
'“If you are never alone, you cannot know yourself”. -Paulo Coelho de Souza',
'“Remember: the time you feel lonely is the time you most need to be by yourself. Lifes cruelest irony.” -Douglas Coupland',

];

btn.addEventListener('click', function () {
    var randomQuote = "<strong>" +quote[Math.floor(Math.random() * quote.length)];
    op.innerHTML = randomQuote;
});
