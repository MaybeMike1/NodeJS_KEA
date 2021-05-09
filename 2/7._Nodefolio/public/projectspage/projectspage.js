/* let today = new Date();
let currentYear = today.getFullYear();
console.log(currentYear);

document.getElementById('footer-copyright').innerText = "Copyright  © " + currentYear;
 */
console.log("File from projects folder")


/* const projects = fetch('http://localhost:8080/api/projects')
  .then(response => response.json())
  .then(json => document.getElementById("projects").append(JSON.stringify(json)))
  .then(); */


  console.log('hello there');
(async function getProjects(){
    const response = await fetch("/api/projects");
    const result = await response.json();
 
    const projectsDiv = document.getElementById("projects");
 
    result.projects.map(project =>{
        const projectDiv = document.createElement("div");
 
        const projectTitle = document.createElement("h3");
        projectTitle.classList.add("project-title");
        projectTitle.innerText = project.title
 
        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.innerText = project.description
 
        const projectTechnologies = document.createElement("p")
        projectTechnologies.classList.add("project-technologies")
        projectTechnologies.innerText = "Technologies: " + project.techUsed
 
        const projectLink = document.createElement("a");
        projectLink.classList.add("project-link")
        projectLink.innerText = "See more"
        projectLink.href = project.gitLink

        const projectStartDate = document.createElement("p");
        projectStartDate.classList.add("startDate");
        projectStartDate.innerText = "Start Date: " + project.startDate.substring(0,10);

        const projectEndDate = document.createElement("p");
        projectEndDate.classList.add("endDate");
        projectEndDate.innerText = "End Date: " + project.endDate.substring(0,10);

        const projectLangauges = document.createElement("p");
        projectLangauges.classList.add("langauges");
        projectLangauges.innerText = "Langauges used: " + project.language;
 
        projectDiv.appendChild(projectTitle)
        projectDiv.appendChild(projectDescription)
        projectDiv.appendChild(projectTechnologies)
        projectDiv.appendChild(projectStartDate)
        projectDiv.appendChild(projectEndDate);
        projectsDiv.appendChild(projectDiv)
        projectDiv.appendChild(projectLangauges);
        projectDiv.appendChild(projectLink)
    });
})();