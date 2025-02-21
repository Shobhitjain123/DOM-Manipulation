/**
 * Write your challenge solution here
 */
btnRed = document.getElementById('redButton')
btnGreen = document.getElementById('greenButton')
btnBlue = document.getElementById('blueButton')
btnPurple = document.getElementById('purpleButton')
btnReset = document.getElementById('resetButton')

heading = document.getElementById('mainHeading')

btnRed.addEventListener("click", () => {
    heading.style.color = "#e74c3c"
})

btnGreen.addEventListener("click", () => {
    heading.style.color = "#2ecc71"
})

btnBlue.addEventListener("click", () => {
    heading.style.color = "#3498db"
})

btnPurple.addEventListener("click", () => {
    heading.style.color = "#9b59b6"
})

btnReset.addEventListener("click", () => {
    heading.style.color = "#34495e"
})