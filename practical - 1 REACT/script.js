const votes = {
    'JavaScript': 0,
    'Python': 0,
    'Java': 0,
    'C++': 0
};

const barIds = {
    'JavaScript': 'js-bar',
    'Python': 'py-bar',
    'Java': 'java-bar',
    'C++': 'cpp-bar'
};
const percentIds = {
    'JavaScript': 'js-percent',
    'Python': 'py-percent',
    'Java': 'java-percent',
    'C++': 'cpp-percent'
};

function animatePercent(id) {
    const el = document.getElementById(id);
    el.classList.remove('animate');
    void el.offsetWidth;
    el.classList.add('animate');
}

function updateVotes() {
    const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);
    for (const lang in votes) {
        const percent = totalVotes === 0 ? 0 : Math.round((votes[lang] / totalVotes) * 100);
        const bar = document.getElementById(barIds[lang]);
        const percentSpan = document.getElementById(percentIds[lang]);
        bar.style.width = percent + '%';
        percentSpan.textContent = percent + '%';
        animatePercent(percentIds[lang]);
    }
}

function vote(language) {
    votes[language]++;
    updateVotes();
}

function resetVotes() {
    for (const lang in votes) {
        votes[lang] = 0;
    }
    updateVotes();
}

setInterval(() => {
    const langs = Object.keys(votes);
    const randomLang = langs[Math.floor(Math.random() * langs.length)];
    votes[randomLang]++;
    updateVotes();
}, 1000);

updateVotes();