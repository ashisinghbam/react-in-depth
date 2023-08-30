const Button = ({ imageUrl, clickHandler, children }) => {
  return (
    <button onClick={clickHandler} title={children} className="button">
      {children}
      <img src={imageUrl} alt={children} />
    </button>
  )
}

export default Button
