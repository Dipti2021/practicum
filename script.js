// ===== Show/Hide Sections =====
function showSection(sectionId) {
  const allSections = document.querySelectorAll("section");
  allSections.forEach((sec) => {
    sec.style.display = "none";
  });

  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Show landing page by default
window.onload = function () {
  showSection("landing");
};

// ===== Image Lightbox for About Me =====
const aboutImages = document.querySelectorAll(".about-text img");

aboutImages.forEach((img) => {
  img.addEventListener("click", () => {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.cursor = "pointer";
    overlay.style.zIndex = 2000;

    // Create enlarged image
    const enlargedImg = document.createElement("img");
    enlargedImg.src = img.src;
    enlargedImg.style.maxWidth = "90%";
    enlargedImg.style.maxHeight = "90%";
    enlargedImg.style.borderRadius = "15px";
    enlargedImg.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";
    overlay.appendChild(enlargedImg);

    // Close on click
    overlay.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
  });
});
