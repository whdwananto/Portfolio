export function saveName() {
    const name = document
        .getElementById('name')
        .value
        .trim();

    if (!name) {
        alert('Please input your name first.');
        return;
    }

    localStorage.setItem("visitor name", name);

    localStorage.setItem("lang", currentLang);

    window.location.href = 'main.html';
}

window.saveName = saveName;

export function updateVisitorName() {
    const name = localStorage.getItem("visitorName");
    const badge = document.getElementById("welcomeBadge");

    if (badge && name) {
        badge.textContent = `${name}`;
    }
}