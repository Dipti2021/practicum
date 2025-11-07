// Show/Hide Sections
function showSection(sectionId) {
  const allSections = document.querySelectorAll("section");
  allSections.forEach((sec) => (sec.style.display = "none"));

  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Show landing page by default
window.onload = () => showSection("landing");

// Image Lightbox
document
  .querySelectorAll(
    ".about-images img, .experience-evidence img, .photo-gallery img"
  )
  .forEach((img) => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.cssText =
        "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;cursor:pointer;z-index:2000;";
      const enlarged = document.createElement("img");
      enlarged.src = img.src;
      enlarged.style.cssText =
        "max-width:90%;max-height:90%;border-radius:15px;box-shadow:0 4px 15px rgba(0,0,0,0.5);";
      overlay.appendChild(enlarged);
      overlay.addEventListener("click", () =>
        document.body.removeChild(overlay)
      );
      document.body.appendChild(overlay);
    });
  });
