import { updateVisitorName } from "./visitor.js";
import { renderCertificates } from "./renderCertificates.js";
import { initImagePreview } from "./imagePreview.js";
import { renderSkills, renderTools } from "./renderSkills.js";

async function loadSections() {
    const sections = document.querySelectorAll("[data-section]");

    for (const el of sections) {
        const section = el.dataset.section;

        try {
            const response = await fetch(`sections/${section}.html`);

            if (!response.ok) {
                throw new Error(`File ${section}.html tidak ditemukan`);
            }

            el.innerHTML = await response.text();
        } catch (error) {
            console.error(error);
        }
    }
    
    if (window.applyLang) {
        window.applyLang(
            localStorage.getItem("lang") || "id"
        );
    }

    updateVisitorName();
    renderCertificates();
    renderSkills();
    renderTools();
    initImagePreview();
}

document.addEventListener("DOMContentLoaded", loadSections);