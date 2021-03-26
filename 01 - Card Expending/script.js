const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveFromAllClasses()
        panel.classList.add('active')
    })
})


function removeActiveFromAllClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}