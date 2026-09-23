(() => {
  const config = window.PORTFOLIO_CONFIG || {};
  document.querySelectorAll("[data-link]").forEach((link) => {
    const key = link.dataset.link;
    const value = (config[key] || "").trim();
    if (value) {
      link.href = key === "email" && !value.startsWith("mailto:") ? `mailto:${value}` : value;
      if (key !== "email") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    } else if (key === "email") {
      link.href = "#contato";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.alert("Adicione seu endereço de e-mail em config.js para ativar este link.");
      });
    } else {
      link.href = "#contato";
      link.addEventListener("click", (event) => {
        event.preventDefault();
        window.alert(`Adicione seu link de ${key === "github" ? "GitHub" : "LinkedIn"} em config.js para ativar este botão.`);
      });
    }
  });

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    navLinks.classList.toggle("open", open);
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navLinks.classList.remove("open");
  }));

  document.querySelector("#year").textContent = new Date().getFullYear();
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));
    // Progressive enhancement: only hide reveal elements after observation is active.
    document.documentElement.classList.add("js");
    // Safety net in case the observer is interrupted; no content stays hidden.
    window.setTimeout(() => {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      observer.disconnect();
    }, 1800);
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }
})();
