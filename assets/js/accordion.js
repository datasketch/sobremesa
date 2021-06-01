const accordions = Array.from(document.querySelectorAll('.accordion-item'))

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    this.classList.toggle('is-open')
  })
})