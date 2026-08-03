const progressBar = document.querySelector("#progressBar");
const revealItems = document.querySelectorAll(".reveal");
const dialog = document.querySelector("#imageDialog");
const dialogImage = dialog.querySelector("img");
const dialogClose = dialog.querySelector(".dialog-close");

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
  revealObserver.observe(item);
});

document.querySelectorAll(".image-button").forEach((button) => {
  button.addEventListener("click", () => {
    dialogImage.src = button.dataset.image;
    dialogImage.alt = button.dataset.alt;
    dialog.showModal();
  });
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
