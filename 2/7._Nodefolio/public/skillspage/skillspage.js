(async function getSkills(){
    const response = await fetch("/api/skills");
    const result = await response.json();
 
    const skillsDiv = document.getElementById("skills");
 
    result.skills.map(skills => {
        const skillDiv = document.createElement("div");
 
        const skillsTitle = document.createElement("h3");
        skillsTitle.classList.add("project-title");
        skillsTitle.innerText = skills.title
 
        const skillsDescription = document.createElement("p");
        skillsDescription.classList.add("project-description");
        skillsDescription.innerText = skills.description;
 
        const skillsTechnology = document.createElement("p")
        skillsTechnology.classList.add("project-technologies")
        skillsTechnology.innerText = "Technologies: " + skills.technology;

        const skillsProgress = document.createElement("p");
        skillsProgress.classList.add("langauges");
        skillsProgress.innerText = "progress:  " + skills.progress;
        
        const skillsBar = document.createElement("div");
        skillsBar.innerHTML = `<div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:${skills.progress}%"> ${skills.progress} / 100 %</div></div>`;
        
        skillDiv.appendChild(skillsTitle);
        skillDiv.appendChild(skillsDescription);
        skillDiv.appendChild(skillsTechnology);
        skillDiv.appendChild(skillsBar);
        skillsDiv.appendChild(skillDiv);
        
    });
})();