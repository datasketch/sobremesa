const callButtons = [...document.querySelectorAll('.site-call')]

callButtons.forEach(button => {
  button.addEventListener('click', () => {
    Calendly.initPopupWidget({
      url: 'https://calendly.com/lasobremesa/30min'
    })
  })
})
