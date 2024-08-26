const triggers = Array.from(document.querySelectorAll("[data-modal]"));

const modals = new Map();
const dismissButtons = new Map();

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
      popupButton.classList.add('bg-black', 'text-white')
      popupButton.classList.remove('text-chocolate')
    });
  });
});

window.addEventListener("load", () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (!urlParams.has("modal")) return;

  const value = urlParams.get("modal");

  const modals = document.querySelectorAll("[data-name]");
  const modal = Array.from(modals).find(
    (el) => el.getAttribute("data-name") === value
  );

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
    popupButton.classList.add('bg-black', 'text-white')
    popupButton.classList.remove('text-chocolate')
  });
});
