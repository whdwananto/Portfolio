import { certificates } from "./data-certificates.js";

export function renderCertificates() {
    const container = document.getElementById("certificateList");

    if (!container) return;

    container.innerHTML = certificates
        .map(
            cert => {
                const title =
                    typeof cert.title === "object"
                        ? cert.title[currentLang]
                        : cert.title;

                const issuer =
                    typeof cert.issuer === "object"
                        ? cert.issuer[currentLang]
                        : cert.issuer;

                return `
            <div class="col-md-4 d-flex">
                <div class="card-theme h-120">
                    <img
                        src="${cert.url}"
                        class="card-img-top certificate-img"
                        alt="${cert.alt}"
                    >

                    <div class="card-body d-flex flex-column">
                        <h5 class="fw-bold">
                            ${cert.title[currentLang] || cert.title}
                        </h5>
                    <p>
                            ${cert.issuer[currentLang] || cert.issuer}
                    </p>

                    ${cert.status ? `
                        <span class="badge bg-warning text-dark mb-3" data-key= "certificates_status_pending">
                            ${LANG[currentLang].certificates_status_pending}
                        </span>
                    ` : ""}
                        

                        <button
                            class="btn btn-info btn-hover mt-auto preview-image"
                            data-image="${cert.url}"
                            data-title="${cert.title}"
                            data-alt="${cert.alt}"
                            data-bs-toggle="modal"
                            data-bs-target="#imagePreviewModal"
                            data-key="certificates_preview">
                              ${LANG[currentLang].certificates_preview}
                        </button>
                    </div>
                </div>
            </div>
        `
            })
        .join("");
}