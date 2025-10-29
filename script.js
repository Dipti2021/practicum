// Show only the selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section, #landing");
  sections.forEach((sec) => {
    if (sec.id === sectionId) sec.style.display = "block";
    else sec.style.display = "none";
  });

  // Scroll to top when a section is shown
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Show landing page initially
document.addEventListener("DOMContentLoaded", () => {
  showSection("landing");
});
