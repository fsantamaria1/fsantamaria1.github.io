function changeLanguage() {
    const lang = document.getElementById("languageSelect").value;
    fetch(`./translations/${lang}.json`)
    .then(response => response.json())
    .then(data => {
        document.getElementById("heroName").textContent = data.heroName;
        document.getElementById("heroTitle").textContent = data.heroTitle;
        document.getElementById("heroTagline").textContent = data.heroTagline;
        document.getElementById("journeyTitle").textContent = data.journeyTitle;
        document.getElementById("experienceTitle").textContent = data.experienceTitle;
        document.getElementById("skillsTitle").textContent = data.skillsTitle;
        document.getElementById("learningTitle").textContent = data.learningTitle;
        document.getElementById("goalsTitle").textContent = data.goalsTitle;

        // Journey timeline
        const journeyHTML = data.journey.map(item => `
            <div class="timeline-item">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-desc">${item.desc}</div>
            </div>
        `).join('');
        document.getElementById("journeyContent").innerHTML = journeyHTML;

        // Experience
        const expHTML = `
            <p style="font-weight: 600; color: var(--accent); margin-bottom: 1rem;">${data.experience.company}</p>
            ${data.experience.highlights.map(h => `<p style="color: var(--text-secondary); margin-bottom: 0.75rem;">• ${h}</p>`).join('')}
        `;
        document.getElementById("experienceContent").innerHTML = expHTML;

        // Skills
        const skillsHTML = data.skills.map(skill => `
            <div class="skill-item">
                <div class="skill-category">${skill.category}</div>
                <div>${skill.name}</div>
            </div>
        `).join('');
        document.getElementById("skillsContent").innerHTML = skillsHTML;

        // Learning
        document.getElementById("learningContent").innerHTML = `<p style="color: var(--text-secondary);">${data.learning}</p>`;

        // Goals
        document.getElementById("goalsIntro").innerHTML = `<p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${data.goalsIntro}</p>`;
        const goalsHTML = data.goals.map(goal => `<li class="goal-item">${goal}</li>`).join('');
        document.getElementById("goalsList").innerHTML = goalsHTML;
    })

}

function changeTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function loadInitialLanguage() {
    const lang = document.getElementById("languageSelect").value;
    changeLanguage();
}

function loadInitialTheme() {
    changeTheme("dark");
}

loadInitialTheme();
loadInitialLanguage();