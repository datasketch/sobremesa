const tabsTrigger = document.getElementById('tabs-triggers')
const tabsContent = document.getElementById('tabs-content')

const images = Array.from(tabsContent.querySelectorAll('img'))

let last = tabsTrigger.querySelector('.tab-trigger--active')

tabsTrigger.addEventListener('click', function(e) {
    if (!e.target.matches('button')) return
    const button = e.target
    
    last.classList.toggle('tab-trigger--active')
    button.classList.toggle('tab-trigger--active')
    
    last = button
    
    const {filter} = button.dataset
    
    images.forEach(image => {
        image.classList.toggle('hidden', filter === '*' ? false : image.dataset.category !== filter)
    })
})