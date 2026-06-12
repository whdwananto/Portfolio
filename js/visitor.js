export function simpanNama() {
    const nama = document
        .getElementById('nama')
        .value
        .trim();

    if (!nama) {
        alert('Silakan masukkan nama terlebih dahulu.');
        return;
    }

    localStorage.setItem("namaPengunjung", nama);

    localStorage.setItem("lang", currentLang);

    window.location.href = 'main.html';
}

window.simpanNama = simpanNama;

export function updateVisitorName() {
    const nama = localStorage.getItem("namaPengunjung");
    const badge = document.getElementById("welcomeBadge");

    if (badge && nama) {
        badge.textContent = `Selamat Datang ${nama}`;
    }
}