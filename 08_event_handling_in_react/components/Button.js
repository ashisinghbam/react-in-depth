import React from 'react'

const Button = ({imageUrl,imageTitle, imageAlt, clickHandler}) => {
  return (
      <button onClick={clickHandler}>
      <img src={imageUrl} title={imageTitle} alt={imageAlt} />
      </button>
  )
}

export default Button
