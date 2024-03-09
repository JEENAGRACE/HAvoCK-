
let btn = document.getElementById('btn');
let op = document.getElementById('op');
let quote= [
    '“Loneliness expresses the pain of being alone and solitude expresses the glory of being alone.” -Paul Tillich',
    '"At the innermost core of all loneliness is a deep and powerful yearning for union with ones lost self".-Brendan Behan',
    '"We are all born alone and die alone. The loneliness is definitely part of the journey of life."-Jenova Chen',
    '“Loneliness is my least favorite thing about life. That thing that I’m most worried about is just being alone without anybody to care for or someone who will care for me.” —Anne Hathaway',
    '“For fear you will be alone, you do so many things that aren’t you at all.” —Richard Brautigan',
    '“The most terrible poverty is loneliness and the feeling of being unloved.” —Mother Teresa',
    '“All great and precious things are lonely.” —John Steinbeck',
    '“A season of loneliness and isolation is when the caterpillar gets its wings. Remember that next time you feel alone.” —Mandy Hale',
    '“If you meet a loner, no matter what they tell you, its not because they enjoy solitude. Its because they have tried to blend into the world before, and people continue to disappoint them.” —Jodi Picoult',
    '“The time you feel lonely is the time you most need to be by yourself. Lifes cruelest irony.” —Douglas Coupland',

];

btn.addEventListener('click', function () {
    var randomQuote = quote[Math.floor(Math.random() * quote.length)];
    op.innerHTML = randomQuote;
});