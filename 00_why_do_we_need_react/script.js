const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")
const leftApples = document.querySelector(".left-apples h1")
const rightApples = document.querySelector(".right-apples h1")
let leftAppleNumbers = parseInt(leftApples.innerText.match(/\d+/g).toString())
let rightAppleNumbers = parseInt(rightApples.innerText.match(/\d+/g).toString())

rightArrow.addEventListener("click", () => {
  leftAppleNumbers--
  rightAppleNumbers++
  updateText()
})

leftArrow.addEventListener("click", () => {
  if (rightAppleNumbers > 0) {
    leftAppleNumbers++
    rightAppleNumbers--
    updateText()
  }
})

function updateText() {
  leftApples.innerText = `${leftAppleNumbers} apples`
  rightApples.innerText = `${rightAppleNumbers} apples`
}
