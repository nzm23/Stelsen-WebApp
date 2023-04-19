// SCRIPT FOR OPTIONS IN THE FORM

// Get references to the select boxes
const Project = document.getElementById("Project");
const Building = document.getElementById("Building");
const Device = document.getElementById("Device");
const Model = document.getElementById("Model");

// Define the options for each fruit
const options = {
  ZINNIA_TOWER: ["North", "South"],
  ESCALADE: ["Tower 1", "Tower 2"],
  PENINSULA_GARDEN_MIDTOWN_HOMES: ["Maple", "Molave", "Magnolia"],
  Strobe: ["Horn", "Speaker"],
  Module: ["SIGA-CC1", "SIGA-CT1", "Siga-WTM"]
};

// Populate the second list based on the first list's selection
Project.addEventListener("change", () => {
  // Clear the second list
  Building.innerHTML = " ";

  // Get the selected fruit from the first list
  const selectedProject = Project.value;

  // Add the options for the selected fruit to the second list
  options[selectedProject].forEach(variety => {
    const option = document.createElement("option");
    option.value = variety;
    option.textContent = variety;
    Building.appendChild(option);
  });
});

// Populate the second list based on the first list's selection
Device.addEventListener("change", () => {
  // Clear the second list
  Model.innerHTML = " ";

  // Get the selected fruit from the first list
  const selectedDevice= Device.value;

  // Add the options for the selected fruit to the second list
  options[selectedDevice].forEach(variety => {
    const option = document.createElement("option");
    option.value = variety;
    option.textContent = variety;
    Model.appendChild(option);
  });
});
