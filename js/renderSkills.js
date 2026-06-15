import { skills, tools } from "./data-skills.js";

export function renderSkills() {
    const container = document.getElementById("skills-container");

    if (!container) return;

    container.innerHTML = skills.map(skills => `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="card skill-card border-0 h-100">
                <div class="card-body text-center">
                    ${skills}
                </div>
            </div>
        </div>
    `).join('');
}

export function renderTools() {
    const container = document.getElementById("tools-container");

    if (!container) return;

    container.innerHTML = tools.map(tools => `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="card skill-card border-0 h-100">
                <div class="card-body text-center">
                    ${tools}
                </div>
            </div>
        </div>
    `).join('');
}