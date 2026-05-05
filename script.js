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

// ---------- Lightbox for galleri ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox-image");
const btnClose = lightbox.querySelector(".lightbox-close");
const btnPrev = lightbox.querySelector(".lightbox-prev");
const btnNext = lightbox.querySelector(".lightbox-next");
const galleryImages = Array.from(
  document.querySelectorAll(".gallery .gallery-item img")
);
let currentIndex = 0;
let lastFocused = null;

function openLightbox(index) {
  currentIndex = index;
  showImage(currentIndex);
  lastFocused = document.activeElement;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  btnClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

function showImage(index) {
  const img = galleryImages[index];
  if (!img) return;
  lightboxImg.src = img.currentSrc || img.src;
  lightboxImg.alt = img.alt || "";
}

function navigate(delta) {
  currentIndex =
    (currentIndex + delta + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
}

galleryImages.forEach((img, i) => {
  img.addEventListener("click", () => openLightbox(i));
  img.setAttribute("tabindex", "0");
  img.setAttribute("role", "button");
  img.setAttribute("aria-label", "Åpne bilde i full størrelse");
  img.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLightbox(i);
    }
  });
});

btnClose.addEventListener("click", closeLightbox);
btnPrev.addEventListener("click", () => navigate(-1));
btnNext.addEventListener("click", () => navigate(1));
lightboxImg.addEventListener("click", closeLightbox);

// Klikk på backdrop (utenfor bilde/knapper) lukker
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.hidden) return;
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") navigate(-1);
  else if (e.key === "ArrowRight") navigate(1);
});

