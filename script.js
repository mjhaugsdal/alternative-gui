// Sett innværende år i footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobilmeny-toggle
const toggle = document.querySelector(".nav-toggle");
const navList = document.getElementById("primary-nav");

toggle.addEventListener("click", () => {
  const open = navList.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Lukk meny" : "Åpne meny");
});

// Lukk mobilmeny når man klikker på en lenke
navList.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navList.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Marker aktiv lenke basert på seksjon i viewport
const sections = document.querySelectorAll("main section[id]");
const links = navList.querySelectorAll("a");

const linkFor = (id) =>
  Array.from(links).find((a) => a.getAttribute("href") === `#${id}`);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        const link = linkFor(entry.target.id);
        if (link) link.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);

sections.forEach((s) => sectionObserver.observe(s));

// Fade-in ved scrolling
const revealEls = document.querySelectorAll(
  ".section h2, .lead, .card, .gallery-item, .contact-form, .contact-list, .socials"
);
revealEls.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => revealObserver.observe(el));

