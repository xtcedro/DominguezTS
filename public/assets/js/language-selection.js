function setLanguage(lang) {
    if (lang === 'es') {
        window.location.href = 'index_es.html';
    } else {
        document.getElementById('language-modal').style.display = 'none';
    }
}
