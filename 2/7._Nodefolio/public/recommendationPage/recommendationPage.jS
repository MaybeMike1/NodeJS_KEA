console.log("File from recommendation folder");

(async function getRecommendation(){
    const response = await fetch("/api/recommendations");
    const result = await response.json();
 
    const recommendationsDiv = document.getElementById("recommendations");
 
    result.recommendations.map(recommendation  => {
        const recommendationDiv = document.createElement("div");
 
        const recommendationWorkPlace = document.createElement("h3");
        recommendationWorkPlace.classList.add("work-place");
        recommendationWorkPlace.innerText = "Work Place: " + recommendation.workplace;
 
        const recommendationType = document.createElement("p");
        recommendationType.classList.add("recommendation-Type");
        recommendationType.innerText = "Recommendation Type : " + recommendation.recommendationType;
 
 
        const recommendationCommune = document.createElement("p");
        recommendationCommune.classList.add("commune");
        recommendationCommune.innerText = "Commune of institution: " + recommendation.commune;

        const recommendationWorkingPosition = document.createElement("p");
        recommendationWorkingPosition.classList.add("working-position");
        recommendationWorkingPosition.innerText = "Working Position: " + recommendation.workingPosition;

        const certificate = document.createElement("p");
        certificate.classList.add("certificate-url");
        certificate.innerText = "IMG URL: " + certificate.certificateUrl;

        const certificateIMGTag = document.createElement("div");
        certificateIMGTag.innerHTML = `<img src="${recommendation.certificateUrl}"><br>`;
 
        recommendationsDiv.appendChild(recommendationWorkPlace);
        recommendationsDiv.appendChild(recommendationType);
        recommendationsDiv.appendChild(recommendationCommune)
        recommendationsDiv.appendChild(recommendationWorkingPosition)
        recommendationsDiv.appendChild(certificateIMGTag);
   

        recommendationsDiv.appendChild(recommendationDiv);
        //
    });
})();