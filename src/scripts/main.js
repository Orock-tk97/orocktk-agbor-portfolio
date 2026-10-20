const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const htmlRoot = document.documentElement;

// Theme toggle (initial theme is set inline in <head> to avoid a flash)
document.getElementById("theme-toggle")?.addEventListener("click", () => {
  const goingLight = htmlRoot.classList.contains("dark");
  htmlRoot.classList.toggle("dark", !goingLight);
  try { localStorage.setItem("theme", goingLight ? "light" : "dark"); } catch (e) {}
});

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
function setMenu(open) {
  mobileMenu.classList.toggle("hidden", !open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuIcon.className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
menuToggle?.addEventListener("click", () => setMenu(mobileMenu.classList.contains("hidden")));
mobileMenu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Contact form -> Web3Forms (delivers to site.email)
document.getElementById("contact-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const status = document.getElementById("form-status");
  const button = document.getElementById("contact-submit");
  const data = new FormData(form);
  const service = data.get("service") || "Inquiry";
  data.set("subject", `Project Inquiry: ${service}`);

  const idleCopy = "Your message is sent to my email. I usually reply within a few days.";
  status.textContent = "Sending…";
  button.disabled = true;

  try {
    const res = await fetch(form.action, { method: "POST", body: data });
    const json = await res.json();
    if (json.success) {
      form.reset();
      status.textContent = "Message sent. I’ll get back to you by email.";
      status.classList.remove("text-red-600", "dark:text-red-400");
      status.classList.add("text-emerald-600", "dark:text-emerald-400");
    } else {
      status.textContent = json.message || "Could not send. Please email me directly.";
      status.classList.add("text-red-600", "dark:text-red-400");
    }
  } catch {
    status.textContent = "Network error. Please email me directly.";
    status.classList.add("text-red-600", "dark:text-red-400");
  } finally {
    button.disabled = false;
    setTimeout(() => {
      status.classList.remove("text-red-600", "dark:text-red-400", "text-emerald-600", "dark:text-emerald-400");
      if (status.textContent !== idleCopy) status.textContent = idleCopy;
    }, 8000);
  }
});

// Reveal on scroll
if (!reduceMotion && "IntersectionObserver" in window) {
  const targets = document.querySelectorAll(
    "section .mb-14, #projects .grid > article, #services .grid > article, #contact .grid > div, #about .grid > div:first-child, #about .space-y-8 > *"
  );
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("is-visible");
      io.unobserve(el);
      setTimeout(() => { el.classList.remove("reveal", "is-visible"); el.style.transitionDelay = ""; }, 1500);
    });
  }, { threshold: 0.12 });
  targets.forEach((el) => {
    const idx = Array.prototype.indexOf.call(el.parentElement.children, el);
    el.style.transitionDelay = Math.min(idx, 5) * 90 + "ms";
    el.classList.add("reveal");
    io.observe(el);
  });
}

// Typewriter (first phrase is real HTML text, so crawlers see it)
(function () {
  const textEl = document.getElementById("tw-text");
  if (!textEl || reduceMotion) return;
  const phrases = [
    "Building interpretable machine learning models.",
    "Engineering dependable full-stack software.",
    "Turning data into practical AI solutions.",
  ];
  let i = 0, j = 0, deleting = false;
  textEl.textContent = "";
  function tick() {
    const full = phrases[i];
    if (!deleting) {
      j++; textEl.textContent = full.slice(0, j);
      if (j === full.length) { deleting = true; return setTimeout(tick, 1800); }
      return setTimeout(tick, 55);
    }
    j--; textEl.textContent = full.slice(0, j);
    if (j === 0) { deleting = false; i = (i + 1) % phrases.length; return setTimeout(tick, 400); }
    setTimeout(tick, 28);
  }
  setTimeout(tick, 900);
})();

// Coming-soon modal
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalBar = document.getElementById("modal-bar");
const pctEl = document.getElementById("modal-pct");
let countTimer, lastFocus = null;

function openModal(title, pct) {
  lastFocus = document.activeElement;
  modalTitle.textContent = title;
  modalBar.style.width = "0%";
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => requestAnimationFrame(() => { modalBar.style.width = pct + "%"; }));
  clearInterval(countTimer);
  if (reduceMotion) pctEl.textContent = pct;
  else {
    let n = 0; pctEl.textContent = 0;
    countTimer = setInterval(() => {
      n = Math.min(pct, n + Math.max(1, Math.round(pct / 40)));
      pctEl.textContent = n;
      if (n >= pct) clearInterval(countTimer);
    }, 25);
  }
  document.getElementById("modal-done").focus();
}
function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
  lastFocus?.focus();
}
document.querySelectorAll("[data-coming-soon]").forEach((card) =>
  card.addEventListener("click", () => openModal(card.dataset.comingSoon, parseInt(card.dataset.progress, 10) || 0))
);
["modal-close", "modal-done", "modal-backdrop"].forEach((id) =>
  document.getElementById(id)?.addEventListener("click", closeModal)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
