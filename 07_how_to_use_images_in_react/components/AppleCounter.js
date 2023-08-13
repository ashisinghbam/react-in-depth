import React from "react"
import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from '../components/AppleBasket'
import Button from '../components/Button'
import './AppleCounter.css'

const AppleCounter = () => {
  return (
    <section>
      <AppleBasket appleCount={10} basketName="Basket 1"/>
      <Button  imageUrl={LeftArrow} imageTitle="Left Arrow" imageAlt="left-arrow"/>
      <Button  imageUrl={RightArrow} imageTitle="Right Arrow" imageAlt="right-arrow"/>
      <AppleBasket appleCount={0} basketName="Basket 2"/>
    </section>
  )
}

export default AppleCounter
