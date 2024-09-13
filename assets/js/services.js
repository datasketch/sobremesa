import { setupSlider } from './lib/slider'

const accordionItem = document.querySelectorAll('.accordion-item')
const accordionPanel = document.querySelectorAll('.accordion-panel')

accordionItem.forEach((el) => el.addEventListener('click', (e) => {
  const accordionItemEl = e.target.closest('button')
  const id = accordionItemEl.getAttribute('data-id')
  
  accordionItemEl.classList.toggle('hidden');
  accordionPanel[id].classList.toggle('hidden')
}))

accordionPanel.forEach((el) => el.addEventListener('click', (e) => {
  const accordionPanelEl = e.target.closest('button')
  const id = accordionPanelEl.getAttribute('data-id')
  
  accordionPanel[id].classList.toggle('hidden');
  accordionItem[id].classList.toggle('hidden')
}))


setupSlider('.slider-wrapper-experiencias', {
  autoplay: {
    delay: 5000
  }
})

setupSlider('.slider-wrapper-acompanamiento', {
  autoplay: {
    delay: 5000
  }
})
