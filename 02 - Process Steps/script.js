const progressBar = document.getElementById('progress')
const prvBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
nextBtn.addEventListener("click", () => {
    currentActive++
    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    updateProgressBar()
})

prvBtn.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }

    updateProgressBar()
})

function updateProgressBar() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

        console.log(currentActive)
        if (currentActive > 1) {
            prvBtn.removeAttribute('disabled')
        } else {
            prvBtn.setAttribute('disabled', "")
        }
    })

    circlesQty = circles.length - 1
    steps = 100 / circlesQty
    currentActive2 = currentActive - 1
    currentStep = currentActive2 * steps


    progressBar.style.width = currentStep + '%'

}