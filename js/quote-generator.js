document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        'Wisdom is not a product of schooling but of the lifelong attempt to acquire it.',
        'If you want to conquer fear, don\'t sit at home and think about it. Go out and get busy.',
        'Verum ipsum factum',
        'Be regular and orderly in your life so that you may be violent and original in your work',
        'Whether you think you can or you think you can\'t, you\'re right.',
        'Happiness is not something you postpone for the future; it is something you design for the present.',
        'If something is humanly possible, it\'s attainable by you too.',
        'Disobedience, in the eyes of anyone who has read history, is man\'s original virtue. It is through disobedience that progress has been made, through disobedience and rebellion.',
        'Welcome to life. It\'s a big boat with a lot of holes, but we\'re all in it together.',
        'The best is the enemy of the good.',
    ];
    const quoters = [
        'Albert Einstein',
        'Dale Carnegie',
        'Giambattista vico',
        'Gustave Flaubert',
        'Henry Ford',
        'Jim Rohn',
        'Marcus Aurelius',
        'Oscar Wilde',
        'Rick Sanchez',
        'Voltaire'
    ];
    const num_quotes = quotes.length;
    const quote = document.querySelector('.quote');
    const quoter = document.querySelector('.quotee');
    const rng = Math.floor(Math.random() * num_quotes);

    quote.innerHTML = quotes[rng];
    quoter.innerHTML = quoters[rng];
});