export function initImagePreview() {
    document.addEventListener("click", event => {
        const element = event.target.closest(".preview-image");

        if (!element) return;

        const previewImage =
            document.getElementById("imagePreview");

        const previewTitle =
            document.getElementById("imagePreviewTitle");

        previewImage.src = element.dataset.image;
        previewImage.alt = element.dataset.alt;

        previewTitle.textContent =
            element.dataset.title || "Image Preview";
    });
}


