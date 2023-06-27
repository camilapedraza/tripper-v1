console.log("coucou")

// const accordions = document.querySelectorAll(".accordion");

// accordions.forEach((accordion) => {
//   accordion.addEventListener("click", () => {
//     accordion.classList.toggle("active");
//   });
// });

// const accordions = document.querySelectorAll(".accordion");

// accordions.forEach((accordion) => {
//   const content = accordion.nextElementSibling;

//   accordion.addEventListener("click", () => {
//     accordion.classList.toggle("active");
//     content.style.maxHeight = accordion.classList.contains("active") ? `${content.scrollHeight}px` : 0;
//   });
// });

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const panel = accordion.querySelector(".panel");
  const icon = accordion.querySelector("i.fa-chevron-down");

  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    if (accordion.classList.contains("active")) {
      panel.style.maxHeight = "2500px";
      panel.style.transition = "max-height 0.3s ease";
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      panel.style.maxHeight = "0";
      panel.style.transition = "max-height 0.3s ease";
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});
