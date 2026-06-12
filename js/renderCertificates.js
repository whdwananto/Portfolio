import { certificates } from "./data-certificates.js";

export function renderCertificates() {
    const container =
        document.getElementById("certificateList");

    if (!container) return;

    container.innerHTML = certificates
        .map(
            cert => `
            <div class="col-md-4 d-flex">
                <div class="card-theme h-120">
                    <img
                        src="${cert.url}"
                        class="card-img-top certificate-img"
                        alt="${cert.alt}"
                    >

                    <div class="card-body d-flex flex-column">
                        <h5 class="fw-bold">
                            ${cert.title}
                        </h5>

                        <p class="text-muted">
                            ${cert.issuer}
                        </p>

                        <button
                            class="btn btn-info btn-hover mt-auto preview-image"
                            data-image="${cert.url}"
                            data-title="${cert.title}"
                            data-alt="${cert.alt}"
                            data-bs-toggle="modal"
                            data-bs-target="#imagePreviewModal">
                                View Certificate
                        </button>
                    </div>
                </div>
            </div>
        `
        )
        .join("");
}