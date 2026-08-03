const progressBar = document.querySelector("#progressBar");
const index = document.querySelector(".issue-index");
const indexToggle = document.querySelector(".index-toggle");
const revealItems = document.querySelectorAll(".reveal");
const caseSections = document.querySelectorAll("[data-section]");
const navLinks = document.querySelectorAll(".case-nav a");
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

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${visible.target.id}`,
      );
    });
  },
  { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
);

caseSections.forEach((section) => sectionObserver.observe(section));

indexToggle.addEventListener("click", () => {
  const open = index.classList.toggle("is-open");
  indexToggle.setAttribute("aria-expanded", String(open));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    index.classList.remove("is-open");
    indexToggle.setAttribute("aria-expanded", "false");
  });
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
