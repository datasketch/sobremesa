const triggers = Array.from(document.querySelectorAll("[data-modal]"));

const modals = new Map();
const dismissButtons = new Map();

const searchEl = document.getElementById("search");
const cards = Array.from(document.querySelectorAll(".card"));

const removeAccents = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function validateFilters() {
  const search = searchEl.value;

  cards.forEach((card) => {
    card.style.display = "none";
    const hasSearch = removeAccents(card.dataset.title).includes(
      removeAccents(search)
    );

    if (hasSearch) {
      card.style.display = "block";
    }
  });
}

searchEl.addEventListener("input", () => {
  validateFilters();
});

triggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const modalId = this.dataset.modal;
    if (!modals.has(modalId)) {
      const modal = document.getElementById(modalId);
      modals.set(modalId, modal);
    }

    const modal = modals.get(modalId);

    function escKeyHandler(event) {
      if (event.keyCode !== 27) return;
      window.removeEventListener("keyup", escKeyHandler);
      modal.classList.remove("is-open");
    }

    if (!dismissButtons.has(modalId)) {
      const dismissButton = modal.querySelector("button");
      dismissButton.addEventListener("click", () => {
        window.removeEventListener("keyup", escKeyHandler);
        modal.classList.remove("is-open");
      });
      dismissButtons.set(modalId, dismissButton);
    }

    const dismissButton = dismissButtons.get(modalId);

    modal.classList.add("is-open");
    dismissButton.focus();

    window.addEventListener("keyup", escKeyHandler);
    const popupButton = modal.querySelector(".popup-button");
    const popupContent = modal.querySelector(".popup-content");

    popupButton.addEventListener("click", () => {
      popupContent.classList.remove("hidden");
      popupButton.classList.add("bg-black", "text-white");
      popupButton.classList.remove("text-chocolate");
    });
  });
});

window.addEventListener("load", () => {
  const pathname = decodeURIComponent(window.location.pathname);
  const segments = pathname.split("/").filter(Boolean);
  const slug = segments[segments.length - 1];

  const modals = document.querySelectorAll("[data-slug]");
  const modal = Array.from(modals).find((el) => {
    const decode = decodeURIComponent(el.getAttribute("data-slug"));
    return decode === slug;
  });

  if (!modal) return;

  modal.classList.add("is-open");

  modal.querySelector("button").addEventListener("click", () => {
    modal.classList.remove("is-open");
  });

  window.addEventListener("keyup", (e) => {
    if (e.code === "Escape") {
      modal.classList.remove("is-open");
    }
  });

  const popupButton = modal.querySelector(".popup-button");
  const popupContent = modal.querySelector(".popup-content");

  popupButton.addEventListener("click", () => {
    popupContent.classList.remove("hidden");
    popupButton.classList.add("bg-black", "text-white");
    popupButton.classList.remove("text-chocolate");
  });
});
