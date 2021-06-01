const accordions = Array.from(document.querySelectorAll('.accordion-item'))

accordions.forEach(accordion => {
  accordion.addEventListener('click', function () {
    const content = this.querySelector('.accordion-content')
    const accordionIsOpen = this.classList.contains('is-open')
    this.classList.toggle('is-open')
    if (!accordionIsOpen) {
      content.style.maxHeight = `${content.getBoundingClientRect().y}px`
      return
    }
    content.style.maxHeight = 0
  })
})