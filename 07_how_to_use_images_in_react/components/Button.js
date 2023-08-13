import React from 'react'

const Button = ({imageUrl,imageTitle, imageAlt}) => {
  return (
      <button>
      <img src={imageUrl} title={imageTitle} alt={imageAlt} />
      </button>
  )
}

export default Button
