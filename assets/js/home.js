const tabsTrigger = document.getElementById('tabs-triggers')
const tabsContent = document.getElementById('tabs-content')

const images = Array.from(tabsContent.querySelectorAll('img'))

let last = tabsTrigger.querySelector('button')

tabsTrigger.addEventListener('click', function(e) {
    if (!e.target.matches('button')) return
    const button = e.target
    
    last.classList.remove('text-fire-opal', 'with-arrow-fire-opal')
    last.classList.add('text-chocolate')
    button.classList.add('text-fire-opal', 'with-arrow-fire-opal')
    button.classList.remove('text-chocolate')
    last = button
    
    const {filter} = button.dataset
    
    images.forEach(image => {
        image.classList.toggle('hidden', filter === '*' ? false : image.dataset.category !== filter)
    })
})