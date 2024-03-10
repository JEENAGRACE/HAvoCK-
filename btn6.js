let btn = document.getElementById('btn');
let op = document.getElementById('op');
let quote= [


'“It takes no more time to see the good side of life than to see the bad.”- Jimmy Buffett',
'"There is no personal charm so great as the charm of a cheerful temperament."- Henry Van Dyke',
'"A merry heart maketh a cheerful countenance."- King Solomon',
'"A cheerful frame of mind, reinforced by relaxation... is the medicine that puts all ghosts of fear on the run."- George Matthew Adams',
'"A happy woman is one who has no cares at all; a cheerful woman is one who has cares but doesnt let them get her down."- Beverly Sills',
'"I do not think you should have to try to be nice, I think most people are nice. I think being cheerful and nice is just a politeness."- Graham Norton',
'"When the mind has once formed the habit of holding cheerful, happy, prosperous pictures, it will not be easy to form the opposite habit."- Orison Swett Marden',
];
btn.addEventListener('click', function () {
    var randomQuote ="<strong> "+ quote[Math.floor(Math.random() * quote.length)];
    op.innerHTML = randomQuote;
});