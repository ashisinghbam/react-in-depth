import React from "react"
import LeftArrow from "../assets/images/left-arrow.png"
import RightArrow from "../assets/images/right-arrow.png"
import AppleBasket from "../components/AppleBasket"
import Button from "../components/Button"
import "./AppleCounter.css"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

let totalAppleCount = 10
let rightAppleCount = 0
let leftAppleCount = totalAppleCount - rightAppleCount

const AppleCounter = () => {
  const leftClickHandler = () => {
    if (leftAppleCount < totalAppleCount) {
      leftAppleCount++
      rightAppleCount--
      console.log(leftAppleCount)
      root.render(<AppleCounter />)
    }
  }
  const rightClickHandler = () => {
    if (rightAppleCount < totalAppleCount) {
      leftAppleCount--
      rightAppleCount++
      console.log(rightAppleCount)
      root.render(<AppleCounter />)
    }
  }
  return (
    <section>
      <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
      <Button
        clickHandler={leftClickHandler}
        imageUrl={LeftArrow}
        imageTitle="Left Arrow"
        imageAlt="left-arrow"
      />
      <Button
        clickHandler={rightClickHandler}
        imageUrl={RightArrow}
        imageTitle="Right Arrow"
        imageAlt="right-arrow"
      />
      <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
    </section>
  )
}

export default AppleCounter
