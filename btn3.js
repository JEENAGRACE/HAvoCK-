

let btn = document.getElementById('btn');
let op = document.getElementById('op');
let quote = [
    '"You have to dream before your dreams can come true." - A. P. J. Abdul Kalam.',
'“All our dreams can come true — if we have the courage to pursue them.”- Walt Disney',
'"Dont give up on your dreams, or your dreams will give up on you." - John Wooden.',
'"Never be ashamed! There is some who will hold it against you, but they are not worth bothering with." - J. K. Rowling.',
'"Love what you do and do what you love. Dont listen to anyone else who tells you not to do it. You do what you want, what you love. Imagination should be the center of your life." - Ray Bradbury.',
'"It is better to risk starving to death than surrender. If you give up on your dreams, whats left?" - Jim Carrey.',
'"Remember to celebrate milestones as you prepare for the road ahead." -- Nelson Mandela.',
'"The only thing worse than starting something and failing... is not starting something." - Seth Godin.',
'"I dont focus on what Im up against. I focus on my goals and I try to ignore the rest." - Venus Williams.',
'"I cant imagine a person becoming a success who doesnt give this game of life everything hes got." - Walter Cronkite.',
'“The future belongs to those who believe in the beauty of their dreams.”- Eleanor Roosevelt',
'“Dream as if you will live forever. Live as if you will die today. “-James Dean',

];

btn.addEventListener('click', function () {
    var randomQuote ="<strong>" + quote[Math.floor(Math.random() * quote.length)];
    op.innerHTML = randomQuote;
});
