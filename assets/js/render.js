/**
 * Load and render page from embedded content or content.json
 * Run build.ps1 after editing data/content.json to preview by opening index.html
 */

function boldWord(text, word) {
    if (!word) return text;
    const escaped = word.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp('\\b' + escaped + '\\b', 'g'), '<strong>$&</strong>');
}

document.addEventListener('DOMContentLoaded', async () => {
    let data;
    const embedded = document.getElementById('content');
    if (embedded && embedded.textContent.trim()) {
        data = JSON.parse(embedded.textContent);
    } else {
        try {
            const res = await fetch('data/content.json');
            if (!res.ok) throw new Error('Load failed');
            data = await res.json();
        } catch (e) {
            document.body.innerHTML = `
                <div style="padding:3rem 2rem;max-width:500px;margin:0 auto;font-family:sans-serif;">
                    <h2 style="color:#c00;">Content load failed</h2>
                    <p>Run <code>powershell -ExecutionPolicy Bypass -File build.ps1</code> then open index.html.</p>
                </div>
            `;
            return;
        }
    }

    document.title = data.name + ' - Homepage';

    document.querySelector('.header h1').textContent = data.name;
    document.querySelector('.header .subtitle').textContent = data.subtitle;
    document.querySelector('.header .affiliation').innerHTML =
        data.affiliation + (data.address ? '<br>' + data.address : '');
    const contactText = 'Email: ' + data.email + (data.email2 ? ' | ' + data.email2 : '');
    document.querySelector('.header .contact').textContent = contactText;

    const socialEl = document.querySelector('.social-links');
    socialEl.innerHTML = data.social.map(s =>
        `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`
    ).join('');

    const researchFocusSection = document.querySelector('#research-focus');
    if (data['Research Focus']) {
        researchFocusSection.querySelector('p').textContent = data['Research Focus'];
    } else {
        researchFocusSection?.remove();
    }

    const pubEl = document.querySelector('.pub-list');
    pubEl.innerHTML = data.publications.map(p => {
        let citation = typeof p === 'string' ? p : p.citation;
        citation = citation.replace(/^(\[\d{4}\/\d{1,2}\])\s*/, '<strong>$1</strong> ');
        if (typeof p === 'object') {
            if (p.boldAuthor) citation = boldWord(citation, p.boldAuthor);
            if (p.boldJournal) citation = boldWord(citation, p.boldJournal);
        }
        let links = '';
        if (typeof p === 'object' && p.code) links += ` [<a href="${p.code}" target="_blank" rel="noopener">code</a>]`;
        return `<li>${citation}${links}</li>`;
    }).join('');

    const confSection = document.querySelector('#conferences');
    if (data.conferences && data.conferences.length > 0) {
        const confEl = document.querySelector('.conf-list');
        confEl.innerHTML = data.conferences.map(p => {
            let citation = typeof p === 'string' ? p : p.citation;
            citation = citation.replace(/^(\[\d{4}\/\d{1,2}\])\s*/, '<strong>$1</strong> ');
            if (typeof p === 'object' && p.boldAuthor) {
                citation = boldWord(citation, p.boldAuthor);
            }
            return `<li>${citation}</li>`;
        }).join('');
    } else {
        confSection?.remove();
    }

    const activitiesEl = document.querySelector('#activities ul');
    activitiesEl.innerHTML = data.activities.map(a => `<li>${a}</li>`).join('');

    document.querySelector('footer p').textContent = data.footer;
});
