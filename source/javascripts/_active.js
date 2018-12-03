document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
    document.querySelectorAll(".word").forEach((word) => {
    word.addEventListener("mouseover", (event) => {
      event.currentTarget.classList.add("active");
    });
    word.addEventListener("mouseleave", (event) => {
      event.currentTarget.classList.remove("active");
    });

  });
});




