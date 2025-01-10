document.getElementById('checkButton').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    const url = extractURL(message);
    if (url) {
        fetchMetadata(url);
    } else {
        displayFeedback('Keine URL gefunden.', 'error');
    }
});

function extractURL(message) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const match = message.match(urlRegex);
    return match ? match[0] : null;
}

function fetchMetadata(url) {
    axios.get(url)
        .then(response => {
            const metadata = parseMetadata(response.data);
            displayFeedback(metadata, 'success');
        })
        .catch(error => {
            displayFeedback('Fehler beim Abrufen der Metadaten. Die Seite könnte gefährlich sein.', 'error');
        });
}

function parseMetadata(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('title')?.innerText || 'Kein Titel gefunden';
    const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || 'Keine Beschreibung gefunden';
    return `Titel: ${title}<br>Beschreibung: ${description}`;
}

function displayFeedback(message, type) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = DOMPurify.sanitize(message);
    feedbackDiv.className = type === 'success' ? 'text-green-600' : 'text-red-600';
}

i18next.init({
    lng: 'de',
    resources: {
        de: {
            translation: {
                "no_url_found": "Keine URL gefunden.",
                "fetch_error": "Fehler beim Abrufen der Metadaten. Die Seite könnte gefährlich sein.",
                "title": "Titel",
                "description": "Beschreibung"
            }
        }
    }
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.getElementById('checkButton').textContent = i18next.t('Überprüfen');
    // Update other texts as needed
}

function displayFeedback(messageKey, type) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = DOMPurify.sanitize(i18next.t(messageKey));
    feedbackDiv.className = type === 'success' ? 'text-green-600' : 'text-red-600';
}
