function renderGallery(project) {
    const container = document.getElementById("gallery-container");

    if (!container) return;

    container.innerHTML = projectImages[project]
        .map((img, index) => `
            <div class="col-md-4">
                <img
                    src="${img}"
                    class="img-fluid rounded screenshot-img preview-image"
                    alt="Screenshot ${index + 1}"
                    data-image="${img}"
                    data-title="Screenshot ${index + 1}"
                    data-bs-toggle="modal"
                    data-bs-target="#imagePreviewModal"
                >
            </div>
        `)
        .join("");
}