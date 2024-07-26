import { setupSlider } from './lib/slider'
import { setupAccordion } from './lib/accordion'

setupAccordion()
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