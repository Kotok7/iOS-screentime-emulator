window.addEventListener('load', function() {
    document.getElementById('welcomePopup').style.display = 'flex';
});

function closePopup() {
    const popup = document.getElementById('welcomePopup');
    popup.classList.add('hide');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

document.getElementById('welcomePopup').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});