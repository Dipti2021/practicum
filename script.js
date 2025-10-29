function showSection(sectionId) {
  // Hide all sections including landing
  const allSections = document.querySelectorAll("section");
  allSections.forEach((sec) => (sec.style.display = "none"));

  // Show the clicked section
  const section = document.getElementById(sectionId);
  if (section) section.style.display = "block";
}

// Show landing page by default
window.onload = function () {
  showSection("landing");
};
