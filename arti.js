document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const subtitleInput = document.getElementById('subtitle-input');
    const viewProjectsBtn = document.getElementById('view-projects-btn');
    const displayName = document.getElementById('display-name');
    const displaySubtitle = document.getElementById('display-subtitle');
    const projectsDisplay = document.getElementById('projects-display');

    function updateDisplay() {
        displayName.textContent = nameInput.value;
        displaySubtitle.textContent = subtitleInput.value;
    }

    updateDisplay();

    nameInput.addEventListener('input', updateDisplay);
    subtitleInput.addEventListener('input', updateDisplay);

    viewProjectsBtn.addEventListener('click', () => {
        const projects = [
            { name: "Project 1", desc: "A responsive landing page" },
            { name: "Project 2", desc: "An interactive quiz app" },
            { name: "Project 3", desc: "A dynamic shopping cart" }
        ];
        if (projectsDisplay.style.display === 'none' || projectsDisplay.innerHTML === '') {
            projectsDisplay.innerHTML = "";
            projects.forEach(project => {
                projectsDisplay.innerHTML += `<p><b>${project.name}</b>: ${project.desc}</p>`;
            });
            projectsDisplay.style.display = 'block';
        } else {
            projectsDisplay.style.display = 'none';
        }
    });
});