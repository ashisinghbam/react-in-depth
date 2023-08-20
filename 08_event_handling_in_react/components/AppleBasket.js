import React from 'react'


const Basket = ({appleCount, basketName}) => {
  return (
    <div className='basket'>
        <h2>{appleCount} apples</h2>
        <p>{basketName}</p>
    </div>
  )
}

export default Basket
