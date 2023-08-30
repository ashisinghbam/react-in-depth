const Button = ({ imageUrl, buttonName, clickHandler, children }) => {
  return (
    <button onClick={clickHandler} title={buttonName}>
      <img src={imageUrl} alt={buttonName} />
    </button>
  )
}

export default Button
