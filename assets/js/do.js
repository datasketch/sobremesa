const triggers = Array.from(document.querySelectorAll("[data-modal]"));

const modals = new Map();
const dismissButtons = new Map();

const searchEl = document.getElementById("search");
const topicEl = document.getElementById("topic");
const languageEl = document.getElementById("language");
const forWhomEl = document.getElementById("for-whom");

const cards = Array.from(document.querySelectorAll(".card"));

const toolsPreview = document.getElementById('tools-preview');
const toolsViewMore = document.getElementById('tools-view-more');
const buttonTools = document.getElementById('button-tools')


const recommendedToolsPreview = document.getElementById('recommended-tools-preview');
const recommendedToolsViewMore = document.getElementById('recommended-tools-view-more');
const buttonRecommendedTools = document.getElementById('button-recommended-tools')


buttonTools && buttonTools.addEventListener('click', () => {
  if (buttonTools.innerHTML === 'Ver todas las herramientas') {
    buttonTools.innerHTML = 'Ver menos herramientas'
    toolsPreview.classList.add('hidden')
    toolsViewMore.classList.remove('hidden')
    document.getElementById('scroll-to').scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    buttonTools.innerHTML = 'Ver todas las herramientas'
    toolsPreview.classList.remove('hidden')
    toolsViewMore.classList.add('hidden')
    document.getElementById('scroll-to').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
})

buttonRecommendedTools && buttonRecommendedTools.addEventListener('click', () => {
  if (buttonRecommendedTools.innerHTML === 'Ver todas las herramientas recomendadas') {
    buttonRecommendedTools.innerHTML = 'Ver menos herramientas recomendadas'
    recommendedToolsPreview.classList.add('hidden')
    recommendedToolsViewMore.classList.remove('hidden')
    document.getElementById('scroll-to-2').scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    buttonRecommendedTools.innerHTML = 'Ver todas las herramientas recomendadas'
    recommendedToolsPreview.classList.remove('hidden')
    recommendedToolsViewMore.classList.add('hidden')
    document.getElementById('scroll-to-2').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
})

const removeAccents = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function validateFilters() {
  const search = searchEl.value;
  const topic = topicEl.value;
  const language = languageEl.value;
  const forWhom = forWhomEl.value;

  cards.forEach((card) => {
    card.style.display = "none";

    const hasSearch = removeAccents(card.dataset.title).includes(
      removeAccents(search)
    ) || removeAccents(card.dataset.description).includes(removeAccents(search));

    const hasTopic = card.dataset.topic === topic;
    const hasLanguage = card.dataset.language === language;
    const hasForWhom = card.dataset.forWhom === forWhom;

    // Show card if search is empty or matches
    if (!search || hasSearch) {
      // Show card if no topic filter or matches topic
      if (!topic || hasTopic) {
        // Show card if no language filter or matches language  
        if (!language || hasLanguage) {
          // Show card if no forWhom filter or matches forWhom
          if (!forWhom || hasForWhom) {
            card.style.display = "block";
          }
        }
      }
    }
  });
}

searchEl && searchEl.addEventListener("input", () => {
  validateFilters();
});

topicEl && topicEl.addEventListener("input", () => {
  validateFilters();
});

languageEl && languageEl.addEventListener("input", () => {
  validateFilters();
});

forWhomEl && forWhomEl.addEventListener("input", () => {
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

    popupButton && popupButton.addEventListener("click", () => {
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
