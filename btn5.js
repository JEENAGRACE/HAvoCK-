
let btn = document.getElementById('btn');
let op = document.getElementById('op');
let quote= [
    '“Loneliness expresses the pain of being alone and solitude expresses the glory of being alone.” -Paul Tillich',
    '"At the innermost core of all loneliness is a deep and powerful yearning for union with ones lost self".-Brendan Behan',
    '"We are all born alone and die alone. The loneliness is definitely part of the journey of life."-Jenova Chen',
    'The strongest man is he who stands most alone." - Henrik Ibsen',
    '“For fear you will be alone, you do so many things that aren’t you at all.” —Richard Brautigan',
    '“The most terrible poverty is loneliness and the feeling of being unloved.” —Mother Teresa',
    '“All great and precious things are lonely.” —John Steinbeck',
    '“A season of loneliness and isolation is when the caterpillar gets its wings. Remember that next time you feel alone.” —Mandy Hale',
    'The soul that sees beauty may sometimes walk alone." - Johann Wolfgang von Goethe',
    '“The time you feel lonely is the time you most need to be by yourself. Lifes cruelest irony.” —Douglas Coupland',

];

btn.addEventListener('click', function () {
    var randomQuote ="<strong>"+ quote[Math.floor(Math.random() * quote.length)];
    op.innerHTML = randomQuote;
});
