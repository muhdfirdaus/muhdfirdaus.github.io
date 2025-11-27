function renderAbout() {
  document.getElementById("about-text").textContent = aboutText.trim();
}

function renderSkills() {
  const container = document.getElementById("skills-list");
  skills.forEach(skill => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = skill;
    container.appendChild(chip);
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");

  projects.forEach(project => {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = project.name;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${project.role} • ${project.period}`;

    const desc = document.createElement("p");
    desc.textContent = project.description.trim();

    const tech = document.createElement("p");
    tech.className = "meta";
    tech.textContent = "Tech: " + project.tech.join(", ");

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(desc);
    card.appendChild(tech);

    if (project.links && project.links.length > 0) {
      const linkList = document.createElement("p");
      project.links.forEach((link, index) => {
        const a = document.createElement("a");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = link.label;
        linkList.appendChild(a);
        if (index < project.links.length - 1) {
          linkList.appendChild(document.createTextNode(" • "));
        }
      });
      card.appendChild(linkList);
    }

    grid.appendChild(card);
  });
}

function renderExperience() {
  const container = document.getElementById("experience-list");

  experience.forEach(item => {
    const el = document.createElement("article");
    el.className = "timeline-item";

    const title = document.createElement("h3");
    title.textContent = `${item.title} @ ${item.company}`;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = item.period;

    const desc = document.createElement("p");
    desc.textContent = item.description.trim();

    el.appendChild(title);
    el.appendChild(meta);
    el.appendChild(desc);

    container.appendChild(el);
  });
}

function setYear() {
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  setYear();
});
