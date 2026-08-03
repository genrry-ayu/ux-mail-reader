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

const sourceLinks = document.querySelectorAll("[data-source-link]");
const sourceGroups = document.querySelectorAll("[data-source-group]");

const setActiveSource = (source) => {
  sourceLinks.forEach((link) => {
    const isActive = link.dataset.sourceLink === source;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const sourceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSource(entry.target.dataset.sourceGroup);
      }
    });
  },
  { rootMargin: "-18% 0px -70% 0px", threshold: 0 },
);

sourceGroups.forEach((group) => sourceObserver.observe(group));
sourceLinks.forEach((link) => {
  link.addEventListener("click", () => setActiveSource(link.dataset.sourceLink));
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
