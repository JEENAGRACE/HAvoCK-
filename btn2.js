


let btn = document.getElementById('btn');
let op = document.getElementById('op');
let quote = [
    '"Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad." ― Henry Wadsworth Longfellow',
    '"There are wounds that never show on the body that are deeper and more hurtful than anything that bleeds." ― Laurell K. Hamilton',
    '"That is all I want in life: for this pain to seem purposeful." ― Elizabeth Wurtzel',
    '"The worst kind of sad is not being able to explain why." - Unknown',
    '"Keeping a lot to myself, because it is hard to find someone who understands" - Unknown',
    '"It is that feeling when you are not necessarily sad, but just really empty" - Unknown',
    '"We repeat what we dont repair" - Unknown',
    '"I found that with depression, one of the most important things you could realize is that you\'re not alone." — Dwayne Johnson',
    '"I have depression. But I prefer to say, "I battle depression" instead of "I suffer with it". Because depression hits, but I hit back. Battle on." — Anonymous',
    '"Depression, suffering and anger are all part of being human." – Janet Fitch'
];

btn.addEventListener('click', function () {
    var randomQuote = quote[Math.floor(Math.random() * quote.length)];
    op.innerHTML = randomQuote;
});