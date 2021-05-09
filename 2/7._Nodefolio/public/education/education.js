console.log("File from education folder");

(async function getEducations(){
    const response = await fetch("/api/education");
    const result = await response.json();
 
    const educationsDiv = document.getElementById("education");
 
    result.educations.map(education  => {
        const educationDiv = document.createElement("div");
 
        const educationTitle = document.createElement("h3");
        educationTitle.classList.add("education-title");
        educationTitle.innerText = "School Name: " + education.title;
 
        const educationDescription = document.createElement("p");
        educationDescription.classList.add("project-description");
        educationDescription.innerText = "Description : " + education.description;
 
 
        const educationStartDate = document.createElement("p");
        educationStartDate.classList.add("startDate");
        educationStartDate.innerText = "Start Date: " + education.startDate.substring(0,10);

        const educationEndDate = document.createElement("p");
        educationEndDate.classList.add("endDate");
        educationEndDate.innerText = "End Date: " + education.endDate.substring(0,10);

        const educationSubject = document.createElement("p");
        educationSubject.classList.add("subjects");
        educationSubject.innerText = "Subjects learned: " + education.subjects;
        
        const educationSchool = document.createElement("p");
        educationSchool.classList.add("school");
        educationSchool.innerText = "Education Level: " + education.school;
 
        educationDiv.appendChild(educationTitle);
        educationDiv.appendChild(educationDescription);
        educationDiv.appendChild(educationStartDate)
        educationDiv.appendChild(educationEndDate)
        educationDiv.appendChild(educationSubject);
        educationDiv.appendChild(educationSchool);

        educationsDiv.appendChild(educationDiv);
        
    });
})();