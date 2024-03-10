let btn = document.getElementById('btn');
let op = document.getElementById('op');
let quote = [
    '“It is often the small steps, not the giant leaps, that bring about the most lasting change.”\n - Queen Elizabeth II',
    '“There is always light. If only we are brave enough to see it. If only we are brave enough to be it.” \n- Amanda Gorman',
    '“You’re braver than you believe, stronger than you seem, and smarter than you think.”\n - A.A. Milne',
    '“You cannot rely on how you look to sustain you; what sustains us, what is fundamentally beautiful is compassion; for yourself and those around you.” \n- Lupita Nyong\'o',
    '“We will fail when we fail to try.”\n - Rosa Parks',
    '“Opportunity is missed by most people because it is dressed in overalls and looks like work.”\n - Thomas Edison',
    '“The people who are crazy enough to think they can change the world are the ones who do.” \n- Steve Jobs',
    '“I never dreamed about success. I worked for it.”\n - Esteé Lauder',
    '“A dead-end street is a good place to turn around.” \n- Naomi Judd',
    '“Champions keep playing until they get it right.” \n- Billie Jean King'
];

btn.addEventListener('click', function () {
    var randomQuote = "<strong>" +quote[Math.floor(Math.random() * quote.length)];
    op.innerHTML = randomQuote;
});
