function renderFeatures(lang, featureKey) {
    const container = document.getElementById("feature-container");

    if (!container) return;
    const features = LANG[lang][featureKey];

    if (!features) return;

    container.innerHTML = features
        .map(feature => `
            <div class="col-md-4 mb-3">
                <div class="card feature-card p-3 h-100">
                    <h4>${feature.title}</h4>
                    <p>${feature.desc}</p>
                </div>
            </div>
        `)
        .join("");
}