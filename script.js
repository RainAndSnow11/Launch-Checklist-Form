// Write your JavaScript code here!
  window.addEventListener("load", function() {

     let form = document.querySelector("form");
     form.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoWeight = document.querySelector("input[name=cargoWeight]");
        if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoWeight.value === "") {
          alert("All fields are required!");
          event.preventDefault();
        } else if (isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoWeight.value) === true) {
          alert("Input for one or more fields is invalid!");
          event.preventDefault();
        } else {

          let oldPilotStatus = document.getElementById("pilotStatus");
          oldPilotStatus.style.visibility="visible";
          oldPilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;

          let oldcopilotStatus = document.getElementById("copilotStatus");
          oldcopilotStatus.style.visibility="visible";
          oldcopilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;

          let oldLaunchStatus = document.getElementById("launchStatus");
          let oldFuelStatus = document.getElementById("fuelStatus");
          oldFuelStatus.style.visibility="visible";
          let oldCargoStatus = document.getElementById("cargoStatus");
          oldCargoStatus.style.visibility="visible";


          if (fuelLevel.value < 10000){
            oldFuelStatus.innerHTML = "Fuel level too low for launch";
            oldLaunchStatus.style.color="red";
            oldLaunchStatus.innerHTML = "Shuttle not ready for launch";
          }

          if (cargoWeight.value > 10000){
            oldCargoStatus.innerHTML = "Cargo mass too high for launch";
            oldLaunchStatus.style.color="red";
            oldLaunchStatus.innerHTML = "Shuttle not ready for launch";
          }

          if (fuelLevel.value >= 10000 && cargoWeight.value <= 10000){
            oldLaunchStatus.style.color= "green";
            oldLaunchStatus.innerHTML = "Shuttle is ready for launch";
        }

        event.preventDefault();
     }


   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
     response.json().then(function(json){
       const div = document.getElementById("missionTarget");
       div.innerHTML = `
       <h2>Mission Destination</h2>
       <ol>
         <li>Name: ${json[5].name}</li>
         <li>Diameter: ${json[5].diameter}</li>
         <li>Star: ${json[5].star}</li>
         <li>Distance from Earth: ${json[5].distance}</li>
         <li>Number of Moons: ${json[5].moons}</li>
      </ol>
      <img src="${json[5].image}">
      `;
     });
   });
  });

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
